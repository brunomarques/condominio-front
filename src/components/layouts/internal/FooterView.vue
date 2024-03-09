<template>
    <footer class="mt-4 rounded-md bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-4">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>

                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>

            <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {{ year }} Condominium Gestor. Todos os direitos reservados.
            </span>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const year = ref('');

let funcGetYear = () => {
    return new Date().getFullYear();
};

year.value = funcGetYear();
</script>

<style scoped>

</style>