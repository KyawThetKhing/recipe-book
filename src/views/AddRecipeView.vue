<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const addRecipe = () => {
  // implement add recipe
  console.log('submit');
  router.push({ name: 'recipe', params: { id: 1 } });
};
</script>
<template>
  <div>Add Form</div>

  <form @submit.prevent="addRecipe">
    <button type="submit">Add</button>
  </form>
</template>
