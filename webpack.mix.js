const mix = require('laravel-mix');


mix.setPublicPath('../')

mix.react('resources/js/app.js', 'js')
    .sass('resources/sass/app.sass', 'css').browserSync({
        proxy: process.env.APP_URL,

        files: [
            'app/**/*.php',
            'resources/views/**',
            '../js/**',
            '../css/**'
        ]
    })
