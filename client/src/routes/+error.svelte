<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/atoms/Button.svelte';
	import Message from '$lib/atoms/Message.svelte';
	import Paragraph from '$lib/atoms/Paragraph.svelte';
	import Title from '$lib/atoms/Title.svelte';

	let status = String($page.status);
</script>

<div class="flex flex-col justify-center items-center h-screen gap-3">
	<Title variant="main-error" text={status} />
	{#if $page.status === 500}
		<Message text="Ошибка сервера" />
		<Paragraph
			text="На сервере произошла непредвиденная ошибка. Попробуйте повторить Ваши действия, либо вернуться на главную страницу."
		/>
		<a href="/">
			<Button text="Перейти на главную" variant="add" />
		</a>
	{:else if $page.status === 404}
		<Message text="Страница не найдена" />
		<Paragraph text="Запрашиваемая Вами страница устарела, либо не существует..." />
		<a href="/">
			<Button text="Перейти на главную" variant="add" />
		</a>
	{/if}
</div>
