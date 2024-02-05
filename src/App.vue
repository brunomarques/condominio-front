<script setup>
import { onMounted } from 'vue';

import { initFlowbite } from 'flowbite';
import { initTE, Ripple } from 'tw-elements';

import NavBar from './components/content-components/NavBar.vue';

onMounted(() => {
  //Tailwind Elements
  initTE({
    Ripple,
  });

  //Tailwind Flowbite
  initFlowbite();

  // Set a cookie
  //$cookies.set('teste', 'valorrrr');

  // Get a cookie
  //console.log($cookies.get('teste'));

  // Remove a cookie
  //$cookies.remove('teste');

  // Exist a cookie name
  //console.log($cookies.isKey('teste'));

  // Get All cookie name
  //console.log($cookies.keys());
});
</script>

<template>
  <NavBar />
  <div class="absolute inset-0 z-0 bg-grid-body bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

  <router-view />
</template>

<style scoped>

</style>
