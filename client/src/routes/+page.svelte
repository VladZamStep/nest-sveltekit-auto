<script lang="ts">
	import type { VehicleElement } from '../common/models/types/VehicleElement';
	import Header from '../lib/atoms/Header.svelte';
	import VehicleTable from '../lib/organisms/VehicleTable.svelte';
	import VehicleElementCreate from '../lib/organisms/VehicleElementCreate.svelte';
	import Loading from '../lib/atoms/Loading.svelte';
	import { get } from '../common/services/api';
	import { sortFunc } from '../common/services/sort';
	import { onMount } from 'svelte';
	import Toast from '$lib/atoms/Toast.svelte';
	import { ShowError } from '../common/utils/error';
	import { ShowSuccess } from '../common/utils/success';

	export let data: VehicleElement[] = [];

	let loaded = false;
	let selectedName: keyof VehicleElement = 'brand';
	let selectedOrder = true;

	export const refresh = async () => {
		loaded = false;
		let apiResponse = await get();

		if (apiResponse.result) {
			data = apiResponse.data as VehicleElement[];
		} else {
			ShowError('Не удалось загрузить данные. Повторите попытку позже.');
		}
		loaded = true;
	};

	const getSortInfo = (e: CustomEvent) => {
		selectedName = e.detail.name;
		selectedOrder = e.detail.selectedOrder;
	};

	const create = ({ detail }: { detail: VehicleElement }) => {
		ShowSuccess('Автомобиль успешно добавлен.');
		data = [detail, ...data];
		sortFunc(selectedName, selectedOrder, data);
	};

	const updateElement = ({ detail }: { detail: VehicleElement }) => {
		ShowSuccess('Автомобиль успешно изменен.');
		data = data.filter((e) => detail.id !== e.id);
		setTimeout(() => {
			data = [detail, ...data];
			sortFunc(selectedName, selectedOrder, data);
		}, 1);
	};

	onMount(async () => {
		await refresh();
	});
</script>

{#if loaded}
	<div class="m-3 sm:mx-7 sm:my-10 xl:mx-auto max-w-7xl">
		<Header title="Парк автомобилей">
			<VehicleElementCreate on:create-element={create} {data} />
		</Header>
		<VehicleTable {data} on:get-sort-info={getSortInfo} on:update-element={updateElement} />
	</div>
{:else}
	<Loading />
{/if}
<Toast />
