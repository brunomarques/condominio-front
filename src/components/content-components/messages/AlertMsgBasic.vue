<template>
    <div :class="`flex items-center p-4 mb-4 text-${color}-700 rounded-lg bg-${color}-200 dark:bg-gray-800 dark:text-${color}-500 shadow-md shadow-${color}-500 hover:shadow-lg hover:shadow-${color}-500 dark:hover:shadow-${color}-500 transition duration-200`"
        role="alert">
        <div class="ms-3 text-sm font-medium">
            <span class="font-medium">{{ title }}</span>&nbsp;
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps(
    {
        title: String,
        color: String,
    },
);
</script>

<style scoped></style>