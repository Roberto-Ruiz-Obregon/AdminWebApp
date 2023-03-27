import Cursos from './screens/cursos';
import LoginForm from './screens/login';
import ForgotPassword from './screens/forgotPassword';
import VerCursos from './screens/verCursos';
import { Saludo } from './screens/dashboard'; 

const routes = [
    { path: '/', name:'Dashbord', Component: Saludo, isPrivate: true },
    { path: '/agregarCursos', name:'Agregar curso', Component: Cursos, isPrivate: true },
    { path: '/verCursos', name:'Cursos', Component: VerCursos, isPrivate: true },
    { path: '/login', name:'Iniciar sesión', Component: LoginForm, isPrivate: false },
    { path: '/cambiarContrasena', name:'Cambiar contraseña', Component: ForgotPassword, isPrivate: false },
    // { path: '/signin', name:'Cursos', Component: LoginForm, isPrivate: false },
];

export default routes;