// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt',    
    '@nuxtjs/color-mode'],

    colorMode: {
      classSuffix: "", // Usa "dark" en lugar de "dark-mode"
    },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2025-03-07',
  components: {
    dirs: [
      // Componentes globales en `~/components`
      {
        path: '~/components',
        pathPrefix: false, // Sin prefijo para los componentes globales
        global: true, // Importa los componentes globalmente
      },
      // Componentes de shadcn en `~/components/ui`
      {
        path: '~/components/ui',
        pathPrefix: false, // Sin prefijo para los componentes de shadcn
      },
    ],
  },

  imports: {
    dirs: [
      'composables/**', // Auto-importa composables
      'utils/**', // Auto-importa utilidades
    ],
  },
})