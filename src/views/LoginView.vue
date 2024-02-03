<template>
    <FormLogin />




    <!--div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <BuildingIcon class="text-blue-600 dark:text-blue-800" />
            Condomínio Vista do Sol
        </a>

        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <H1Title>Sign in to your account</H1Title>

                <form class="space-y-4 md:space-y-6" action="#">
                    <InputBasic :type="'email'" :required="true" :label="'Your e-mail'" :id="'email'" :name="'email'" :placeholder="'email@email.com'" :value="''" />

                    <InputBasic :type="'password'" :required="true" :label="'Password'" :id="'password'" :name="'password'" :placeholder="'••••••••'" :value="''" />

                    <div class="flex items-center justify-between">
                        <CheckboxBasic :required="false" :label="'Remember me'" :id="'remember'" :name="'remember'" :value="''" />

                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                    </div>

                    <ButtonBasic :type="'submit'" :text="'Login'" :color="'blue'" />

                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div-->
</template>

<script setup>
import FormLogin from '../components/FomLogin.vue';
</script>

<style scoped></style>