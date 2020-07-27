const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const injectCss = () => {
  return gulp.src("./css/*.css").pipe(browserSync.stream());
};

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./css/**/*.css", injectCss);
  gulp.watch("./**/*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
};

exports.default = watch;
