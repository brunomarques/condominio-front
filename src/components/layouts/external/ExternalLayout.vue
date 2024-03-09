<template>
    <main>
        <ExternalNav />

        <router-view />

        <ExternalFooter />
    </main>
</template>

<script setup>
    import ExternalNav from './ExternalNav.vue';
    import ExternalFooter from './ExternalFooter.vue';
</script>

<style scoped></style>
