<template>
    <label for="formTitle" class="block my-3 text-sm text-gray-500 text-center font-semibold">
        <span id="formTitle">Validando seu e-mail | Área do condômino</span>
    </label>

    <div class="mt-7 text-center">
        <div class="place-self-center">
            <h1 v-if="validated" class="mb-4 text-md font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl dark:text-white">
                {{ returnTextOK }}
            </h1>
            <h1 v-else class="mb-4 text-md font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl text-red-500 dark:text-red-400">
                {{ returnText }}
            </h1>
            <p v-if="!validated" class="font-light text-red-500 md:text-md lg:text-lg dark:text-red-400">
                O token informado não foi encontrado ou já foi vrificado!
            </p>
        </div>

        <div class="flex mt-7">
            <div class="w-full text-left">
                <router-link :to="{ name: 'login' }" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Lembrou a senha?
                </router-link>                                  
            </div>

            <div class="w-full text-right">
                <router-link :to="{ name: 'forgot-password' }" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Solicitar nova senha?
                </router-link>                                  
            </div>
        </div>

        <LoginFooterMenu />
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    import { useAuthStore } from '../stores/auth';
    import LoginFooterMenu from '../components/layouts/login/LoginFooterMenu.vue';
    
    const authStore = useAuthStore();
    const validated = ref(true);
    const returnText = ref('Token não informado!');
    const returnTextOK = ref('Validando e-mail....');

    onMounted(async () => {
        const route = useRoute();
        const token = route?.query?.token;

        if(token) {
            await authStore.verifyEmail(token);

            if (authStore.errorCode) {
                const errCode = authStore.errorCode;
                validated.value = false;

                if (errCode === 401 || errCode === 400) {
                    returnText.value = authStore.errorsMessage;
                }
            } else {
                returnTextOK.value = 'E-mail validado com sucesso!';
                this.router.push({ name: 'login' });
            }
        } else {
            validated.value = false;
        }
    });
</script>

<style scoped></style>