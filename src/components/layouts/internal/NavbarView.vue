<template>
    <nav class="backdrop-blur-sm bg-white/30 px-4 py-2.5 dark:bg-gray-800/50 dark:border-gray-700 fixed left-0 right-0 top-0 z-50 shadow-md">
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex justify-start items-center">
                <button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>

                    <svg aria-hidden="true" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Toggle sidebar</span>
                </button>

                <router-link :to="{ name: 'dashboard' }" class="flex items-center justify-between mr-4">
                    <BiBuildings class="mr-2 h-8 w-8 dark:text-white" />
                    <span class="self-center xs:hidden md:block sm:text-sm md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Condominium Gestor
                    </span>
                </router-link>
            </div>

            <div class="flex items-center lg:order-2">
                <button @click="toggleDark()" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <IconLightMode v-if="isDark" />
                    <IconDarkMode v-else />
                </button>

                <!--Icon notification-->
                <button id="notificationIcon" type="button" data-dropdown-toggle="notification-dropdown" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <span class="sr-only">View notifications</span>
                    <!-- Bell icon -->
                    <PiBellSimpleRingingFill class="w-6 h-6" />

                    <div id="tooltip-notifications" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Notifications
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </button>

                <!-- Dropdown menu notifications -->
                <div id="notification-dropdown" class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700">
                    <div class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                        Notifications
                    </div>

                    <div>
                        <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                            <div class="flex-shrink-0">
                                <img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />

                                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700 shadow-md">
                                    <RiMessage2Fill class="w-3 h-3 text-white" />
                                </div>
                            </div>

                            <div class="pl-3 w-full">
                                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                    New message from
                                    <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>:
                                    "Hey, what's up? All set for the presentation?"
                                </div>

                                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                                    a few moments ago
                                </div>
                            </div>
                        </a>

                        <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                            <div class="flex-shrink-0">
                                <img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />

                                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700 shadow-md">
                                    <PiUserPlusFill class="w-3 h-3 text-white" />
                                </div>
                            </div>

                            <div class="pl-3 w-full">
                                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                    <span class="font-semibold text-gray-900 dark:text-white">Jese leos</span>
                                    and
                                    <span class="font-medium text-gray-900 dark:text-white">5 others</span>
                                    started following you.
                                </div>

                                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                                    10 minutes ago
                                </div>
                            </div>
                        </a>

                        <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                            <div class="flex-shrink-0">
                                <img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph McFall avatar" />

                                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700 shadow-md">
                                    <RiHeart2Fill class="w-3 h-3 text-white" />
                                </div>
                            </div>

                            <div class="pl-3 w-full">
                                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                    <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
                                    and
                                    <span class="font-medium text-gray-900 dark:text-white">141 others</span>
                                    love your story. See it and view more stories.
                                </div>

                                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                                    44 minutes ago
                                </div>
                            </div>
                        </a>

                        <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                            <div class="flex-shrink-0">
                                <img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas image" />

                                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700 shadow-md">
                                    <PiChatTextFill class="w-3 h-3 text-white" />
                                </div>
                            </div>

                            <div class="pl-3 w-full">
                                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                    <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span>
                                    mentioned you in a comment:
                                    <span class="font-medium text-primary-600 dark:text-primary-500">@bonnie.green</span>
                                    what do you say?
                                </div>

                                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                                    1 hour ago
                                </div>
                            </div>
                        </a>

                        <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div class="flex-shrink-0">
                                <img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="Robert image" />

                                <div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700 shadow-md">
                                    <HiVideoCamera class="w-3 h-3 text-white" />
                                </div>
                            </div>

                            <div class="pl-3 w-full">
                                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                    <span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span>
                                    posted a new video: Glassmorphism - learn how to implement
                                    the new design trend.
                                </div>

                                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                                    3 hours ago
                                </div>
                            </div>
                        </a>
                    </div>

                    <a href="#" class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
                        <div class="inline-flex items-center">
                            <HiOutlineEye class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" />
                            View all
                        </div>
                    </a>
                </div>

                <!-- Icon user -->
                <button id="user-menu-button" type="button" aria-expanded="false" data-dropdown-toggle="dropdown" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="user photo" />

                    <div id="tooltip-user" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        User
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </button>

                <!-- Dropdown menu user -->
                <div id="dropdown" class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div class="py-3 px-4">
                        <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{ userLogged.name }}</span>
                        <span class="block text-sm text-gray-900 truncate dark:text-white">{{ userLogged.email }}</span>
                    </div>

                    <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                        <li>
                            <a href="#" class="flex items-center gap-1 py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                <LuLayoutDashboard class="h-5 w-5" />
                                My profile
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center gap-1 py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                            <LuSettings class="h-5 w-5" />
                                Account settings
                            </a>
                        </li>
                    </ul>

                    <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                        <li>
                            <a href="#" @click.prevent="authStore.logout" class="flex items-center gap-1 py-2 px-4 text-sm hover:bg-gray-100 hover:rounded-b-lg dark:hover:bg-gray-600 dark:hover:text-white">
                                <LuLogOut class="h-5 w-5" />
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import IconLightMode from '../../icons/IconLightMode.vue';
    import IconDarkMode from '../../icons/IconDarkMode.vue';

    import { useDark, useToggle } from '@vueuse/core';
    import { useAuthStore } from '../../../stores/auth';

    import { HiOutlineEye, HiVideoCamera } from 'vue3-icons/hi2';
    import { PiChatTextFill, PiUserPlusFill, PiBellSimpleRingingFill } from 'vue3-icons/pi';
    import { RiHeart2Fill, RiMessage2Fill } from 'vue3-icons/ri';
    import { BiBuildings } from 'vue3-icons/bi';
    import { LuLogOut, LuLayoutDashboard, LuSettings } from 'vue3-icons/lu';

    import { useTooltip } from '../../../composables/tooltip';

    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    const authStore = useAuthStore();
    const userLogged = ref('');

    onMounted(() => {
        userLogged.value = authStore.authUser;

        useTooltip('tooltip-notifications', 'notificationIcon');
        useTooltip('tooltip-user', 'user-menu-button');
    });
</script>

<style scoped></style>