import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            emerald: '#241023',
            space: '#404E4D',
            background: '#F0F8EA',
            something: '#00ff00',
          },
        },
      },
    }
  })
  app.vueApp.use(vuetify)
})