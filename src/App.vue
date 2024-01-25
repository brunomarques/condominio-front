<template>
  <nav class="dark:bg-gray-600 dark:text-gray-700">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/fullcalendar">Full Calendar</router-link>
  </nav>

  <div class="container mx-auto">
    <router-view/>

    <button @click="toggleDark()" class="px-4 py-2 text-white bg-gray-600 dark:bg-purple-700">
        Dark Toggle
    </button>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import { Tooltip, Carousel, initTE } from "tw-elements";
  import { initModals, } from 'flowbite';

  import { useDark, useToggle } from '@vueuse/core';

  onMounted(() => {
    //Tailwind Elements
    initTE({
      Tooltip,
      Carousel
    });

    //Tailwind Flowbite
    initModals();
  });

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
