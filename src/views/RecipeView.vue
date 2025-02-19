<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useRecipeStore } from '@/stores/recipe';

/**
 * NOTE:
 * when we call fetch inside onMounted,
 * the onMounted will not call again if the route is changed (eg: http://localhost:5173/recipe/123 -> http://localhost:5173/recipe/456)
 * because the component is the same
 * To solve this, we can use watch
 */
// onMounted(() => console.log('Fetching data inside onMounted'));

/**
 * NOTE:
 * () => route.params.id => use arrow function to get reactive changes
 * watch will call the function even the route is the same (eg: http://localhost:5173/recipe/123 -> http://localhost:5173/recipe/123)
 * set immediate: true to call the function immediately (to fetch the data like onMounted)
 */
// watch(
//   () => route.params.id,
//   () => console.log('Fetching data inside watch'),
//   {
//     immediate: true,
//   },
// );

const route = useRoute();
const recipeStore = useRecipeStore();

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string));
const isFavorite = computed(() => (recipe.value ? recipeStore.isFavorite(recipe.value.id) : false));
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ recipe?.name }}</h1>
    <p class="hover:underline">{{ recipe?.description }}</p>
    <div class="flex items-center gap-4">
      <RouterLink :to="{ name: 'edit-recipe', params: { id: recipe?.id } }" class="underline">
        Edit
      </RouterLink>
      <button
        v-if="recipe"
        @click="recipeStore.toggleFavorite(recipe?.id)"
        class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
      >
        {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
      </button>
    </div>
  </div>
</template>
