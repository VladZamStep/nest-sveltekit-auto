<script lang="ts">
	import type { VehicleElement } from '../../common/models/types/VehicleElement';
	import THead from '../atoms/THead.svelte';
	import TR from '../atoms/TR.svelte';
	import TH from '../atoms/TH.svelte';
	import { VehicleElementsParams } from '../../common/consts/VehicleElementsParams';
	import VehicleTableRow from '../molecules/VehicleTableRow.svelte';
	import { createEventDispatcher } from 'svelte';
	import { sortFunc } from '../../common/services/sort';

	export let data: VehicleElement[] = [];
	let selectedName: keyof VehicleElement = 'brand';
	let selectedOrder = true;

	const dispatch = createEventDispatcher();

	const handleSort = (name: keyof VehicleElement) => {
		if (selectedName === name) {
			selectedOrder = !selectedOrder;
		} else {
			selectedName = name;
			selectedOrder = true;
		}
		sortFunc(name, selectedOrder, data);
		dispatch('get-sort-info', { name, selectedOrder });
	};
</script>

<div class="overflow-x-auto relative">
	<table
		class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed border rounded-3xl"
	>
		<THead>
			<TR>
				{#each VehicleElementsParams as { name, text, width } (name)}
					<TH
						{selectedName}
						{name}
						css={`${width} cursor-pointer hover:text-blue-500`}
						on:click={() => handleSort(name)}
					>
						{text}
						{#if selectedName === name}
							<span class="order-icon">
								{@html selectedOrder ? '&#9662;' : '&#9652;'}
							</span>
						{/if}
					</TH>
				{/each}
				<TH css="w-1/12">...</TH>
			</TR>
		</THead>
		<tbody>
			{#each data as row (row.id)}
				<VehicleTableRow
					{row}
					on:update-element
					on:update-check-position={() => {
						if (selectedName === Object.keys(row)[5]) {
							selectedOrder = !selectedOrder;
							handleSort(Object.keys(row)[5]);
						}
					}}
				/>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.order-icon {
		@apply absolute text-lg top-2/4;
		transform: translateY(-55%);
	}
</style>
