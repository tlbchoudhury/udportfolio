var gulp = require("gulp");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
// var imagemin = require("gulp-imagemin");
// var imagemin = require("grunt-contrib-imagemin");
 
gulp.task("minify-js", function() {
 return gulp.src("js/**.js")
  .pipe(uglify())
  .pipe(gulp.dest("build/js"))
 });

gulp.task("minify-view-js", function() {
 return gulp.src("views/js/**.js")
  .pipe(uglify())
  .pipe(gulp.dest("build/views/js"))
 });

gulp.task("copy-readme", function() {
 return gulp.src("README.md")
  .pipe(gulp.dest("build"))
 });



gulp.task("minify-html", function() {
 return gulp.src("*.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build"));
});

gulp.task("minify-pizza-html", function() {
 return gulp.src("views/pizza.html")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build/views"));
});

gulp.task("minify-css", function() {
 return gulp.src("css/*.css")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build/css"));
});

gulp.task("minify-view-css", function() {
 return gulp.src("views/css/*css")
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build/views/css"));
});


// gulp.task("minify-image", function() {
//  return gulp.src("img/*.png")
//    .pipe(imagemin())
//    .pipe(gulp.dest("build/img"));
// });

gulp.task("copy-image", function() {
 return gulp.src("img/*")
  .pipe(gulp.dest("build/img"))
 });

gulp.task("copy-view-image", function() {
 return gulp.src("views/images/*")
  .pipe(gulp.dest("build/views/images"))
 });


gulp.task("default", ["minify-js", "minify-view-js", "copy-readme", "minify-html", "minify-pizza-html", 
	"minify-css", "minify-view-css", "copy-image", "copy-view-image"]);