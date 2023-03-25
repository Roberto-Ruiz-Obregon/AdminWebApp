import AddCourse from './screens/AddCourse';
import LoginForm from './screens/login';
import VerCursos from './screens/verCursos';
import Topics from './screens/Topics';
import Admins from './screens/Admins';
import { Saludo } from './screens/dashboard';

const routes = [
    { path: '/', name: 'Dashbord', Component: Saludo, isPrivate: true },
    {
        path: '/agregarCursos',
        name: 'Agregar curso',
        Component: AddCourse,
        isPrivate: true,
    },
    { path: '/verCursos', name: 'Cursos', Component: VerCursos, isPrivate: true },
    { path: '/intereses', name: 'Intereses', Component: Topics, isPrivate: true },
    { path: '/admins', name: 'Administradores', Component: Admins, isPrivate: true },
    { path: '/login', name: 'Iniciar sesión', Component: LoginForm, isPrivate: false },
    // { path: '/signin', name:'Cursos', Component: LoginForm, isPrivate: false },
];

export default routes;
