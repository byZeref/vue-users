<script setup>
import Users from '../components/Users.vue'
import { onMounted } from 'vue';
import users_request from '@/api/users_request';
import { useUserStore } from '@/store/users'

const userStore = useUserStore()

onMounted(async () => {
    loadUsers()
})
const loadUsers = async () => {
    (userStore.users.length === 0) && await users_request(userStore)
}
</script>

<template>
    <Users />
</template>

<style scoped>

</style>
