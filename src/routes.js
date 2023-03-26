import AddCourse from './screens/AddCourse';
import EditCourse from './screens/EditCourse';
import LoginForm from './screens/login';
import VerCursos from './screens/verCursos';
import Topics from './screens/Topics';
import Admins from './screens/Admins';
import { Saludo } from './screens/dashboard';

const routes = [
    { path: '/', name: 'Dashbord', Component: Saludo, isPrivate: true, inNavbar: true },
    {
        path: '/agregarCursos',
        name: 'Agregar curso',
        Component: AddCourse,
        isPrivate: true,
        inNavbar: true,
    },
    {
        path: '/editarcurso/:id',
        name: 'Editar curso',
        Component: EditCourse,
        isPrivate: true,
        inNavbar: false,
    },
    {
        path: '/verCursos',
        name: 'Cursos',
        Component: VerCursos,
        isPrivate: true,
        inNavbar: true,
    },
    {
        path: '/intereses',
        name: 'Intereses',
        Component: Topics,
        isPrivate: true,
        inNavbar: true,
    },
    {
        path: '/admins',
        name: 'Administradores',
        Component: Admins,
        isPrivate: true,
        inNavbar: true,
    },
    {
        path: '/login',
        name: 'Iniciar sesión',
        Component: LoginForm,
        isPrivate: false,
    },
    // { path: '/signin', name:'Cursos', Component: LoginForm, isPrivate: false },
];

export default routes;
