<script lang="ts">
	export let text: string;
</script>

<p>{text}</p>

<style>
	p {
		@apply w-96 text-sm text-center leading-5;
	}
</style>
