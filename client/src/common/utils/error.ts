import { toasts } from 'svelte-toasts';

export const ShowError = (msg: string) => {
	toasts.error('Ошибка!', msg, {
		duration: 10000,
		theme: 'dark',
		placement: 'top-center'
	});
};
