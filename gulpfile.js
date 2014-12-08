//	These are
//			 some vars
var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	concat 	= require('gulp-concat'),
	prfx	= require('gulp-autoprefixer'),
	comb	= require('gulp-csscomb'),
	s 		= 'src/';


gulp.task('default', [ 'build' ]);
gulp.task('test', [ 'build', 'tester' ]);


//The primary build task
gulp.task( 'build', [ 'buildCore', 'buildBase', 'buildLesslie' ] )


//	Builds out all the stuff that, if compiled, doesn't create anything
//	i.e: all the vars, mixins, etc.
gulp.task('buildCore', function(){

	gulp.src([
			s+'vars/vars.less',
			s+'vars/colors.less',
			s+'mixins/*.less'
		])
		.pipe(concat('core.less'))
		.pipe(gulp.dest('./tmp/'));

});


//	Builds out all the stuff that, if compiled, actually adds CSS to the file
//	i.e: all the resets, modules, spacing, typography, etc.
gulp.task('buildBase', function(){

	gulp.src([
			s+'base/reset.less',
			s+'base/spacing.less',
			s+'base/typography.less',
			s+'base/base.less',
			s+'modules/*.less'
		])
		.pipe(concat('base.less'))
		.pipe(gulp.dest('./tmp/'));

});


//	Actually builds Lesslie
gulp.task('buildLesslie', function(){

	gulp.src([
			'tmp/core.less',
			'tmp/base.less'
		])
		.pipe(concat('lesslie.less'))
		.pipe(gulp.dest('./dist/'));

});


// //	::TODO:: write a (better) tester
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
