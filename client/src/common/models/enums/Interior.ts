import type { SelectValue } from '../types/SelectValue';

export enum Interior {
	BASE = 'BASE',
	LEATHER = 'LEATHER',
	MULTI = 'MULTI',
}

export const InteriorSelectValues: SelectValue[] = [
	{ value: Interior.BASE, title: 'Стандарт' },
	{ value: Interior.LEATHER, title: 'Кожа' },
	{ value: Interior.MULTI, title: 'Комбо' },
];