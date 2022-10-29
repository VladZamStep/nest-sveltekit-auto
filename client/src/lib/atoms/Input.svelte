<script lang="ts">
	export let id: string;
	export let value: string | null;
	export let readonly = false;
	export let required = false;

	function callFocus(node: HTMLInputElement) {
		if (node.id === 'receiptTypeName') {
			node.focus();
		}
	}
</script>

{#if readonly}
	{value ?? ''}
{:else}
	<input {required} type="text" {id} bind:value use:callFocus on:input />
{/if}

<style>
	input:read-write {
		@apply bg-gray-50 font-normal border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none;
	}
</style>
