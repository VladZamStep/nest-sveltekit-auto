<script lang="ts">
	import type { VehicleElement } from '../../common/models/types/VehicleElement';
	import Select from '../atoms/Select.svelte';
	import { BodyColorSelectValues } from '../../common/models/enums/BodyColor';
	import { InteriorSelectValues } from '../../common/models/enums/Interior';
	import { CarTypeSelectValues } from '../../common/models/enums/CarType';

	export let value: unknown;
	export let key: Pick<VehicleElement, 'bodyColor' | 'interior' | 'carType'>;
	export let readonly = false;
</script>

{#if key === 'bodyColor'}
	<Select bind:value values={BodyColorSelectValues} {readonly} />
{:else if key === 'interior'}
	<Select bind:value values={InteriorSelectValues} {readonly} />
{:else if key === 'carType'}
	<Select bind:value values={CarTypeSelectValues} {readonly} />
{/if}
