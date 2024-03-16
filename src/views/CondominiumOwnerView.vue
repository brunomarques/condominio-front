<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-6 bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center justify-between">
                <h3 class="dark:text-white">Owners list</h3>

                <ButtonBasic :disabled="disabledBtn" :type="'button'" :color="'green'">
                    New
                </ButtonBasic>
            </div>

            <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4">
                <div>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span class="sr-only">Action button</span>
                        Action
                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                        </div>
                    </div>
                </div>

                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
                </div>
            </div>

            <table class="w-full font-sans text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-gray-600 rounded-lg shadow-md dark:shadow-gray-900">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b dark:border-gray-700">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-slate-400">Name</th>
                        <th scope="col" class="px-6 py-3 text-slate-400">Position</th>
                        <th scope="col" class="px-6 py-3 text-slate-400">Status</th>
                        <th scope="col" class="px-6 py-3 text-slate-400">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="border-b dark:border-gray-700 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full shadow-md dark:shadow-gray-900" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image">
                            <div class="ps-3">
                                <div class="text-base font-medium text-gray-500 dark:text-white">Neil Sims</div>
                                <div class="text-gray-500 font-light text-sm">neil.sims@flowbite.com</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            React Developer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="bg-gradient-to-r from-lime-500 dark:from-lime-600 to-green-500 dark:to-green-600 px-1.5 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white shadow-md dark:shadow-gray-900">Online</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>

                    <tr class="border-b dark:border-gray-700 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full shadow-md dark:shadow-gray-900" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Jese image">
                            <div class="ps-3">
                                <div class="text-base font-medium text-gray-500 dark:text-white">Bonnie Green</div>
                                <div class="text-gray-500 font-light text-sm">bonnie@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            Designer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="bg-gradient-to-r from-lime-500 dark:from-lime-600 to-green-500 dark:to-green-600 px-1.5 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white shadow-md dark:shadow-gray-900">Online</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>

                    <tr class="border-b dark:border-gray-700 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full shadow-md dark:shadow-gray-900" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese image">
                            <div class="ps-3">
                                <div class="text-base font-medium text-gray-500 dark:text-white">Jese Leos</div>
                                <div class="text-gray-500 font-light text-sm">jese@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            Vue JS Developer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="bg-gradient-to-r from-lime-500 dark:from-lime-600 to-green-500 dark:to-green-600 px-1.5 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white shadow-md dark:shadow-gray-900">Online</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>

                    <tr class="border-b dark:border-gray-700 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full shadow-md dark:shadow-gray-900" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                            <div class="ps-3">
                                <div class="text-base font-medium text-gray-500 dark:text-white">Thomas Lean</div>
                                <div class="text-gray-500 font-light text-sm">thomes@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            UI/UX Engineer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="bg-gradient-to-r from-lime-500 dark:from-lime-600 to-green-500 dark:to-green-600 px-1.5 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white shadow-md dark:shadow-gray-900">Online</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>

                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full shadow-md dark:shadow-gray-900" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Jese image">
                            <div class="ps-3">
                                <div class="text-base font-medium text-gray-500 dark:text-white">Leslie Livingston</div>
                                <div class="text-gray-500 font-light text-sm">leslie@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            SEO Specialist
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="bg-gradient-to-r from-rose-500 dark:from-rose-600 to-red-500 dark:to-red-600 px-1.5 text-xs rounded-md py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white shadow-md dark:shadow-gray-900">Offline</div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Edit modal -->
            <div id="editUserModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <form class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Edit user</h3>

                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>

                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <!-- Modal body -->
                        <div class="p-6 space-y-6 font-sans">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required="">
                                    <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="cgc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Document</label>
                                    <input type="text" name="cgc" id="cgc" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required="">
                                    <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required="">
                                    <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="number" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. +(12)3456 789" required="">
                                    <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                    <select id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose a type</option>
                                        <option value="owner">Owner</option>
                                        <option value="manager">Manager</option>
                                        <option value="tenant">Tenant</option>
                                    </select>
                                    <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="car_spaces" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Car spaces</label>
                                    <input type="number" name="car_spaces" id="car_spaces" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required="">
                                    <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="profile_picture">Profile picture</label>
                                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="profile_picture" type="file">
                                    <p id="helper-text-explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Modal footer -->
                        <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                            <ButtonBasic :disabled="disabledBtn" :type="'submit'" :color="'blue'">
                                <SpinnerIcon v-if="disabledBtn" :color="'green'" :lenght="6" /> Save
                            </ButtonBasic>
                            <!--button type="submit" class="text-white bg-green-500 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-green-800 shadow-md">Save</button-->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ButtonBasic from '../components/content-components/buttons/ButtonBasic.vue';
</script>

<style scoped>
    
</style>