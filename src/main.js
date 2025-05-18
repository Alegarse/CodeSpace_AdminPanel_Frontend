import './scss/style.scss';
import * as bootstrap from 'bootstrap'
import { createLoginPage } from './pages/login';
import { loginListener } from './events/login-events';
import { createModalElement } from './complements/modal-structure';

createLoginPage();
loginListener();
