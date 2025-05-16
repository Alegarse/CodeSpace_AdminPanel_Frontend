import './scss/style.scss';
import { createLoginPage } from './pages/login';
import { loginListener } from './events/login-events';

createLoginPage();
loginListener();