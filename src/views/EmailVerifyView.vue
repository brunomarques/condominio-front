<template>
    <div class="container relative mx-auto mt-10 backdrop-blur-sm bg-white/35 dark:bg-black/45 shadow-md dark:shadow-gray-900 dark:shadow-lg rounded-md">
        <div class="py-16 text-center justify-center items-center">
            <div class="place-self-center">
                <h1 v-if="validated" class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {{ returnTextOK }}
                </h1>
                <h1 v-else class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {{ returnText }}
                </h1>
                <p v-if="!validated" class="font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                    O token informado não foi encontrado ou já foi vrificado!
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    //import FormEmailVerify from '../components/FormEmailVerify.vue';
    import { useAuthStore } from '../stores/auth';
    
    const authStore = useAuthStore();
    const validated = ref(true);
    const returnText = ref('Token não informado!');
    const returnTextOK = ref('Validando e-mail....');

    onMounted(async () => {
        const route = useRoute();
        const token = route?.query?.token;

        if(token) {
            await authStore.verifyEmail(token);
            
            if (authStore.errors) {
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

<style scoped>

</style>