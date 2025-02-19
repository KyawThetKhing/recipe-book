<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import RecipeList from '@/components/RecipeList.vue';

const store = useRecipeStore();
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold m-4">Favorite Recipes</h1>
    <RecipeList :recipes="store.favoriteRecipes" />
  </div>
</template>
