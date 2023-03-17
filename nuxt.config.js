import { resolve } from 'path'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    target: 'static',

    router: {
        base: '/nuxt-js-example/'
    },
  
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'test-nuxt',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    alias: {
        'style': resolve(__dirname, './assets/style'),
        'images': resolve(__dirname, './assets/images'),
        'logo': resolve(__dirname, './assets/logo'),
        'scss': resolve(__dirname, './assets/scss')
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/scss/main.scss'
    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}