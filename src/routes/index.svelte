<script lang="ts">
	import { drink } from '../stores/drink';
	import { fetchDrinks } from '../stores/drink';

	// console.log('Imported from Store:', $drink);

	const handleClick = async () => {
		fetchDrinks();
	};
</script>

<div class="flex flex-col justify-center items-center m-6">
	<div class="max-w-md rounded overflow-hidden shadow-lg">
		<img class="w-full" src={$drink.thumbUrl} alt="Sunset in the mountains" />
		<div class="px-6 py-4">
			<div class="font-bold text-xl mb-2">{$drink.name}</div>
			<p class="text-gray-700 text-base">
				{$drink.instructions}
			</p>
		</div>
		<div class="px-6 pt-4 pb-2 flex flex-col">
			{#each $drink.ingredients as ingredient}
				<span
					class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>{ingredient.amount} - {ingredient.name}</span
				>
			{/each}
		</div>
		<div class="flex justify-center">
			<button
				class="bg-gray-700 hover:bg-gray-600 text-gray-100 font-bold py-2 px-4 rounded max-w-xs m-4"
				on:click={handleClick}>Get New Drink</button
			>
		</div>
	</div>
</div>
