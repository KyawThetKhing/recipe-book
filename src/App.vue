<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
        <li><RouterLink :to="{ name: 'favorites' }">Favorites</RouterLink></li>
        <li><RouterLink :to="{ name: 'add-recipe' }">Add Recipe</RouterLink></li>
      </ul>
    </nav>
  </header>
  <RouterView />
  <nav>
    <ul>
      <li><RouterLink :to="{ name: 'recipe', params: { id: '123' } }">Recipe 1</RouterLink></li>
      <li><RouterLink :to="{ name: 'recipe', params: { id: '456' } }">Recipe 2</RouterLink></li>
    </ul>
  </nav>
</template>
