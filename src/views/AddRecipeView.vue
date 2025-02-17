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
  <div>Add Form</div>

  <form @submit.prevent="addRecipe">
    <div>
      <input type="text" v-model="name" required placeholder="Recipe Name" />
    </div>
    <div>
      <input type="textarea" v-model="description" placeholder="Recipe Description" />
    </div>
    <button type="submit">Add</button>
  </form>
</template>
