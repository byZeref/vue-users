import axios from "axios";

const url = 'https://reqres.in/api/login'

const login_request = async (credentials, _token) => {
    try {
        const res = await axios.post(url, credentials.value)
        const { data } = res
        _token.value = data.token
    } catch (e) {
        console.log(e);
    }
}

export default login_request