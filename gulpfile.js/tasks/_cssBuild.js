const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');

module.exports = () => {
  return src('./src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      rename((path) => {
        path.extname = '.min.css';
      }),
    )
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(
      clean({
        compatibility: '*',
        level: 1,
      }),
    )
    .pipe(dest('./build/css/'));
};
