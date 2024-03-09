<template>
    <footer class="p-4 md:p-8 lg:p-10 mt-24">
        <div class="mx-auto max-w-screen-xl text-center">
            <h3 class="flex justify-center items-center relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
                Condomínio Vista do Sol    
            </h3>

            <p class="my-6 text-gray-500 dark:text-gray-400">
                Gestão condominal
            </p>

            <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <router-link :to="{ name: 'home' }" class="mr-4 hover:underline md:mr-6 ">Home</router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'about' }" class="mr-4 hover:underline md:mr-6 ">About</router-link>
                </li>
            </ul>

            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © {{ year }}
                Condomínio Vista do Sol. Todos os direitos reservados.
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