<template>
     <div class="font-sans">
        <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-50 ">
            <div class="-mt-8 mb-8 relative sm:max-w-sm w-full flex justify-center items-center">
                <h2 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                    Condominium Gestor
                </h2>
            </div>

            <div class="relative sm:max-w-sm w-full">
                <div class="card bg-blue-400 shadow-md w-full h-full rounded-3xl absolute transform -rotate-6"></div>
                <div class="card bg-red-400 shadow-md w-full h-full rounded-3xl absolute transform rotate-6"></div>

                <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md border-1 border-gray-600">
                    <router-view />
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script setup>
    import Footer from './Footer.vue';
</script>

<style scoped>
    h2 {
        font-size: 18pt;
    }
</style>