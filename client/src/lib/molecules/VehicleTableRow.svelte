<script lang="ts">
	import TD from '../atoms/TD.svelte';
	import Button from '../atoms/Button.svelte';
	import type { VehicleElement } from '../../common/models/types/VehicleElement';
	import VehicleElementControl from './VehicleElementControl.svelte';
	import { patch, post } from '../../common/services/api';
	import { createEventDispatcher } from 'svelte';
	import Circle from 'svelte-loading-spinners/dist/ts/Circle.svelte';
	import { fly } from 'svelte/transition';
	import { ShowError } from '../../common/utils/error';

	export let row: VehicleElement;

	let editable = false;
	let loadingCheckBox = false;
	let loading = false;

	const dispatch = createEventDispatcher();

	const updateCheckBox = async () => {
		const element = {
			model: row.model,
			available: row.available
		};
		loadingCheckBox = true;
		console.log(element);
		let apiResponse = await patch(element);
		console.log(apiResponse);
		if (apiResponse.result) {
			dispatch('update-check-position');
		} else {
			ShowError('Не удалось изменить провайдер. Повторите попытку позже.');
			row.available = !row.available;
		}
		loadingCheckBox = false;
	};

	const handleUpdate = async (row: VehicleElement) => {
		loading = true;
		let apiResponse = await post(row);
		editable = !editable;
		if (apiResponse.result) {
			dispatch('update-element', row);
		} else {
			ShowError('Не удалось изменить чек. Повторите попытку позже.');
			editable = !editable;
		}
		loading = false;
	};
	console.log(Object.keys(row));
	const notDisplayArr = ['id'];
</script>

<tr in:fly|local={{ y: -200, duration: 1000 }} out:fly|local={{ y: 200, duration: 1000 }}>
	{#each Object.keys(row).filter((item) => !notDisplayArr.includes(item)) as key}
		<TD css={key === 'brand' ? 'font-bold' : ''}>
			<VehicleElementControl
				element={row}
				{key}
				readonly={key === 'brand' ? true : key === 'available' ? false : !editable}
				on:change={() => updateCheckBox()}
				loading={loadingCheckBox}
			/>
		</TD>
	{/each}
	<TD>
		{#if editable}
			{#if loading}
				<Circle size={24} color="rgb(59 130 246)" duration="1s" />
			{:else}
				<Button variant="done" icon on:click={() => handleUpdate(row)} color="green" />
			{/if}
		{:else}
			<Button variant="edit" icon on:click={() => (editable = !editable)} />
		{/if}
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
