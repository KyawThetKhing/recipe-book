<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const router = useRouter();
const name = ref('');
const description = ref('');
const recipeStore = useRecipeStore();

const addRecipe = () => {
  // implement add recipe
  const recipe = recipeStore.addRecipe({
    name: name.value,
    description: description.value,
  });

  router.push({ name: 'recipe', params: { id: recipe.id } });
};
</script>
<template>
  <h1 class="text-2xl font-bold m-4">Add Form</h1>

  <form @submit.prevent="addRecipe" class="space-y-4">
    <div>
      <input
        type="text"
        v-model="name"
        required
        placeholder="Recipe Name"
        class="p-2 border rounded w-full"
      />
    </div>
    <div>
      <textarea
        v-model="description"
        placeholder="Recipe Description"
        class="p-2 border rounded w-full"
      ></textarea>
    </div>
    <button type="submit" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
      Add
    </button>
  </form>
</template>
