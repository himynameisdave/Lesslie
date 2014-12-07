var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	prfx	= require('gulp-autoprefixer'),
	comb	= require('gulp-csscomb');

gulp.task('default', function(){

	var s = 'src/';

	gulp.src([
				s+'base/vars.less',
				s+'base/colors.less',
				s+'mixins/*.less',
				s+'base/spacing.less',
				s+'base/base.less',
				s+'modules/*.less'
			 ])
		.pipe(concat('lesslie.less'))
		.pipe(gulp.dest('./dist/'));

});

//	::TODO:: write a tester
// gulp.task( 'test', [ 'default', function(){

// 	gulp.src( 'dist/core.less' );


// } ] );

