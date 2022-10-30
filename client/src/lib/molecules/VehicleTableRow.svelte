<script lang="ts">
	import TD from '../atoms/TD.svelte';
	import Button from '../atoms/Button.svelte';
	import type { VehicleElement } from '../../common/models/types/VehicleElement';
	import VehicleElementControl from './VehicleElementControl.svelte';
	import { createEventDispatcher } from 'svelte';
	import Circle from 'svelte-loading-spinners/dist/ts/Circle.svelte';
	import { fly } from 'svelte/transition';
	import { ShowError } from '../../common/utils/error';
	import { ApiClass } from '../../common/services/api';

	export let row: VehicleElement;

	let editable = false;
	let loadingCheckBox = false;
	let loading = false;

	const dispatch = createEventDispatcher();

	const updateCheckBox = async (id: string) => {
		const element = {
			available: row.available
		};
		loadingCheckBox = true;
		const updateVehicle = new ApiClass();
		let apiResponse = await updateVehicle.patchVehicle(id, element);
		if (apiResponse.result) {
			dispatch('update-check-position');
		} else {
			ShowError('Не удалось изменить наличие авто. Повторите попытку позже.');
			row.available = !row.available;
		}
		loadingCheckBox = false;
	};

	const handleUpdate = async (id: string, row: VehicleElement) => {
		loading = true;
		const updateVehicle = new ApiClass();
		let apiResponse = await updateVehicle.patchVehicle(id, row);
		editable = !editable;
		if (apiResponse.result) {
			dispatch('update-element', row);
		} else {
			ShowError('Не удалось изменить чек. Повторите попытку позже.');
			editable = !editable;
		}
		loading = false;
	};

	const handleDelete = async (id: string) => {
		loading = true;
		const deleteVehicle = new ApiClass();
		let apiResponse = await deleteVehicle.deleteVehicle(id);
		if (apiResponse.result) {
			dispatch('delete-element', id);
		} else {
			ShowError('Не удалось изменить чек. Повторите попытку позже.');
		}
	};
	const notDisplayArr = ['id'];
</script>

<tr in:fly|local={{ y: -200, duration: 1000 }} out:fly|local={{ y: 200, duration: 1000 }}>
	{#each Object.keys(row).filter((item) => !notDisplayArr.includes(item)) as key}
		<TD css={key === 'brand' ? 'font-bold' : ''}>
			<VehicleElementControl
				element={row}
				{key}
				readonly={key === 'brand' ? true : key === 'available' ? false : !editable}
				on:change={() => updateCheckBox(row.id)}
				loading={loadingCheckBox}
			/>
		</TD>
	{/each}
	<TD>
		<div class="flex gap-2">
			{#if editable}
				{#if loading}
					<Circle size={24} color="rgb(59 130 246)" duration="1s" />
				{:else}
					<Button variant="done" icon on:click={() => handleUpdate(row.id, row)} color="green" />
				{/if}
			{:else}
				<Button variant="edit" icon on:click={() => (editable = !editable)} />
			{/if}
			<Button variant="delete" icon on:click={() => handleDelete(row.id)} />
		</div>
	</TD>
</tr>

<style>
	tr {
		@apply border-b;
	}
	tr:last-child {
		@apply border-none;
	}
</style>
