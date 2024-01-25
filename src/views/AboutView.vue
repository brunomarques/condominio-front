<template>
  <div class="about dark:bg-gray-800">
    <h1 class="dark:text-gray-400">This is an about page</h1>

    <div class="flex justify-center items-center flex-col my-10">
      <div class="mt-6">
        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vue 3 dark Mode With Tailwind CSS
          </h5>

          <p class="font-normal text-gray-700 dark:text-gray-400">
            Install & setup vue 3 dark mode in vue 3 using tailwind css 3
          </p>
        </a>
      </div>
    </div>

    <button data-popover-target="popover-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10">Default popover</button>

    <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
        </div>
        <div class="px-3 py-2">
            <p>And here's some amazing content. It's very engaging. Right?</p>
        </div>
        <div data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup>
</script>
