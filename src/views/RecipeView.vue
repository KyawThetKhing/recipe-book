<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.id);

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
watch(
  () => route.params.id,
  () => console.log('Fetching data inside watch'),
  {
    immediate: true,
  },
);
</script>

<template>
  <div>Recipe {{ $route.params.id }}</div>
</template>
