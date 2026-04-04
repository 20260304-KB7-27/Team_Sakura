<template>
  <div>
    <h2>팀 소개</h2>

    <div v-for="item in introduceList" :key="item.id">
      {{ item.explain }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const introduceList = ref([]);

const fetchIntroduce = async () => {
  try {
    const res = await axios.get('http://localhost:3000/introduce');
    introduceList.value = res.data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchIntroduce();
});
</script>
