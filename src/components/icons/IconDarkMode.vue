<template>
    <RiMoonFill id="moonIcon" class="w-6 h-6" />

    <div id="tooltip-darken" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Escurecer
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    import { useTooltip } from '../../composables/tooltip';

    import { RiMoonFill } from 'vue3-icons/ri';

    onMounted(() => {
        useTooltip('tooltip-darken', 'moonIcon');
    });
</script>