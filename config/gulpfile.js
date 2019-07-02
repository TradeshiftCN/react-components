const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('default', function() {
  gulp
    .src('../lib/components/**/*.js')
    .pipe(replace(/require\(['"](\.\/)*(\.\.\/)*(\w+\/)*\w+\.less['"]\);/, ''))
    .pipe(replace(/prefixCls/g, JSON.stringify('ts-rc')))
    .pipe(gulp.dest('../lib'));
});
