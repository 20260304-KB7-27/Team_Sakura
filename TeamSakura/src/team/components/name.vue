<template>
  <div>
    <h2>팀 이름</h2>

    <div v-for="item in teamName" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const teamName = ref([]);

const fetchTeamName = async () => {
  try {
    const res = await axios.get('http://localhost:3000/teamName');
    teamName.value = res.data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchTeamName();
});
</script>
