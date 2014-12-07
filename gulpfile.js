var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	concat 	= require('gulp-concat'),
	prfx	= require('gulp-autoprefixer'),
	comb	= require('gulp-csscomb');

gulp.task('default', [ 'compile' ]);
gulp.task('test', [ 'compile', 'tester' ]);

//	compile is the main task that compiles each module
gulp.task('compile',  function(){

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




// //	::TODO:: write a tester
gulp.task( 'tester', function(){


	gulp.src( 'test/style.less' )
		.pipe( less() )
		.pipe( prfx({
				browsers: ['last 2 versions'],
            	cascade: true
			    }) )
				.on( 'error', function(e){
					console.log("Ya done goofed!");
					console.log(e);
				} )
		.pipe( comb() )
		.pipe( gulp.dest( 'test/' ) );

});
