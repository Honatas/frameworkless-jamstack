const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const git = require('git-rev-sync');
const replace = require('gulp-replace');
const typescript = require('gulp-typescript');

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
    .pipe(project()).js
    .pipe(dest(target));
}


const build = series(
  clean,
  parallel(
    indexHtml,
    ts
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
