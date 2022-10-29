import type { ApiResponse } from '../models/types/ApiResponse';
import type { VehicleElement } from '../models/types/VehicleElement';

const headers = {
	'Content-Type': 'application/json'
};


async function execute<T>(init: RequestInit): Promise<ApiResponse<T>> {
	try {
		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), 3000);
		const response = await fetch(`/api`, {
			...init,
			signal: controller.signal
		});
		clearTimeout(id);
		console.log(response)
		return {
			result: true,
			data: (await response.json()) as T
		};
	} catch (error) {
		console.error(error);
		return {
			result: false
		}
	}
}
// Get All
export async function get(): Promise<ApiResponse<VehicleElement[]>> {
	return execute<VehicleElement[]>({
		method: 'GET'
	});
}

// Create
export async function post(element: VehicleElement): Promise<ApiResponse<VehicleElement[]>> {
	return execute<VehicleElement[]>({
		method: 'POST',
		headers,
		body: JSON.stringify(element)
	});
}

// Patch
export async function patch(element: VehicleElement): Promise<ApiResponse<VehicleElement>> {
	return execute<VehicleElement>({
		method: 'PATCH',
		headers,
		body: JSON.stringify(element)
	});
}
