export type IngredientType = {
	name: string;
	amount: string;
};

export type DrinkType = {
	name: string;
	instructions: string;
	ingredients: IngredientType[];
	thumbUrl: string;
};
