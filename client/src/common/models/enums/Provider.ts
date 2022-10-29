import type { SelectValue } from '../types/SelectValue';

export enum Provider {
	ORANGE = 'ORANGE',
	ATOL_LK = 'ATOL_LK',
}

export const ProviderSelectValues: SelectValue[] = [
	{ value: Provider.ORANGE, title: 'ОранжДата' },
	{ value: Provider.ATOL_LK, title: 'АТОЛ (ЛК)' },
];
