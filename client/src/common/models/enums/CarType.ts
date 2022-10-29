import type { SelectValue } from '../types/SelectValue';

export enum CarType {
	CEDAN = 'CEDAN',
	SUV = 'SUV',
	SUPERCAR = 'SUPERCAR',
	CABRIO = 'CABRIO',
	PICKUP = 'PICKUP',
	COUPE = 'COUPE',
}

export const CarTypeSelectValues: SelectValue[] = [
	{ value: CarType.CEDAN, title: 'Седан' },
	{ value: CarType.SUV, title: 'Внедорожник' },
	{ value: CarType.SUPERCAR, title: 'Спорткар' },
	{ value: CarType.CABRIO, title: 'Кабриолет' },
	{ value: CarType.PICKUP, title: 'Пикап' },
	{ value: CarType.COUPE, title: 'Купе' },
];