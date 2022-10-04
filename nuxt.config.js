export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TG_ZAPAD',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: '~/plugins/vue-swiper', ssr: false },
    { src: '~/plugins/vue-picture-swipe', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     [
       'nuxt-sweetalert2',
       {
         confirmButtonColor: '#FFDD7C'
       }
     ],
    '@nuxtjs/axios'
    // https://go.nuxtjs.dev/bootstrap
      ,
      [
          'nuxt-i18n',
          {
              strategy: 'prefix',
              locales: [
                  'ru',
                  'en'
              ],
              defaultLocale: 'en',
              vueI18n: {
                  fallbackLocale: 'en'
              }
          }
      ]
  ],

    axios: {
        baseURL: process.env.NUXT_ENV_API_URL_LIVE
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      },
    },
  }
}
