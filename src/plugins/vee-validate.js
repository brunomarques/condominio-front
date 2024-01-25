/*
import { defineRule, configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import { required, email, min } from '@vee-validate/rules';

import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';

configure({
    generateMessage: localize({
        pt_BR,
    }),
});

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);*/

import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from "vee-validate";
import { required, email, min } from '@vee-validate/rules';

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);

        defineRule("required", required);
        defineRule('email', email);
        defineRule('min', min);

        configure({
            generateMessage: (context) => {
                const messages = {
                    alpha:        `O campo ${context.field} deve conter somente letras.`,
                    alpha_dash:   `O campo ${context.field} deve conter letras, números e traços.`,
                    alpha_num:    `O campo ${context.field} deve conter somente letras e números.`,
                    alpha_spaces: `O campo ${context.field} só pode conter caracteres alfabéticos e espaços.`,
                    between:      `O campo ${context.field} deve estar entre ${context.rule.params[0]} e ${context.rule.params[1]}.`,
                    confirmed:    `A confirmação do campo ${context.field} deve ser igual.`,
                    digits:       `O campo ${context.field} deve ser numérico e ter exatamente ${context.rule.params[0]} dígitos.`,
                    dimensions:   `O campo ${context.field} deve ter ${context.rule.params[0]} pixels de largura por ${context.rule.params[1]} pixels de altura.`,
                    email:        `O campo ${context.field} deve ser um e-mail válido.`,
                    not_one_of:   `O campo ${context.field} deve ser um valor válido.`,
                    ext:          `O campo ${context.field} deve ser um arquivo válido.`,
                    image:        `O campo ${context.field} deve ser uma imagem.`,
                    integer:      `O campo ${context.field} deve ser um número inteiro.`,
                    is:           `O valor inserido no campo ${context.field} não é válido.`,
                    one_of:       `O campo ${context.field} deve ter um valor válido.`,
                    length:       `O tamanho do campo ${context.field} deve ser ${context.rule.params[0]}.`,
                    max:          `O campo ${context.field} não deve ter mais que ${context.rule.params[0]} caracteres.`,
                    max_value:    `O campo ${context.field} precisa ser ${context.rule.params[0]} ou menor.`,
                    mimes:        `O campo ${context.field} deve ser um tipo de arquivo válido.`,
                    min:          `O campo ${context.field} deve conter pelo menos ${context.rule.params[0]} caracteres.`,
                    min_value:    `O campo ${context.field} precisa ser ${context.rule.params[0]} ou maior.`,
                    numeric:      `O campo ${context.field} deve conter apenas números.`,
                    regex:        `O campo ${context.field} possui um formato inválido.`,
                    required:     `O campo ${context.field} é obrigatório.`,
                    required_if:  `O campo ${context.field} é obrigatório.`,
                    size:         `O campo ${context.field} deve ser menor que ${context.rule.params[0]}KB.`,
                    url:          `O campo ${context.field} deve ser uma URL válida!`
                };

                return messages[context.rule.name]
                    ? messages[context.rule.name]
                    : `O campo ${context.field} é inválido!`;
            },
        });
    },
};
