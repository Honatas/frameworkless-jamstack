const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const declare = require('gulp-declare');
const del = require('del');
const eslint = require('gulp-eslint');
const git = require('git-rev-sync');
const handlebars = require('gulp-handlebars');
const merge = require('merge2');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const rollup = require('gulp-better-rollup');
const rollupTs = require('@rollup/plugin-typescript');
const terser = require('gulp-terser');
const typescript = require('gulp-typescript');
const wrap = require('gulp-wrap');

const target = 'dist';

const jsLib = [
  'node_modules/handlebars/dist/handlebars.runtime.min.js',
];

function clean() {
  return del('dist');
}

function indexHtml() {
  return src('src/index.html')
  .pipe(replace('[version]', git.short()))
  .pipe(dest(target))
  .pipe(connect.reload());
}

function css() {
  return src('src/**/*.css')
    .pipe(postcss())
    .pipe(concat('app.css'))
    .pipe(dest(`${target}/css`))
    .pipe(connect.reload());
}

function lintTs() {
  return typescript.createProject('tsconfig.json').src()
    .pipe(eslint())
    .pipe(eslint.format());
}

function ts() {
  lintTs();
  return src('src/index.ts')
    .pipe(rollup({
      plugins: [rollupTs()],
    }, {
      format: 'iife',
    }));
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
  let stream = merge(
    ts(),
    merge(
      templates(),
      partials()
    )
  );
  if (process.env.NODE_ENV === 'production') {
    stream = stream.pipe(terser());
  }

  return merge(
    src(jsLib),
    stream
  )
    .pipe(concat('app.js'))
    .pipe(dest(`${target}/js`))
    .pipe(connect.reload());
}

function server(cb) {
  connect.server({
    root: 'dist',
    port: 3001,
    livereload: true,
    fallback: target + '/index.html'
  });
  cb();
}

function netlify(cb) {
  if (process.env.NODE_ENV === 'production') {
    return src('config/_redirects').pipe(dest(target));
  } else {
    cb();
  }
}

function watchers(cb) {
  watch('src/index.html', indexHtml);
  watch('src/**/*.css', css);
  watch(['src/**/*.ts', 'src/**/*.hbs', 'src/handlebars-helpers.js'], js);
  cb();
}

const build = series(
  clean,
  parallel(
    netlify,
    indexHtml,
    css,
    js,
  ),
);

const start = series(
  build,
  parallel(
    server,
    watchers
  )
);

exports.default = build;
exports.start = start;
exports.lint = lintTs;
