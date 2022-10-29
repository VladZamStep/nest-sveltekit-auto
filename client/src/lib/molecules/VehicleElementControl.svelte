<script lang="ts">
	import type { VehicleElement } from '../../common/models/types/VehicleElement.js';
	import SelectProvider from './SelectProvider.svelte';
	import CheckBox from '../atoms/CheckBox.svelte';
	import Input from '../atoms/Input.svelte';
	import ErrorMessage from './ErrorMessage.svelte';

	export let loading = false;
	export let element: VehicleElement;
	export let key: keyof VehicleElement;
	export let readonly = false;

	export let required = false;
	export let requiredText = '';

	export let valid = true;
	export let validationFunction: () => boolean;
	export let notValidText: string;

	const handleInput = () => {
		if (element[key] === element.brand) {
			valid = required ? !!element[key] : true;
		}
		if (element[key] === element.model) {
			valid = required ? !!element[key] : true;
		}
		if (element[key] === element.code) {
			validationFunction();
			valid = (required ? !!element[key] : true) && validationFunction();
		}
	};

	function control() {
		switch (key) {
			case 'bodyColor':
			case 'interior':
			case 'carType':
				return SelectProvider;
			case 'available':
				return CheckBox;
			default:
				return Input;
		}
	}
</script>

<svelte:component
	this={control()}
	id={key}
	{key}
	{readonly}
	bind:value={element[key]}
	on:change
	{loading}
	on:input={() => handleInput()}
/>
{#if !readonly}
	{#if required && !element[key]}
		<ErrorMessage text={requiredText} />
	{:else if !valid}
		<ErrorMessage text={notValidText} />
	{/if}
{/if}
