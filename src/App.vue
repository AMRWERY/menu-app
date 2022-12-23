<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './ui/TheHeader.vue';

export default {
  name: 'App',

  components: {
    TheHeader
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
}
</style>
