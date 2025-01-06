<script setup lang="ts">
import { ref } from "vue";

const greetMsg = ref("");
const name = ref("");
</script>

<template>
  <main class="container">
    <theme-group></theme-group>
    <h1 class="text-md">tauri + vue + typescript</h1>
  </main>
</template>
