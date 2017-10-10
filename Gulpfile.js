const gulp = require('gulp');
const notifier = require('node-notifier');
const path = require('path');

gulp.task('cucumber', function() {
  const { exec } = require('child_process');
  exec('clear && node_modules/.bin/cucumber-js', (error, stdout, stderr) => {
      if (error) {
          notifier.notify({
            title: 'Red',
            message: 'Your test(s) failed',
            icon: path.join(__dirname, 'failed.png')
          });
      } else {
          notifier.notify({
            title: 'Green',
            message: 'All tests passed (you can refactor)',
            icon: path.join(__dirname, 'passed.png')
          });
      }

      console.log(stdout);
      console.log(stderr);
  });
});

gulp.task('watch', function() {
  gulp.watch(['features/**/*.js', 'script/**/*.js'], ['cucumber']);
});

gulp.task('default', ['cucumber', 'watch']);
