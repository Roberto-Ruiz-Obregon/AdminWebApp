import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const MySwal = withReactContent(Swal);

/**
 * This function is used to display a popup with a title, icon, text, and a button with a specific
 * color.
 * @param message - The message to display in the alert.
 */
export function FireError(message) {
    MySwal.fire({
        title: '¡Error!',
        icon: 'error',
        text: message,
        confirmButtonColor: '#002b49',
    });
}

/**
 * It's a function that takes a message as a parameter and displays a success message using the
 * SweetAlert2 library.
 * @param message - The message you want to display.
 */
export function FireSucess(message) {
    MySwal.fire({
        title: '¡Éxito!',
        icon: 'success',
        text: message,
        confirmButtonColor: '#002b49',
    });
}

/**
 * It's a function that returns a promise that resolves to a boolean value
 * @param question - The question you want to ask the user.
 * @param warning - The text that will be displayed in the body of the modal.
 * @param [confirmText=Acepto] - The text that will be displayed on the confirm button.
 * @param [rejectText=Cancelar] - The text that will be displayed in the cancel button.
 * @returns A promise.
 */
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
