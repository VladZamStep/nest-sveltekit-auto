import type { VehicleElement } from '../models/types/VehicleElement';

export const VehicleElementsParams: {
	name: keyof VehicleElement;
	text: string;
	width: string;
	required: boolean;
	validationFunction: (el: VehicleElement, data: VehicleElement[]) => boolean;
	validationMessage?: string;
}[] = [
		{
			name: 'brand',
			text: 'Марка',
			width: 'w-[18%]',
			required: true,
			validationFunction: () => true
		},
		{
			name: 'model',
			text: 'Модель',
			width: 'w-[12%]',
			required: true,
			validationFunction: () => true
		},
		{
			name: 'code',
			text: 'Номер кузова',
			width: 'w-[16%]',
			required: true,
			validationFunction: (el, data) => data.every((x) => x.code != el.code.trim()),
			validationMessage: 'Номер кузова не может повторяться!'
		},
		{
			name: 'bodyColor',
			text: 'Цвет кузова',
			width: 'w-[14%]',
			required: false,
			validationFunction: () => true
		},
		{
			name: 'interior',
			text: 'Тип салона',
			width: 'w-[14%]',
			required: false,
			validationFunction: () => true
		},
		{
			name: 'carType',
			text: 'Тип авто',
			width: 'w-[14%]',
			required: false,
			validationFunction: () => true
		},
		{
			name: 'available',
			text: 'Наличие',
			width: 'w-[10%]',
			required: false,
			validationFunction: () => true
		}
	];
