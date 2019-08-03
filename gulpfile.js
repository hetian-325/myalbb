let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');


gulp.task("watchall",async ()=>{

	gulp.watch("*.html",async ()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\albb"));
	});

	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js")
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\albb\\js"));
	});

	gulp.watch("img/**/*",async ()=>{
		gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\albb\\img"));
	});

	gulp.watch("sass/**/*",async ()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\albb\\css"));
	});
})