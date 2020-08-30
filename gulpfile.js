const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const del = require('del');
const eslint = require('gulp-eslint');
const git = require('git-rev-sync');
const handlebars = require('gulp-handlebars');
const merge = require('merge2');
const pipeline = require('readable-stream').pipeline;
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const typescript = require('gulp-typescript');
const uglify = require('gulp-uglify');
const wrap = require('gulp-wrap');

const target = 'dist';

function clean() {
  return del('dist');
}

function indexHtml() {
  return src('src/index.html')
  .pipe(replace('[version]', git.short()))
  .pipe(dest(target));
  // .pipe(connect.reload());
}


function ts() {
  var project = typescript.createProject('tsconfig.json');
  return project.src()
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(project()).js;
    // .pipe(connect.reload());
}

function templates() {
  return src('src/**/*.hbs')
  .pipe(rename((path) => {
    if (path.basename.startsWith('_')) {
      path.basename = path.basename.substring(1);
    }
  }))
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'Hbs',
    noRedeclare: true,
  }));
}

function partials() {
  return src('src/**/_*.hbs')
  .pipe(handlebars())
  .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Hbs[<%= processPartialName(file.relative) %>]);', {}, {
    imports: {
      processPartialName: function(fileName) {
        return JSON.stringify(path.basename(fileName, '.js').substring(1));
      }
    }
  }));
}

function js() {
  let stream = ts();
  stream = merge(
    stream,
    templates(),
    partials(),
  );
  return stream
    .pipe(concat(`app.${git.short()}.js`))
    .pipe(dest(`${target}/js`));
}

const build = series(
  clean,
  parallel(
    indexHtml,
    js
  ),
);

// const start = series(
//   build,
//   parallel(
//       server,
//       reverseProxy,
//       watchers
//   )
// );

exports.default = build;
// exports.start = start;
exports.clean = clean;
// exports.lint = lint;
