<tr>
	<slot />
</tr>

<style>
	tr {
		@apply border-b;
	}
	tr:last-child {
		@apply border-none;
	}
</style>
