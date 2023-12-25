import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const loginService = async (email, password) => {
    try {
        const respone = await axios.post(`${BASE_URL}/login`, { email, password })
        console.log('respone: ' + respone)
        return respone.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const registerService = async (userData) => {

    try {
        const respone = await axios.post(`${BASE_URL}/register`, userData)
        console.log('respone: ' + respone)
        return respone.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const DeleteUser = (id) => {
    return axios.delete(`${BASE_URL}/deleteUser/${id}`) // Added missing function call to axios.delete
}

const UpdateUser = (id) => {
    return axios.put(`${BASE_URL}/updateUser/${id}`) // Added missing function call to axios.put
}



export default {
    loginService,
    registerService,
    DeleteUser,
    UpdateUser,

}
