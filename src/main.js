import './scss/style.scss';
import { createLoginPage } from './pages/login';
import { loginListener } from './events/login-events';
import { createAdminPanel } from './pages/admin-panel';
import { createCardsUsersContainer } from './complements/cardUser';

createLoginPage();
loginListener();

/**
 * PASOS NECESARIOS 
 * 1. Crear los inputs y sus correspondientes label
 * 2. Crear el boton para hacer login
 * 3. Imagen representativa
 * 4. Link para recuperar contraseña
 */