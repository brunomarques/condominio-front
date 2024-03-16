<template>
    <router-link v-if="props.routeName"
        :id="props.id"
        :to="{ name: props.routeName }"
        :aria-controls="props.ariaControls"
        :data-collapse-toggle="props.dataCollapseToggle"
        class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
        <div class="w-7 h-7 rounded-md text-center flex items-center justify-center shadow-md text-slate-800 dark:text-white bg-white shadow-slate-300 dark:bg-slate-500 dark:shadow-slate-800">
            <ComponentImported :class="'w-6 h-6'" />
        </div>

        <span class="ml-2 text-slate-800 dark:text-white font-light text-sm">{{ props.title }}</span>

        <LuChevronDown v-if="props.ariaControls" class="text-end w-6 h-6 text-slate-800 dark:text-white" />
    </router-link>

    <span v-else
        :id="props.id"
        :aria-controls="props.ariaControls"
        :data-collapse-toggle="props.dataCollapseToggle"
        class="cursor-pointer flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
        <div class="w-7 h-7 rounded-md text-center flex items-center justify-center shadow-md text-slate-800 dark:text-white bg-white shadow-slate-300 dark:bg-slate-500 dark:shadow-slate-800">
            <ComponentImported :class="'w-6 h-6'" />
        </div>

        <span class="ml-2 text-slate-800 dark:text-white font-light text-sm">{{ props.title }}</span>

        <LuChevronDown v-if="props.ariaControls" class="text-end w-6 h-6 text-slate-800 dark:text-white" />
    </span>
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';
    import { LuChevronDown } from 'vue3-icons/lu';

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        routeName: {
            type: String,
            required: false,
        },
        iconName: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: false,
        },
        ariaControls: {
            type: String,
            required: false,
        },
        dataCollapseToggle: {
            type: String,
            required: false,
        },
    });

    const ComponentImported = defineAsyncComponent(() => import(`../../icons/${props.iconName}.vue`));
</script>