<script lang="ts">
	import type { SelectValue } from '../../common/models/types/SelectValue';

	export let value: unknown;
	export let values: SelectValue[];
	export let nullable = false;
	export let readonly = false;
</script>

{#if readonly}
	{values.find((x) => x.value === value)?.title ?? ''}
{:else}
	<select
		bind:value
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
	>
		{#if nullable}
			<option value={null}>Не выбрано</option>
		{/if}
		{#each values as v}
			<option value={v.value}>{v.title}</option>
		{/each}
	</select>
{/if}

<style>
	select {
		-webkit-appearance: none;
	}
</style>
