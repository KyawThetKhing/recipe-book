<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { Recipe } from '@/stores/recipe';
defineProps<{
  recipes: Recipe[];
}>();
</script>
<template>
  <div>
    <nav v-if="recipes.length > 0">
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id" class="mb-2">
          <RouterLink
            :to="{ name: 'recipe', params: { id: recipe.id } }"
            class="text-amber-600 hover:underline"
          >
            {{ recipe.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else class="text-gray-600">No recipe found</div>
  </div>
</template>
