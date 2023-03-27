import Cursos from './screens/cursos';
import LoginForm from './screens/login';
import ForgotPassword from './screens/forgotPassword';
import VerCursos from './screens/verCursos';
import Topics from './screens/Topics';
import Admins from './screens/Admins';
import { Saludo } from './screens/dashboard';

const routes = [
    { path: '/', name: 'Dashbord', Component: Saludo, isPrivate: true },
    { path: '/agregarCursos', name: 'Agregar curso', Component: Cursos, isPrivate: true },
    { path: '/verCursos', name: 'Cursos', Component: VerCursos, isPrivate: true },
    { path: '/intereses', name: 'Intereses', Component: Topics, isPrivate: true },
    { path: '/admins', name: 'Administradores', Component: Admins, isPrivate: true },
    { path: '/login', name: 'Iniciar sesión', Component: LoginForm, isPrivate: false },
    { path: '/cambiarContrasena', name:'Cambiar contraseña', Component: ForgotPassword, isPrivate: false },
];

export default routes;
