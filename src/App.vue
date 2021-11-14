<template>
<v-app>
<v-toolbar app>
  <v-toolvar-title class="headline text-uppercase primary">
    <span>Vuetify</span>
    <span class="font-weight-light">MATERIAL DESIGN</span>
  </v-toolvar-title>
  <v-spacer></v-spacer>
  <v-btn
    flat
    href="https://naver.com"
    target="_blank"
  >
    <span class="mr-2">Latest Release</span>
  </v-btn>
</v-toolbar>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    // hello()
    this.$myMethod()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
