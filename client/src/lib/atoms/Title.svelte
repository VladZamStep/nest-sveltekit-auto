<script lang="ts">
	export let text: string | undefined;
	export let variant: 'primary' | 'secondary' | 'error' | 'main-error' = 'primary';
</script>

<h1 class={variant}>{text}</h1>

<style>
	.primary {
		@apply pl-1 text-2xl text-gray-700;
	}
	.secondary {
		@apply text-white text-xl font-semibold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 w-full p-5 rounded-t-lg;
	}
	.error {
		@apply text-red-600 text-xs font-semibold;
	}
	.main-error {
		@apply text-blue-500 text-9xl font-bold;
	}
</style>
