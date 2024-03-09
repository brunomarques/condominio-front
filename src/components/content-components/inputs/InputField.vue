<template>
    <div>
        <label v-if="label" :for="name" class="text-sm text-gray-500 ml-2 dark:text-white font-semibold">{{ label }}</label>
        <input
            :id="name"
            :name="name"
            v-bind="inputBinds"
            :type="inputType"
            :placeholder="placeholder"
            class="block w-full border-1 border-slate-100 bg-gray-100 focus:border-slate-300 h-11 rounded-xl shadow-lg hover:border-slate-300 hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
        <div
            :id="`error.${name}`"
            class="italic text-sm text-red-500 dark:text-red-600 mt-2">
            {{ getError(name) }}
        </div>
    </div>
</template>

<script setup>
    import { toRef } from 'vue';

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
        },
        placeholder: {
            type: String,
            required: false,
        },
        inputType: {
            type: String,
            default: 'text',
            required: false,
        },
        errorBag: {
            type: Object,
            required: true,
        },
        defineInputBinds: {
            type: Function,
            required: true,
        },
        //modelValue: String,
    });

    const errorBag = toRef(props, 'errorBag');
    const inputBinds = props.defineInputBinds(props.name);

    const getError = (name) => {
        const err = errorBag.value[name];
        return err ? err[0] : '';
    };
</script>

<style scoped></style>