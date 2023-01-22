<script setup>
import { computed } from "vue";
const answer = computed(() => {
  return 1 + 1;
});
</script>

<template>
  <div>
    {{ answer }}
  </div>
</template>
