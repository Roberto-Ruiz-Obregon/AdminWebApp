import LoginForm from './screens/Login';
import SendMail from './screens/SendMail';
import SignupForm from './screens/Signup';
import ForgotPassword from './screens/forgotPassword';
import AddCourse from './screens/AddCourse';
import EditCourse from './screens/EditCourse';
import Courses from './screens/Courses';
import Programs from './screens/Programs';
import EditProgram from './screens/EditProgram';
import Inscriptions from './screens/Inscriptions';
import Topics from './screens/Topics';
import Payments from './screens/Payments';
import Admins from './screens/Admins';
import Dashboard from './screens/dashboard';

const routes = [
    { path: '/', name: 'Inicio', Component: Dashboard, isPrivate: true, inNavbar: true },
    {
        path: '/enviarAnuncio',
        name: 'Anuncios',
        Component: SendMail,
        isPrivate: true,
        inNavbar: true,
    },
    {
        path: '/agregarCursos',
        name: 'Agregar curso',
        Component: AddCourse,
        isPrivate: true,
        inNavbar: false,
    },
    {
        path: '/cursos/:id',
        name: 'Editar curso',
        Component: EditCourse,
        isPrivate: true,
        inNavbar: false,
    },
    {
        path: '/inscripciones/:id',
        name: 'Ver inscripciones al curso',
        Component: Inscriptions,
        isPrivate: true,
        inNavbar: false,
    },
    {
        path: '/cursos',
        name: 'Cursos',
        Component: Courses,
        isPrivate: true,
        inNavbar: true,
    },
    {
        path: '/programs/program/',
        name: 'Crear programa',
        Component: EditProgram,
        isPrivate: true,
        inNavbar: false,
    },
    {
        path: '/programs/program/:id',
        name: 'Editar programa',
        Component: EditProgram,
        isPrivate: true,
        inNavbar: false,
    },
    {
        path: '/programs',
        name: 'Programas',
        Component: Programs,
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
        path: '/pagos',
        name: 'Pagos pendientes',
        Component: Payments,
        isPrivate: true,
        inNavbar: true,
    },
    {
        path: '/login',
        name: 'Iniciar sesión',
        Component: LoginForm,
        isPrivate: false,
        inNavbar: false,
    },
    {
        path: '/signup',
        name: 'Registrarse',
        Component: SignupForm,
        isPrivate: false,
        inNavbar: false,
    },
    {
        path: '/cambiarContrasena',
        name: 'Cambiar contraseña',
        Component: ForgotPassword,
        isPrivate: false,
        inNavbar: false,
    },
];

export default routes;
