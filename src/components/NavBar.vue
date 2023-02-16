<script setup>
import { computed, ref } from 'vue'
import { Bars3CenterLeftIcon, ChevronDownIcon, ChevronRightIcon, UserCircleIcon, UsersIcon, HomeIcon } from "@heroicons/vue/24/outline";
import { useUserStore } from '../store/users';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter()
const link_color = '#3ABFF8'
const loading = ref(false)

const getUserEmail = computed(() => {
    return userStore.userLogged.email
})


const logout = () => {
    loading.value = true
    setTimeout(() => {
        userStore.logout()
        loading.value = false
        router.push('/login')
    }, 500);
}

</script>

<template>
    <div class="navbar bg-base-100 shadow rounded-lg">
        <!-- MOBILE -->
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost p-1 lg:hidden">
                    <Bars3CenterLeftIcon class="w-7 h-7" />
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-40 md:w-52">
                    <li><a>Usuarios</a></li>
                    <li><a>Login</a></li>
                    <li><a>Registrarse</a></li>
                </ul>
            </div>
            <img src="../assets/icons/users-2.ico" class="max-lg:hidden w-10 h-10 mr-1" alt="logo">
            <RouterLink id="router-main" to="/" class="max-lg:hidden text-2xl font-medium text-[#41A6F9]">
                Users App
            </RouterLink>
        </div>
        <!-- DESKTOP -->
        <img src="../assets/icons/users-2.ico" class="lg:hidden w-10 h-10" alt="logo">
        <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal px-1 space-x-2">
                <li>
                    <RouterLink to="/" class="max-lg:hidden flex">
                        <HomeIcon class="w-5 h-5" />
                        Inicio
                    </RouterLink>
                </li>
                <li v-if="userStore.userLogged">
                    <RouterLink to="/users" class="max-lg:hidden flex">
                        <UsersIcon class="w-5 h-5" />
                        Usuarios
                    </RouterLink>
                </li>
                <li v-else>
                    <RouterLink to="/login" class="max-lg:hidden">
                        Login
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="max-lg:navbar-end">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <UserCircleIcon class="w-8 h-8 text-slate-600" />
                    </div>
                </label>
                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-60 bg-base-100 shadow">
                    <div class="card-body">
                        <span class="font-light text-xl text-slate-600">{{ getUserEmail }}</span>
                        <div class="card-actions">
                            <button @click="logout"
                                :class="[loading ? 'loading disabled' : '', 'btn btn-outline  btn-block']">
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
a:active {
    background-color: v-bind(link_color);
}

.router-link-active {
    background-color: v-bind(link_color);
}

#router-main {
    background-color: transparent;
}
</style>
