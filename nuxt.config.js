// const url = '/comaze/'

// for vercel
const url = '/comaze/'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'CoMaze',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'perfect maze control',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://kaiiy.github.io/comaze/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'CoMaze',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'perfect maze control',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://kaiiy.github.io/comaze/share.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'robots', name: 'robots', content: 'noindex' },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        href: url + 'door.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: url + 'door.png',
      },
      {
        rel: 'apple-touch-icon',
        href: url + 'door.png',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/font.css',
    // 'the-new-css-reset/css/reset.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // build時のwarn消すためだけ
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  router: {
    base: url,
  },

  build: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
    },
    theme: {
      dark: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
