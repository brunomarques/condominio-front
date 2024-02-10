<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')"
    class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});

const $emit = defineEmits([
  'update:modelValue',
  'blur',
]);
</script>

<style scoped></style>