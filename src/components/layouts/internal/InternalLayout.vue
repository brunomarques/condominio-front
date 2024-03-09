<template>
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <SidenavView />

        <NavbarView />

        <main class="p-4 md:ml-64 h-auto pt-20">
            <router-view />

            <FooterView />
        </main>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { initFlowbite } from 'flowbite';

    import SidenavView from './SidenavView.vue';
    import NavbarView from './NavbarView.vue';
    import FooterView from './FooterView.vue';

    onMounted(() => {
        initFlowbite();
    });
</script>

<style scoped></style>