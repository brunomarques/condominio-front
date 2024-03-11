<template>
    <button @click="clickColor" id="theme-toggle" type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 cursor-pointer">
        <RiSunLine id="sunIcon" :class="isDark" class="w-5 h-5" data-tooltip-target="tooltip-darken" />

        <div id="tooltip-darken" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Escurecer
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <RiMoonFill id="moonIcon" :class="isLight" class="w-5 h-5" data-tooltip-target="tooltip-lighten" />

        <div id="tooltip-lighten" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Clarear
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </button>
</template>

<script setup>
    import { Tooltip } from 'flowbite';
    import { onMounted } from 'vue';
    import { RiMoonFill, RiSunLine } from 'vue3-icons';

    defineProps(
        {
            isDark: String,
            isLight: String,
        },
    );

    const emit = defineEmits([
        'changeColor',
    ]);

    const clickColor = () => {
        emit('changeColor');
    };

    onMounted(() => {
        // set the tooltip content element
        const $targetEl = document.getElementById('tooltip-darken');

        // set the element that trigger the tooltip using hover or click
        const $triggerEl = document.getElementById('sunIcon');

        // options with default values
        const options = {
            placement: 'bottom',
            triggerType: 'hover',
            onHide: () => {
                console.log('tooltip is shown');
            },
            onShow: () => {
                console.log('tooltip is hidden');
            },
            onToggle: () => {
                console.log('tooltip is toggled');
            },
        };

        // instance options with default values
        const instanceOptions = {
            id: 'tooltip-darken',
            override: true,
        };

        /*
        * $targetEl: required
        * $triggerEl: required
        * options: optional
        */
        const tooltip = new Tooltip($targetEl, $triggerEl, options, instanceOptions);

        return tooltip.show() ?? tooltip.hide();
    });
    
</script>

<style scoped></style>