<template>
    <AlertMsgBasic v-if="responseErrors" :title="'Error!'" :color="'red'">
        {{ responseErrors }}
    </AlertMsgBasic>

    <label for="formTitle" class="block mt-3 text-sm text-gray-500 text-center font-semibold">
        <span id="formTitle">Solicitação de troca de senha</span>
    </label>

    <form class="mt-10" @submit.prevent="doSubmit" novalidate>
        <div class="mt-7">
            <InputField :define-input-binds="defineInputBinds" :error-bag="errorBag" :name="'email'" :label="'Informe seu e-mail:'" :placeholder="'exemple@email.com'" />
        </div>

        <div class="mt-7 mb-3">
            <ButtonBasic :type="'submit'" :color="'blue'">
                <SpinnerIcon v-if="disabledBtn" :color="'green'" :lenght="6" /> Enviar solicitação de troca de senha
            </ButtonBasic>
        </div>

        <div class="mt-7 flex">
            <div class="w-full text-right">     
                <router-link :to="{ name: 'login' }" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Lembrou a senha?
                </router-link>                                  
            </div>
        </div>

        <LoginFooterMenu />
    </form>
</template>

<script setup>
    import { useForm, validate } from 'vee-validate';
    import { string, object } from 'yup';

    import InputField from '../content-components/inputs/InputField.vue';
    import ButtonBasic from '../content-components/buttons/ButtonBasic.vue';
    import SpinnerIcon from '../icons/SpinnerIcon.vue';
    import AlertMsgBasic from '../content-components/messages/AlertMsgBasic.vue';
    import LoginFooterMenu from '../layouts/login/LoginFooterMenu.vue';

    import { ref } from 'vue';
    import { useAuthStore } from '../../stores/auth';

    const schema = object({
        email: string().email('Insira um e-mail válido!').required('Campo obrigatório!'),
    });

    const { defineInputBinds, values, errorBag, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const authStore = useAuthStore();
    const errorClassBase = 'bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400';

    const responseErrors = ref('');
    const listErrors = ref('');
    const errCode = ref('');
    const errorEmailClass = ref('');
    const disabledBtn = ref(false);

    const doSubmit = handleSubmit(async (form) => {
        errorEmailClass.value = '';

        const isValid = validate();
        disabledBtn.value = true;

        if (isValid) {
            await authStore.login(form);

            if (authStore.errors) {
                errCode.value = authStore.errorCode;
                disabledBtn.value = false;

                if (errCode.value === 401 || errCode.value === 400) {
                    responseErrors.value = authStore.errorsMessage;
                } else if (errCode.value === 422) {
                    responseErrors.value = authStore.errorsMessage;
                    listErrors.value = authStore.errors;

                    if (authStore.errors.email) {
                        errorEmailClass.value = errorClassBase;
                    }
                }
            }
        } else {
            console.log('Form not valid!');
        }
    });
</script>

<style scoped></style>