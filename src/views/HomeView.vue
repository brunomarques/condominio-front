<template>
  <div class="text-center">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
