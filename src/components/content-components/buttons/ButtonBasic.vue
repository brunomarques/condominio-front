<template>
    <button :type="type"
        :class="`flex justify-center items-center gap-4 w-full bg-${color}-900 text-white p-2 rounded-md hover:bg-${color}-700 focus:outline-none focus:bg-${color}-600 dark:bg-${color}-700 dark:hover:bg-${color}-600 transition-colors duration-300 shadow-md hover:shadow-lg dark:hover:shadow-${color}-800`">
        <slot />
    </button>
</template>

<script setup>
    defineProps(
        {
            type: String,
            color: String,
        },
    );
</script>

<style scoped></style>