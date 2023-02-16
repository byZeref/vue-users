<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/users';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/24/outline';

const router = useRouter()
const userStore = useUserStore()
const credentials = ref({
    email: '',
    password: ''
})
const loading = ref(false)

const login = async () => {
    loading.value = true
    await userStore.login(credentials)
    loading.value = false
    router.push('/')
}

</script>

<template>
    <div class="flex flex-col justify-center items-center pt-20 pb-32 w-[600px] bg-slate-200 rounded-md">
        <h3 class="text-xl md:text-4xl font-semibold text-slate-500 mb-6 md:mb-12 px-4">Iniciar Sesión</h3>
        <form @submit.prevent="login" class="flex flex-col space-y-3 px-4 md:w-80" action="">
            <div class="relative items-center">
                <div class="pointer-events-none absolute z-10 inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-slate-500 sm:text-sm">
                        <EnvelopeIcon class="w-5 h-5" />
                    </span>
                </div>
                <input v-model="credentials.email" type="text" placeholder="Email"
                    class="input  input-bordered pl-9 w-full max-md:font-light focus:border-accent focus:ring-accent" />
            </div>
            <div class="relative items-center">
                <div class="pointer-events-none absolute z-10 inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-slate-500 sm:text-sm">
                        <LockClosedIcon class="w-5 h-5" />
                    </span>
                </div>
                <input v-model="credentials.password" type="password" placeholder="Password"
                    class="input input-bordered pl-9 w-full max-md:font-light focus:border-accent focus:ring-accent" />
            </div>
            <button type="submit"
                :class="[loading === true ? 'loading disabled' : '', 'btn btn-accent max-md:font-light']">Login</button>
        </form>
    </div>
</template>

<style scoped>

</style>
