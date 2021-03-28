const gulp = require('gulp');
const browserSync = require('browser-sync');
const dartScss = require('gulp-dart-scss');
const fileinclude = require('gulp-file-include');
const combineMq = require('gulp-combine-mq');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

const path = {
    build: {
        html: 'dist/',
        js: 'dist/',
        style: 'dist/',
        img: 'dist/images/',
        libs: 'dist/libs/',
        fonts: 'dist/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/scss/main.scss',
        img: 'src/images/**/*.*',
        libs: 'src/libs/**/*.*',
        fonts: 'src/fonts/**/*.*'
    }
};

// HTML
const html = () => {
    return gulp.src(path.src.html)
        .pipe(fileinclude('@@'))
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
}
exports.html = html;


// Style
const style = () => {
    return gulp.src(path.src.style)
        .pipe(
            dartScss({
                includePaths: [path.src.style],
                sourceMap: false,
                errLogToConsole: true
            }))
        .pipe(combineMq())
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
        .pipe(cssmin({ restructuring: false }))
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.stream());
}
exports.style = style;

// Scripts
const scripts = () => {
    return gulp.src(path.src.js)
        .pipe(fileinclude('//'))
        .pipe(terser({
            toplevel: true
        }).on('error', function (e) { console.log(e.message) }))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}
exports.scripts = scripts;

// Fonts
const fonts = () => {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.stream());
}
exports.fonst = fonts;

// Libs
const libs = () => {
    return gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs))
        .pipe(browserSync.stream());
}
exports.libs = libs;

// Images
const images = () => {
    return gulp.src(path.src.img)
        .pipe(newer(path.build.img))
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream());
}
exports.images = images;

// Images + Fonts + Libs
const media = gulp.parallel(images, fonts, libs);

// Media
exports.media = media;

// Assets
const assets = () => {
    return gulp.src('./src/assets/*.*')
    .pipe(gulp.dest('./'))
}
exports.assets = assets;

// Watch
const watch = () => {
    browserSync.init({
        server: {
            baseDir: path.build.html
        }
    });

    gulp.watch('src/**/**/*.html', html)
    gulp.watch('src/js/**/*.js', scripts)
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('src/images/**/*.*', images)
    gulp.watch('src/fonts/**/*.*', fonts)
}
exports.watch = watch;

// Build
const build = gulp.parallel(html, style, scripts, media, assets);
exports.build = build;

// Default
exports.default = gulp.series(watch);