<script lang="ts">
	import { Circle } from 'svelte-loading-spinners';

	export let value = false;
	export let loading = false;
	export let readonly = true;
</script>

{#if loading}
	<Circle size={24} color="rgb(59 130 246)" duration="1s" />
{:else}
	<label class="checkbox" on:change>
		<input type="checkbox" bind:checked={value} disabled={readonly} />
		<span class="checkbox_checkmark">&nbsp;</span>
	</label>
{/if}

<style>
	.checkbox {
		@apply relative cursor-pointer select-none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.checkbox_checkmark {
		@apply absolute top-0 h-6 left-0 w-6 bg-neutral-300 rounded transition ease-in-out;
	}
	.checkbox_checkmark:hover {
		@apply bg-neutral-400;
	}
	.checkbox input {
		@apply opacity-0 cursor-pointer h-0 w-0;
	}

	.checkbox input:checked ~ .checkbox_checkmark {
		@apply bg-blue-500;
	}

	.checkbox_checkmark:after {
		@apply content-[''] absolute hidden;
	}

	.checkbox input:checked ~ .checkbox_checkmark:after {
		display: block;
	}

	.checkbox .checkbox_checkmark:after {
		@apply left-2 top-1 w-[7px] h-[14px];
		border: solid white;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
</style>
