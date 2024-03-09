<template>
    <label for="formTitle" class="block my-3 text-sm text-gray-500 text-center font-semibold">
        <span id="formTitle">Solicitação de nova senha | Área do condômino</span>
    </label>

    <AlertMsgBasic v-if="responseErrors" :title="'Error!'" :color="'red'">
        {{ responseErrors }}
    </AlertMsgBasic>

    <form class="mt-2" @submit.prevent="doSubmit" novalidate>
        <InputField :define-input-binds="defineInputBinds" :error-bag="errorBag" :name="'token'" :input-type="'hidden'" />

        <div class="mt-7">
            <InputField :define-input-binds="defineInputBinds" :error-bag="errorBag" :name="'email'" :label="'Seu e-mail:'" :placeholder="'exemple@email.com'" :class="errorEmailClass" />
        </div>

        <div class="mt-7">
            <InputField :define-input-binds="defineInputBinds" :error-bag="errorBag" :name="'password'" :label="'Insira sua nova senha'" :input-type="'password'" :placeholder="'Ex: P4ssword@'" :class="errorPassClass" />
        </div>

        <div class="mt-7">
            <InputField :define-input-binds="defineInputBinds" :error-bag="errorBag" :name="'password_confirmation'" :label="'Confirme a sua nova senha'" :input-type="'password'" :placeholder="'Ex: P4ssword@'" :class="errorPassConfirmClass" />
        </div>

        <div class="mt-7 flex">
            <div class="w-full text-right">     
                <router-link :to="{ name: 'login' }" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Não quer mais trocar a senha?
                </router-link>                                  
            </div>
        </div>

        <div class="mt-7 mb-3">
            <ButtonBasic :disabled="disabledBtn" :type="'submit'" :color="'blue'">
                <SpinnerIcon v-if="disabledBtn" :color="'green'" :lenght="6" /> Trocar a senha
            </ButtonBasic>
        </div>

        <LoginFooterMenu />
    </form>
</template>

<script setup>
    import { useForm, validate } from 'vee-validate';
    import { string, object, ref } from 'yup';

    import InputField from '../content-components/inputs/InputField.vue';
    import ButtonBasic from '../content-components/buttons/ButtonBasic.vue';
    import SpinnerIcon from '../icons/SpinnerIcon.vue';
    import AlertMsgBasic from '../content-components/messages/AlertMsgBasic.vue';
    import LoginFooterMenu from '../layouts/login/LoginFooterMenu.vue';

    import { ref as refV } from 'vue';
    import { useAuthStore } from '../../stores/auth';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const schema = object({
        token: string(),
        email: string()
            .required('Campo obrigatório!')
            .email('Forneça um e-mail válido!'),
        password: string()
            .required('Campo obrigatório!')
            .min(8, 'A senha deve conter pelo menos 8 caracteres, destes, ao menos uma letra em maiúscula, um número e um caractere especial (Ex.: @, #, $)!'),
        password_confirmation: string()
            .required('Campo obrigatório!')
            .min(8, 'A senha deve conter pelo menos 8 caracteres, destes, ao menos uma letra em maiúscula, um número e um caractere especial (Ex.: @, #, $)!')
            .oneOf([ref('password')], 'As senhas não coincidem!'),
    });

    const { defineInputBinds, values, errorBag, handleSubmit } = useForm({
        validationSchema: schema,
        initialValues: {
            token: route?.query?.token,
        },
    });

    const authStore = useAuthStore();
    const errorClassBase = 'bg-red-50 border border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400';

    const responseErrors = refV('');
    const listErrors = refV('');
    const errCode = refV('');

    const errorEmailClass = refV('');
    const errorPassClass = refV('');
    const errorPassConfirmClass = refV('');
    const disabledBtn = refV(false);

    const doSubmit = handleSubmit(async (form) => {
        errorEmailClass.value = '';
        errorPassClass.value = '';
        errorPassConfirmClass.value = '';

        const isValid = validate();
        disabledBtn.value = true;

        if (isValid) {
            await authStore.resetPassword(form);

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

                    if (authStore.errors.password) {
                        errorPassClass.value = errorClassBase;
                    }

                    if (authStore.errors.password_confirmation) {
                        errorPassConfirmClass.value = errorClassBase;
                    }
                }
            }
        } else {
            console.log('Form not valid!');
        }
    });
</script>

<style scoped></style>