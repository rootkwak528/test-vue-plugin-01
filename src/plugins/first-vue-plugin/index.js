// MyPlugin.js
import Vue from 'vue'

const MyPlugin = {
    install (Vue) {
        Vue.hello = function() {
            console.log('hello from plugin')
        }

        Vue.prototype.$myMethod = function() {
            console.log("$myMethod")
        }
    }
}

export default MyPlugin

Vue.use(MyPlugin)