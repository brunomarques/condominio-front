<template>
<!--  <navbar-top />-->
  <div class="h-screen gradient-form bg-gray-200">
    <div class="container pb-12 px-6 h-full mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
//import NavbarTop from "@/components/partials/NavbarTop";

export default {
  name: "DefaultLayout",
  components: {
    //NavbarTop
  }
}
</script>

<style scoped>

</style>