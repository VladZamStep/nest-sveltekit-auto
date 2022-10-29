<script lang="ts">
	import Title from './Title.svelte';

	export let title = '';
</script>

<div
	class="pb-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center sm:text-left text-center"
>
	<Title text={title} />
	<slot />
</div>
