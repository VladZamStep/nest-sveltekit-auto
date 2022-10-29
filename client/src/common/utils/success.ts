import { toasts } from 'svelte-toasts';

export const ShowSuccess = (msg: string) => {
    toasts.success('Отлично!', msg, {
        duration: 3000,
        theme: 'dark',
        placement: 'top-center'
    });
};
