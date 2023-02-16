import axios from 'axios'

const url = 'https://reqres.in/api/users'

const users_request = async (userStore) => {
    const { page, users } = userStore
    const api_config = axios.create({
        baseURL: url,
        params: {
            page: page
        }
    })
    try {
        const res = await api_config.get()
        const { data } = res.data
        data.forEach((item, index) => {
            users.push(item)
        });
    } catch (e) {
        console.log(e);
    }
}

export default users_request