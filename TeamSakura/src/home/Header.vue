<template>
  <nav class="navbar navbar-expand bg-dark navbar-dark px-3">
    <span class="navbar-brand">🌸{{ teamName.name }}🌸</span>

    <div class="navbar-nav-container">
      <ul class="navbar-nav flex-row">
        <li class="nav-item px-2">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item px-2">
          <router-link class="nav-link" to="/member">Member</router-link>
        </li>
        <li class="nav-item px-2">
          <router-link class="nav-link" to="/team">Team</router-link>
        </li>
        <li class="nav-item px-2">
          <router-link class="nav-link" to="/rule">Rule</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const teamName = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/teamName');
    teamName.value = response.data[0];
  } catch (error) {
    console.log('[에러] 팀명 데이터를 가져오는데 실패했습니다 : ', error);
  }
});
</script>
