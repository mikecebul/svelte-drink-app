import type { DrinkType, IngredientType } from 'src/types/drinkTypes';
import { writable } from 'svelte/store';

export const drink = writable({
	name: '',
	instructions: '',
	ingredients: [],
	thumbUrl: ''
});

export const fetchDrinks = async () => {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
	const res = await fetch(url);
	const data = await res.json();

	const ingredients: IngredientType[] = [...Array(15)]
		.map((_value, i) => ({
			name: data.drinks[0][`strIngredient${i + 1}`],
			amount: data.drinks[0][`strMeasure${i + 1}`]
		}))
		.filter((ingredient) => ingredient.name);

	const randomDrink: DrinkType = {
		name: data.drinks[0].strDrink,
		instructions: data.drinks[0].strInstructions,
		ingredients,
		thumbUrl: data.drinks[0].strDrinkThumb
	};
	drink.set(randomDrink);

	if (res.ok) {
		return {
			randomDrink
		};
	} else {
		throw new Error('Could not fetch the drink');
	}
};
fetchDrinks();
