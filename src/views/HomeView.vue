<script setup lang="ts">
import { ref, computed } from 'vue';
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';

const searchQuery = ref('');
const recipeStore = useRecipeStore();
const filterRecipes = computed(() => {
  return recipeStore.filterRecipes(searchQuery.value);
});
</script>

<template>
  <main>
    <h1 class="text-2xl font-bold m-4">Recipe Book</h1>
    <div>{{ recipeStore.secret }}</div>

    <div>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="search recipes"
        class="p-2 border rounded mb-4 w-full"
      />
    </div>
    <RecipeList :recipes="filterRecipes" />
  </main>
</template>
