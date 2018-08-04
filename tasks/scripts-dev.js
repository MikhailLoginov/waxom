'use strict'

const babel = require('gulp-babel');

module.exports = function(options) {
  return function() {
    return $.gulp
      .src(options.src)
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('temp.js'))
      //.pipe(babel())
      .pipe($.gp.rename('build.js'))
      //.pipe($.gp.uglify())
      .pipe($.gp.sourcemaps.write('.'))
      .pipe($.gulp.dest('./dist/assets/scripts'))
      .pipe($.browserSync.stream())
  };
};
