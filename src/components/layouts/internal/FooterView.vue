<template>
    <footer class="py-6 px-3 mt-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md shadow-gray-200 dark:shadow-gray-700 md:flex md:items-center md:justify-between">
        <div class="w-full max-w-screen-xl mx-auto">
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {{ year }} Condominium Gestor. Todos os direitos reservados.
            </span>
        </div>
    </footer>
</template>

<script setup>
    import { BiBuildings } from 'vue3-icons/bi';
    import { ref } from 'vue';

    const year = ref('');

    let funcGetYear = () => {
        return new Date().getFullYear();
    };

    year.value = funcGetYear();
</script>

<style scoped>

</style>