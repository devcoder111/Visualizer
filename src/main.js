import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'


console.log("mode3", process.env.NODE_ENV )
console.log("publicpath", window  )
loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
