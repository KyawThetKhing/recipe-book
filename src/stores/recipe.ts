import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Recipe {
  id: string;
  name: string;
  description: string;
}
export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);
  const favoriteIds = ref<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favoriteIds.value.includes(id)) {
      favoriteIds.value = favoriteIds.value.filter((f) => f !== id);
    } else {
      favoriteIds.value.push(id);
    }
  };

  const isFavorite = (id: string) => favoriteIds.value.includes(id);

  const filterRecipes = (searchQuery: string) => {
    return recipes.value.filter((recipe: Recipe) =>
      recipe.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );
  };

  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    const newRecipe = { ...recipe, id: Date.now().toString() };
    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const removeRecipe = (id: string) => recipes.value.filter((r) => r.id !== id);

  const getRecipeById = (id: string) => recipes.value.find((r) => r.id === id);

  const editRecipe = (id: string, updatedObj: Omit<Recipe, 'id'>) => {
    const index = recipes.value.findIndex((recipe: Recipe) => recipe.id === id);
    if (index !== -1) {
      recipes.value[index] = { ...recipes.value[index], ...updatedObj };
    }
    return recipes.value[index];
  };

  const favoriteRecipes = computed(() =>
    recipes.value.filter((r) => favoriteIds.value.includes(r.id)),
  );

  return {
    recipes,
    addRecipe,
    removeRecipe,
    getRecipeById,
    filterRecipes,
    editRecipe,
    favoriteIds,
    isFavorite,
    toggleFavorite,
    favoriteRecipes,
  };
});
