<script setup>
import { useUserStore } from '../store/users';

const userStore = useUserStore()
const { users } = userStore

</script>

<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="(user) in users" :key="user.id" class="p-2 card card-side bg-base-100 shadow-xl items-center">
            <div class=" rounded-xl">
                <img class="h-20 w-20 rounded-full object-cover" :src="user.avatar" alt="Avatar" />
            </div>
            <div class="card-body p-5">
                <h2 class="card-title">{{ user.first_name + ' ' + user.last_name }}</h2>
                <p>{{ user.email }}</p>
                <!-- <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
