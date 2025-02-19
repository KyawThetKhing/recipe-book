<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const router = useRouter();
const route = useRoute();
const name = ref('');
const description = ref('');
const recipeStore = useRecipeStore();

const editRecipe = () => {
  // implement add recipe
  recipeStore.editRecipe(route.params.id as string, {
    name: name.value,
    description: description.value,
  });

  router.push({ name: 'recipe', params: { id: route.params.id } });
};

watch(
  () => route.params.id as string,
  (id: string) => {
    if (!id) router.push({ name: 'not-found' });
    const recipe = recipeStore.getRecipeById(id);
    if (!recipe) router.push({ name: 'not-found' });

    name.value = recipe?.name || '';
    description.value = recipe?.description || '';
  },
  { immediate: true },
);
</script>
<template>
  <h1 class="text-2xl font-bold m-4">Edit Form</h1>

  <form @submit.prevent="editRecipe" class="space-y-4">
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
      Edit
    </button>
  </form>
</template>
