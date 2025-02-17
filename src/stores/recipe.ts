import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Recipe {
  id: string;
  name: string;
  description: string;
}
export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);

  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    const newRecipe = { ...recipe, id: Date.now().toString() };
    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const removeRecipe = (id: string) => recipes.value.filter((r) => r.id !== id);

  const getRecipeById = (id: string) => recipes.value.find((r) => r.id === id);
  return {
    recipes,
    addRecipe,
    removeRecipe,
    getRecipeById,
  };
});
