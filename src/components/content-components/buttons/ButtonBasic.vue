<template>
    <button :type="type"
        :class="`bg-${color}-500 dark:bg-${color}-600 hover:bg-${color}-600 dark:hover:bg-${color}-700 p-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105`">
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