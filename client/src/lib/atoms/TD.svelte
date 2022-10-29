<script>
	export let css = '';
</script>

<td class={css}>
	<slot />
</td>

<style>
	td {
		@apply py-2 px-4;
	}
</style>
