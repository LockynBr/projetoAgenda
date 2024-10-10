import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

//import './assets/css/style.css';

import Contato from './modules/Contato';

const cadastroContato = new Contato('.form-contato');
const editContato = new Contato('.form-edit');
cadastroContato.init();
editContato.init();
