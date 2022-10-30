<script lang="ts">
	import type { VehicleElement } from '../../common/models/types/VehicleElement';
	import Button from '../atoms/Button.svelte';
	import Label from '../atoms/Label.svelte';
	import Title from '../atoms/Title.svelte';
	import { VehicleElementsParams } from '../../common/consts/VehicleElementsParams.js';
	import VehicleElementControl from '../molecules/VehicleElementControl.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { ShowError } from '../../common/utils/error';
	import { BodyColor } from '../../common/models/enums/BodyColor';
	import { Interior } from '../../common/models/enums/Interior';
	import { CarType } from '../../common/models/enums/CarType';
	import { ApiClass } from '../../common/services/api';

	export let data: VehicleElement[] = [];

	let element: VehicleElement = {
		brand: '',
		model: '',
		code: '',
		bodyColor: BodyColor.BLACK,
		interior: Interior.BASE,
		carType: CarType.CABRIO,
		available: true
	};

	type ConfigElementValidator = {
		[key: keyof VehicleElement]: boolean;
	};

	let validator: ConfigElementValidator = {
		brand: false,
		model: false,
		code: false
	};

	$: valid = validator.code && validator.brand && validator.model;

	let showModal = false;
	let loading = false;

	const dispatch = createEventDispatcher();

	const handleClose = () => {
		showModal = !showModal;
	};

	const create = async () => {
		loading = true;
		const postVehicle = new ApiClass();
		let apiResponse = await postVehicle.postVehicle(element);
		if (apiResponse.result) {
			dispatch('create-element', apiResponse.data);
			element = {
				brand: '',
				model: '',
				code: '',
				bodyColor: BodyColor.BLACK,
				interior: Interior.BASE,
				carType: CarType.CABRIO,
				available: true
			};
			handleClose();
		} else {
			ShowError('Не удалось создать чек. Повторите попытку позже.');
		}
		loading = false;
	};
</script>

<Button on:click={() => handleClose()} variant="add" text="Добавить" icon />
{#if showModal}
	<div class="darkBackground" transition:fade>
		<div class="modal" transition:fly={{ y: -1000, duration: 800 }}>
			<Title text="Добавить новый автомобиль" variant="secondary" />
			<form on:submit|preventDefault class="w-full">
				{#each VehicleElementsParams as { name, text, required, validationFunction, validationMessage } (name)}
					<div class="mb-3 last-of-type:flex gap-2 last-of-type:p-0">
						<Label text={`${text} ${required ? '<sup>*(обязательное поле)</sup>' : ''}`} />
						<div class={loading && name === 'available' ? '' : loading ? 'readonly' : ''}>
							<VehicleElementControl
								bind:element
								key={name}
								readonly={loading}
								{required}
								notValidText={validationMessage}
								validationFunction={() => validationFunction(element, data)}
								bind:valid={validator[name]}
							/>
						</div>
					</div>
				{/each}
			</form>
			<div class="p-5 flex justify-between gap-4 w-full">
				<Button
					on:click={create}
					variant="add"
					type="submit"
					text="Добавить"
					widthFull
					disabled={!valid || loading}
					{loading}
				/>
				<Button
					on:click={() => handleClose()}
					variant="cancel"
					text="Отмена"
					color="secondary"
					widthFull
				/>
			</div>
		</div>
	</div>
{/if}

<style>
	form {
		@apply pt-5 px-5;
	}
	.readonly {
		@apply h-[47px] bg-gray-50 font-normal border border-gray-200 text-gray-500 text-sm rounded-lg block p-2.5;
	}
	.darkBackground {
		@apply fixed top-0 left-0 w-full h-full bg-black/25 z-10 flex justify-center items-center;
	}
	.modal {
		@apply relative bg-neutral-100 max-w-lg w-11/12 flex justify-center items-center flex-col rounded-lg;
	}
</style>
