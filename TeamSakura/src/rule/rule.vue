<template>
  <div>
    <h2 v-for="rule in rules" :key="rule.id">{{ rule.explain }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const rules = ref([]);

onMounted(async () => {
  const { data } = await axios.get('/db.json');
  rules.value = data.rules ?? [];
});
</script>
