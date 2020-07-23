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

  gulp.watch("./css/*.css", injectCss);
  gulp.watch("./*.html").on("change", browserSync.reload);
  // Commented this out in case Joe does not use JavaScript.  If he does, then look at how Joe does his folders and make any changes to the code below.  ./ means the root folder, basically the branding-portfolio folder.  js/ means the JavaScript folder.  Joe may call it this, or he may not.  He might not even put it inside a folder.  If he doesn't, then go by the gulp.watch just above this one for more guidance.  ** means any folder inside of this folder.  *.js means any JavaScript file.  The rest of the code from .on onwards just says to reload the browser when any JavaScript file changes.
  //   gulp.watch("./js/**/*.js").on("change", browserSync.reload);
};

exports.default = watch;
