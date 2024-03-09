<template>
    <nav class="bg-white dark:bg-gray-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-2xl bg-opacity-80 shadow-md">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link :to="{ name: 'home' }" class="flex items-center space-x-3 rtl:space-x-reverse">
                <!--img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"-->
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cond. Vista do Sol</span>
            </router-link>

            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <!--button @click="toggleDark()" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white" >
                    <IconLightMode v-if="isDark" />
                    <IconDarkMode v-else />
                </button-->

                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                    <li>
                        <router-link :to="{ name: 'home' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                            Home
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'about' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            About
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'login' }" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Área do condômino
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
    // import IconLightMode from '@/components/icons/IconLightMode.vue';
    // import IconDarkMode from '@/components/icons/IconDarkMode.vue';

    // import { ref } from 'vue';
    // import { useDark, useToggle } from '@vueuse/core';

    // const isDark = useDark();
    // const toggleDark = useToggle(isDark);
    // const actionDarkLight = ref('');
    // console.log(isDark.value);
</script>

<style scoped></style>
