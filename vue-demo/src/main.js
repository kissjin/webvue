import Vue from 'vue'
import App from './App'
import router from './router'
import Alert from './components/alert'
import icon from './components/icon'
import './assets/iview.css'

Vue.config.productionTip = false
Vue.use(Alert)
Vue.use(icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { Alert },
  render: h => h(App)
})
