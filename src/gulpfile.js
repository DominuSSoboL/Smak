var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Less
gulp.task('less', function(){
	return gulp.src('less/style.less')
		.pipe(sourcemaps.init())
		.pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({
      browsers: [
        "last 4 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ],
      cascade: false
    }))
		.pipe(gulp.dest('css'));			
});

// Copy files
gulp.task('html', function(){
  return gulp.src('*.html')
    .pipe(gulp.dest('../production'));
});
gulp.task('css', function(){
  return gulp.src('css/*.css')
    .pipe(gulp.dest('../production/css'));
});
gulp.task('js', function(){
  return gulp.src('js/*.js')
    .pipe(gulp.dest('../production/js'));
});
gulp.task('img', function(){
  return gulp.src('img/**')
    .pipe(gulp.dest('../production/img'));
});
gulp.task('fonts', function(){
  return gulp.src('fonts/**')
    .pipe(gulp.dest('../production/fonts'));
});
gulp.task('copyLess', function(){
  return gulp.src('less/**')
    .pipe(gulp.dest('../less'));
});

gulp.task('production', ['html','css','js','img', 'fonts']);

// Watch
gulp.task('watch:less', function(){
	gulp.watch('less/**/*.less', ['less']);
});

// Other started
gulp.task('default', ['less', 'watch:less']);