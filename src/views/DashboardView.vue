<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div class="bg-white dark:bg-gray-800 shadow-lg shadow-slate-200 dark:shadow-slate-700 dark:shadow-md rounded-2xl p-4 ">
            <div class="flex items-center">
                <div class="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 dark:from-pink-700 dark:to-violet-800 rounded-lg shadow-md shadow-gray-300 dark:shadow-slate-700">
                    <FaMoneyBillTrendUp class="text-lg" aria-hidden="true" />
                </div>

                <div class="flex-shrink-0 ml-3">
                    <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white">$3,600</span>
                    <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Today's Money</h3>
                </div>

                <div class="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500 dark:text-green-600">
                    +16%
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-800 shadow-lg shadow-slate-200 dark:shadow-slate-700 dark:shadow-md rounded-2xl p-4 ">
            <div class="flex items-center">
                <div class="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 dark:from-pink-700 dark:to-violet-800 rounded-lg shadow-md shadow-gray-300 dark:shadow-slate-700">
                    <HiUserGroup class="text-lg" aria-hidden="true" />
                </div>

                <div class="flex-shrink-0 ml-3">
                    <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white">2,300</span>
                    <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Today's Users</h3>
                </div>

                <div class="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500 dark:text-green-600">
                    +3%
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-800 shadow-lg shadow-slate-200 dark:shadow-slate-700 dark:shadow-md rounded-2xl p-4 ">
            <div class="flex items-center">
                <div class="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 dark:from-pink-700 dark:to-violet-800 rounded-lg shadow-md shadow-gray-300 dark:shadow-slate-700">
                    <FaUserTag class="text-lg" aria-hidden="true" />
                </div>

                <div class="flex-shrink-0 ml-3">
                    <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white">+3,462</span>
                    <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">New Clients</h3>
                </div>

                <div class="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-red-500 dark:text-red-600">
                    -2%
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="bg-white dark:bg-gray-800 shadow-lg shadow-slate-200 dark:shadow-slate-700 dark:shadow-md rounded-2xl p-4 ">
            <div class="flex items-center">
                <div class="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-voilet-500 dark:from-pink-700 dark:to-violet-800 rounded-lg shadow-md shadow-gray-300 dark:shadow-slate-700">
                    <TfiShoppingCartFull class="text-lg" aria-hidden="true" />
                </div>

                <div class="flex-shrink-0 ml-3">
                    <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white">$83,430</span>
                    <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Sales</h3>
                </div>

                <div class="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500 dark:text-green-600">
                    +5.34%
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>

    <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
    </div>

    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>

    <div class="grid grid-cols-2 gap-4">
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
    </div>
</template>

<script setup>
    import { FaMoneyBillTrendUp, FaUserTag } from 'vue3-icons/fa6';
    import { HiUserGroup } from 'vue3-icons/hi';
    import { TfiShoppingCartFull } from 'vue3-icons/tfi';
</script>

<style scoped></style>