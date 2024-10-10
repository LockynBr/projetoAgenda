import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.clearErrors();
            this.validate(e);
        });
    }

    clearErrors() {
        const errorMessages = this.form.querySelectorAll('.error-message');
        errorMessages.forEach(el => el.remove());
    }

    showError(input, message) {
        const error = document.createElement('p');
        error.classList.add('error-message', 'text-danger');
        error.innerText = message;
        input.insertAdjacentElement('afterend', error);
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if (!nomeInput.value) {
            this.showError(nomeInput, 'Nome Inválido!');
            error = true;
        }

        if (!sobrenomeInput.value) {
            this.showError(sobrenomeInput, 'Sobrenome Inválido!');
            error = true;
        }

        if (!error) {
            if (!emailInput.value && !telefoneInput.value) {
                this.showError(emailInput, 'Você precisa enviar pelo menos uma opção de contato!');
                error = true;
            }

            if (emailInput.value && !validator.isEmail(emailInput.value)) {
                this.showError(emailInput, 'E-mail Inválido!');
                error = true;
            }

            if (telefoneInput.value && !validator.isMobilePhone(telefoneInput.value, 'pt-BR')) {
                this.showError(telefoneInput, 'Telefone Inválido!');
                error = true;
            }
        }

        if (!error) el.submit();
    }
}
