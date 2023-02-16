import { defineStore } from "pinia";
import { ref, computed } from "vue";
import login_request from '@/api/login_request'

export const useUserStore = defineStore('users', () => {
    const users = ref([])
    const page = ref(1)
    const _token = ref('')
    const userLogged = ref({
        email: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).userEmail : ''
    })

    const login = async (credentials) => {
        await login_request(credentials, _token)
        userLogged.value.email = credentials.value.email
        localStorage.setItem('auth', JSON.stringify({ userEmail: userLogged.value.email, token: _token.value })) // para guardar en cookies importar lib 'js-cookie'
    }

    const logout = () => {
        localStorage.removeItem('auth')
        _token.value = ''
        users.value = []
        userLogged.value = { email: '' }
    }

    return { users, page, userLogged, login, logout, _token }
})