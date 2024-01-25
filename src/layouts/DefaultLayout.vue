<template>
  <navbar-top />

  <div class="xl:h-screen h-full gradient-form  bg-gray-200">
    <div class="container py-10 px-6 h-full mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarTop from "@/components/partials/NavbarTop";

export default {
  name: "DefaultLayout",
  components: {
    NavbarTop
  }
}
</script>

<style scoped>

</style>