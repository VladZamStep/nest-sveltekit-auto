import type { ApiResponse } from '../models/types/ApiResponse';
import type { VehicleElement } from '../models/types/VehicleElement';

const url = import.meta.env.VITE_API_URL;

const headers = {
	'Content-Type': 'application/json'
};

// const url = process.env.VITE_API_URL;

export class ApiClass {
	async getVehicle(): Promise<ApiResponse<VehicleElement[]>> {
		try {
			const controller = new AbortController();
			const id = setTimeout(() => controller.abort(), 3000);
			const response = await fetch(`${url}`, {
				signal: controller.signal
			});
			clearTimeout(id);
			console.log(response);
			return {
				result: true,
				data: (await response.json())
			};
		} catch (error) {
			console.error(error);
			return {
				result: false
			}
		}
	}

	async postVehicle(element: VehicleElement): Promise<ApiResponse<VehicleElement[]>> {
		try {
			const controller = new AbortController();
			const id = setTimeout(() => controller.abort(), 3000);
			const response = await fetch(`${url}/create`, {
				method: 'POST',
				headers,
				body: JSON.stringify(element),
				signal: controller.signal
			});
			clearTimeout(id);
			console.log(response);
			return {
				result: true,
				data: (await response.json())
			};
		} catch (error) {
			console.error(error);
			return {
				result: false
			}
		}
	}

	async patchVehicle(vehicleId: string, element: VehicleElement | { available: boolean }): Promise<ApiResponse<VehicleElement>> {
		try {
			const controller = new AbortController();
			const id = setTimeout(() => controller.abort(), 3000);
			const response = await fetch(`${url}/${vehicleId}`, {
				method: 'PATCH',
				headers,
				body: JSON.stringify(element),
				signal: controller.signal
			});
			clearTimeout(id);
			console.log(response);
			return {
				result: true,
				data: (await response.json())
			};
		} catch (error) {
			console.error(error);
			return {
				result: false
			}
		}
	}

	async deleteVehicle(vehicleId: string): Promise<ApiResponse<boolean>> {
		try {
			const controller = new AbortController();
			const id = setTimeout(() => controller.abort(), 3000);
			const response = await fetch(`${url}/${vehicleId}`, {
				method: 'DELETE',
				signal: controller.signal
			});
			clearTimeout(id);
			console.log(response);
			return {
				result: true,
			};
		} catch (error) {
			console.error(error);
			return {
				result: false
			}
		}
	}
}