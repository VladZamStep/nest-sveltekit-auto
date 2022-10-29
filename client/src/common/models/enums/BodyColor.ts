import type { SelectValue } from '../types/SelectValue';

export enum BodyColor {
	BLACK = 'BLACK',
	WHITE = 'WHITE',
	GRAY = 'GRAY',
	GREEN = 'GREEN',
	RED = 'RED',
	ORANGE = 'ORANGE',
}

export const BodyColorSelectValues: SelectValue[] = [
	{ value: BodyColor.BLACK, title: 'Черный' },
	{ value: BodyColor.WHITE, title: 'Белый' },
	{ value: BodyColor.GRAY, title: 'Серый' },
	{ value: BodyColor.GREEN, title: 'Зеленый' },
	{ value: BodyColor.RED, title: 'Красный' },
	{ value: BodyColor.ORANGE, title: 'Оранжевый' },
];