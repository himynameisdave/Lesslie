//	These are
//			 some vars
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
gulp.task( 'build', ['buildCore', 'buildBase', 'buildLesslie', 'delTemp']  )


//	Builds out all the stuff that, if compiled, doesn't create anything
//	i.e: all the vars, mixins, etc.
gulp.task('buildCore', function(){

	return gulp.src([
					s+'vars/vars.less',
					s+'vars/colors.less',
					s+'mixins/*.less'
				])
				.pipe(concat('core.less'))
				.pipe(gulp.dest('./tmp/'))

});

//	Builds out all the stuff that, if compiled, actually adds CSS to the file
//	i.e: all the resets, modules, spacing, typography, etc.
gulp.task('buildBase', function(){

	return gulp.src([
					s+'base/normalize.less',
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
gulp.task('buildLesslie', [ 'buildCore', 'buildBase' ], function(){

	return gulp.src([
						'tmp/core.less',
						'tmp/base.less'
					])
					.pipe(concat('lesslie.less'))
					.pipe(mini())
					.pipe(gulp.dest('./'));

});

//	Deletes the temp folder after other build tasks have finished
gulp.task( 'delTemp', ['buildCore', 'buildBase', 'buildLesslie'], function(){

	return del( ['tmp'] , function (err, deletedFiles) {
					if(err){
						console.log(err);
						return;
					}

					var dels = 'deleted the following: \n';
			    deletedFiles.forEach( function( val, index ){
			        dels +=  '  - '+val+'\n';
			    })
			    console.log(dels);
			  });

});



// //	::TODO:: write a (better) tester
gulp.task( 'tester', [ 'build','buildCore', 'buildBase', 'buildLesslie', 'delTemp' ], function(){

	return gulp.src( 'test/style.less' )
					.pipe( less() )
							.on( 'error', function(e){
								console.log("Ya done goofed!");
								console.log("Error on line " + e.line + " in the file " + e.filename);
							} )
					.pipe( prfx({
							browsers: ['last 2 versions'],
			            	cascade: true
						  }) )
					.pipe( comb() )
					.pipe( gulp.dest( 'test/' ) );

});
