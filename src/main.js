import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import MyPlugin from './plugins/first-vue-plugin'

Vue.config.productionTip = false

new Vue({
  vuetify,
  MyPlugin,
  render: h => h(App),
}).$mount('#app')

Vue.hello()