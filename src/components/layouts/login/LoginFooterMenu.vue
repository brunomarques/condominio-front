<template>
    <div class="flex mt-7 items-center text-center">
        <hr class="border-gray-300 border-1 w-full rounded-md">
        <label class="block font-medium text-sm text-gray-600 w-full">Menu</label>
        <hr class="border-gray-300 border-1 w-full rounded-md">
    </div>

    <div class="mt-4">
        <div class="flex justify-center items-center gap-2">
            <router-link :to="{ name: 'home' }" class=" text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                Home
            </router-link>

            <router-link :to="{ name: 'about' }" class=" text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                About
            </router-link>
        </div>
    </div>
</template>