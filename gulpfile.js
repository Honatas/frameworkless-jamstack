const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const git = require('git-rev-sync');
const replace = require('gulp-replace');

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



const build = series(
  clean,
  parallel(
    indexHtml,
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
