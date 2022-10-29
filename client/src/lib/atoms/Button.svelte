<script lang="ts">
	import IoMdAdd from 'svelte-icons/io/IoMdAdd.svelte';
	import IoMdCreate from 'svelte-icons/io/IoMdCreate.svelte';
	import IoMdCheckmark from 'svelte-icons/io/IoMdCheckmark.svelte';
	import Circle from 'svelte-loading-spinners/dist/ts/Circle.svelte';

	export let variant: 'add' | 'edit' | 'cancel' | 'done';
	export let color: 'primary' | 'secondary' | 'green' = 'primary';
	export let icon: true | undefined = undefined;
	export let text: string | undefined = undefined;
	export let widthFull: true | undefined = undefined;
	export let type: 'button' | 'submit' = 'button';
	export let disabled: boolean = false;
	export let loading = false;
</script>

<button
	disabled={disabled || loading}
	{type}
	on:click
	class={color === 'primary' && widthFull
		? 'btn_primary w-full'
		: color === 'secondary' && widthFull
		? 'btn_secondary w-full'
		: color === 'primary'
		? 'btn_primary'
		: color === 'green'
		? 'btn_green'
		: 'btn_secondary'}
>
	<span class={text ? 'flex px-4 py-2' : 'flex p-0'}>
		{#if loading}
			<Circle size={23} color="rgb(59 130 246)" duration="1s" />
		{:else if text !== undefined}
			{text}
		{/if}
		{#if icon}
			{#if variant === 'add'}
				<span class="icon">
					<IoMdAdd />
				</span>
			{:else if variant === 'edit'}
				<span class="icon">
					<IoMdCreate />
				</span>
			{:else if variant === 'done'}
				<span class="icon">
					<IoMdCheckmark />
				</span>
			{/if}
		{/if}
	</span>
</button>

<style>
	.icon {
		@apply w-6 h-6 p-[0.125rem] bg-transparent;
	}
	.btn_primary {
		@apply flex justify-center items-center bg-blue-500 text-white rounded transition ease-in-out font-medium;
	}
	.btn_primary:hover {
		@apply bg-blue-700 text-gray-100;
	}
	.btn_secondary {
		@apply flex justify-center items-center bg-gray-300 text-gray-600 rounded transition ease-in-out font-medium;
	}
	.btn_secondary:hover {
		@apply bg-gray-400 text-gray-100;
	}
	.btn_green {
		@apply flex justify-center items-center bg-green-400 text-white rounded transition ease-in-out font-medium;
	}
	.btn_green:hover {
		@apply bg-green-500 text-gray-100;
	}
	button:disabled,
	button:disabled:hover {
		@apply bg-white text-gray-400 cursor-not-allowed border-2 border-gray-200 box-border;
	}
</style>
