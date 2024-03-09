<template>
    <footer class="mt-8 relative sm:max-w-sm w-full flex justify-center items-center text-sm">
        © {{ year }} Condominium Gestor. Todos os direitos reservados.
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