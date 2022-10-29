import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { VITE_API_URL } from '$env/static/private';

const url = `${VITE_API_URL}`;
const urlCreate = `${VITE_API_URL}/create`;

function checkAndWrapResponse(response: AxiosResponse) {
	if (!response) throw new Error('Something went wrong!');
	return new Response(JSON.stringify(response.data));
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	return checkAndWrapResponse(await axios.get(url));
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: Request }) {
	return checkAndWrapResponse(await axios.post(urlCreate, await request.json()));
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH({ request }: { request: Request }) {
	return checkAndWrapResponse(await axios.patch(url, await request.json()));
}
