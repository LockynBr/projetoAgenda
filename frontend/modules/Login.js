import validator from 'validator';

export default class Login {
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
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            this.showError(emailInput, 'E-mail Inválido!');
            error = true;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.showError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres!');
            error = true;
        }

        if (!error) el.submit();
    }
}
