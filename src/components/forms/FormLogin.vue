<template>
    <label for="formTitle" class="block my-3 text-sm text-gray-500 text-center font-semibold">
        <span id="formTitle">Faça o seu login | Área do condômino</span>
    </label>

    <AlertMsgBasic v-if="responseErrors" :title="'Error!'" :color="'red'">
        {{ responseErrors }}
    </AlertMsgBasic>

    <form class="mt-2" @submit.prevent="doSubmit" novalidate>
        <div class="mt-7">
            <InputField :define-input-binds="defineInputBinds" :error-bag="errorBag" :name="'email'" :label="'Seu e-mail:'" :placeholder="'exemple@email.com'" :class="errorEmailClass" />
        </div>

        <div class="mt-7">
            <InputField :define-input-binds="defineInputBinds" :error-bag="errorBag" :name="'password'" :label="'Insira sua senha'" :input-type="'password'" :placeholder="'Ex: P4ssword@'" :class="errorPassClass" />
        </div>

        <div class="mt-7 flex">
            <!--label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                <span class="ml-2 text-sm text-gray-600">
                    Lembrar de mim
                </span>
            </label-->

            <div class="w-full text-right">     
                <router-link :to="{ name: 'forgot-password' }" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Esqueceu a senha?
                </router-link>
            </div>
        </div>

        <div class="mt-7 mb-3">
            <ButtonBasic :class="'w-full'" :disabled="disabledBtn" :type="'submit'" :color="'blue'">
                <SpinnerIcon v-if="disabledBtn" :color="'green'" :lenght="6" /> Entrar
            </ButtonBasic>
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
        password: string().required('Campo obrigatório!').min(8, 'A senha deve conter pelo menos 8 caracteres, destes, ao menos uma letra em maiúscula, um número e um caractere especial (Ex.: @, #, $)!'),
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
    const errorPassClass = ref('');
    const disabledBtn = ref(false);

    const doSubmit = handleSubmit(async (form) => {
        errorEmailClass.value = '';
        errorPassClass.value = '';

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

                    if (authStore.errors.password) {
                        errorPassClass.value = errorClassBase;
                    }
                }
            }
        } else {
            console.log('Form not valid!');
        }
    });
</script>

<style scoped></style>