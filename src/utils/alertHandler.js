import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const MySwal = withReactContent(Swal);

export function FireError(message) {
    MySwal.fire({
        title: '¡Error!',
        icon: 'error',
        text: message,
        confirmButtonColor: '#002b49',
    });
}

export function FireSucess(message) {
    MySwal.fire({
        title: '¡Éxito!',
        icon: 'success',
        text: message,
        confirmButtonColor: '#002b49',
    });
}

export async function FireQuestion(
    question,
    warning,
    confirmText = 'Acepto',
    rejectText = 'Cancelar'
) {
    return MySwal.fire({
        title: question,
        text: warning,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#002b49',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText,
        cancelButtonText: rejectText,
    });
}
