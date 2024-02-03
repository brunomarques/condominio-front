<template>
    <div>
        <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
        <input :type="type" :name="name" :id="id" :value="value"
            class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            :placeholder="placeholder" :required="required" v-model="myVModelName">
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(
    {
        label: String,
        type: String,
        placeholder: String,
        id: String,
        name: String,
        required: Boolean,
        value: String
    }
);

const myVModelName = ref(props.name)

</script>

<style scoped></style>