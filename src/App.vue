<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { useUserStore } from './store/users';

const userStore = useUserStore()

</script>

<template>
  <div v-if="userStore.userLogged.email" class="mb-3">
    <NavBar />
  </div>

  <RouterView />

</template>

<style scoped>

</style>
