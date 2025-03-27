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
            emerald: '#11B254',
            space: '#404E4D',
            background: '#ADB6C4',
            something: '#00ff00',
          },
        },
      },
    }
  })
  app.vueApp.use(vuetify)
})