//import { configure, defineRule } from 'vee-validate';
import { defineRule } from 'vee-validate';
//import { required, email, min } from '@vee-validate/rules';
//import { localize } from '@vee-validate/i18n';
//import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';

export function validationFunctions() {
    /*defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);*/
    defineRule('camelCase', (value) => {
        if(!/^[a-z]+(?:[A-Z][a-z]*)*$/.test(value)) {
            return 'O campo deve estar em camelCase.';
        }

        return true;
    });

    defineRule('confirmed', (value, [target]) => {
        if (value === target) {
          return true;
        }
        return 'Passwords must match';
      });
};

//Usar com defineRule de vee-validate nao do vee-validate/rules
/*defineRule(required, value => {
    if (!value || !value.length) {
        return 'This field is requiredddd';
    }

    return true;
});

defineRule(email, value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }

    // Check if email
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
        return 'This field must be a valid emaillll';
    }

    return true;
});

defineRule(min, (value, [limit]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }

    if (value.length < limit) {
        return `This field must be at least ${limit} characterssss`;
    }

    return true;
});*/

/*configure({
    generateMessage: localize({
        pt_BR/*: {
            messages: {
                required: 'Este campo é obrigatório',
                min: 'Este campo dece conter, pelo menos, 0:{min} caracteres',
                email: 'Insira um e-mail válido',
            },
        }*//*,
}),
});*/