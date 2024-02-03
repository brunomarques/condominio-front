<template>
    <button :type="type"
        :class="'w-full bg-' + color + '-900 text-white p-2 rounded-md hover:bg-' + color + '-700 focus:outline-none focus:bg-' + color + '-600 dark:bg-' + color + '-700 dark:hover:bg-' + color + '-600 transition-colors duration-300 shadow-md hover:shadow-lg dark:hover:shadow-' + color + '-800'">
        {{ text }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(
    {
        text: String,
        type: String,
        color: String,
    },
);


</script>

<style scoped></style>