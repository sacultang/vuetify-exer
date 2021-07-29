import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'xs'
  },
  theme: {
    themes: {
      light: {
        primary: '#f44336'
      }
    }
  }
})