<script lang="ts">
	import { Clock } from 'svelte-loading-spinners';
</script>

<div
	class="flex flex-col justify-center absolute z-50 top-0 left-0 bottom-0 right-0 bg-white sm:bg-gray-100 dark:bg-dark-background dark:sm:bg-dark-background"
>
	<div class="mx-auto my-5">
		<Clock color="rgb(59 130 246)" size="96" />
	</div>
	<p class="text-center text-apd dark:text-white text-lg font-light">Пожалуйста, подождите...</p>
</div>
