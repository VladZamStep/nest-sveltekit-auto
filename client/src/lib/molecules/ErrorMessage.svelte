<script lang="ts">
	import Title from '$lib/atoms/Title.svelte';
	export let text: string;
</script>

<div class={text ? 'pt-1 pl-1' : 'hidden'}>
	<Title variant="error" {text} />
</div>
