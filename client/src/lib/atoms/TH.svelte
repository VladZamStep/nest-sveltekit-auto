<script lang="ts">
	import type { VehicleElement } from 'src/common/models/types/VehicleElement';

	export let css = '';
	export let name: keyof VehicleElement = 'brand';
	export let selectedName: keyof VehicleElement = 'brand';
</script>

<th class={css} class:focused={selectedName === name} on:click>
	<slot />
</th>

<style>
	th {
		@apply py-3 px-4 relative;
	}
	th.focused {
		@apply text-blue-700;
	}
</style>
