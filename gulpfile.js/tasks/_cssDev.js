const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

module.exports = () => {
  return src('./src/sass/*.sass', { sourcemaps: true })
    .pipe(
      sass({
        outputStyle: 'nested',
      }).on('error', sass.logError),
    )
    .pipe(
      rename((path) => {
        path.extname = '.min.css';
      }),
    )
    .pipe(dest('./dev/css/', { sourcemaps: true }));
};
