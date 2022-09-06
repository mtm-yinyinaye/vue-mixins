<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Lists />
  </div>
</template>

<script>

import Lists from './components/List.vue'

export default {
  name: 'App',
  components: {
    Lists
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
