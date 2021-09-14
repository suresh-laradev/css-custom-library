// Import from gulp package

const { src, dest, watch, series } = require('gulp')

// import gulp-sass plugin 
const sass = require('gulp-sass')(require('sass'))

// function to compile sass to css file and pipe it to dest folder.

function buildStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)

// Learn Gulp basics

// let gulp = require('gulp');
/* The require statement tells Node to look into the node_modules folder for a package named gulp.Once the package is found, we assign its contents to the variable gulp. */

/* We can now begin to write a gulp task with this gulp variable. The basic syntax of a gulp task is: */
// gulp.task('test', function (completed) {
//     console.log('test')
//     completed()
// })

/* **Note : Since your task might contain asynchronous code you have to signal gulp when your task has finished executing (= "async completion").

 In Gulp 3.x you could get away without doing this.If you didn't explicitly signal async completion gulp would just assume that your task is synchronous and that it is finished as soon as your task function returns. Gulp 4.x is stricter in this regard. You have to explicitly signal task completion.

 link to explore: https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async

 */
