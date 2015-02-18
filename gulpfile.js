////////////////////////////////////////////////
//					  		LESSLIE:										//
//		    A modular LESS library for 					//
//				     the rest of us!								//
////////////////////////////////////////////////
var gulp 	 = require('gulp'),
		del    = require('del'),
		less 	 = require('gulp-less'),
		concat = require('gulp-concat'),
		prfx	 = require('gulp-autoprefixer'),
		comb	 = require('gulp-csscomb'),
		mini   = require('gulp-strip-css-comments'),
		s 		 = 'src/';


gulp.task('default', [ 'build' ]);
gulp.task('test', [ 'build', 'tester' ]);


//The primary build task
gulp.task( 'build', [ 'build-reset', 'build-lesslie' ] );


//	builds out the reset
gulp.task( 'build-reset', function(){

	return gulp.src([
						s+'base/normalize.less',
						s+'base/reset.less'
					])
				.pipe(concat('reset.less'))
				.pipe(gulp.dest('./dist/'));

});

gulp.task( 'build-lesslie', function(){

	return gulp.src([
							s+'vars/vars.less',
							s+'vars/colors.less',
							s+'base/typography.less',
							s+'base/base.less',
							s+'base/spacing.less',
							s+'mixins/*.less',
							s+'modules/*.less'
						])
						.pipe(concat('lesslie.less'))
						.pipe(gulp.dest('./dist/'));

});


// //	::TODO:: write a (better) tester
gulp.task( 'tester', [ 'build' ], function(){

	return gulp.src( 'test/style.less' )
					.pipe( less() )
							.on( 'error', function(e){
								console.log("Ya done goofed!");
								console.log("Error on line " + e.line + " in the file " + e.filename);
								// console.log(e)
							} )
					.pipe( prfx({
							browsers: ['last 2 versions'],
			            	cascade: true
						  }) )
					.pipe( comb() )
					.pipe( gulp.dest( 'test/' ) );

});
