import axios from "axios"
const BASE_URL = 'http://localhost:3001/api'
const loginService = async (email, password) => {
    try {
        const respone = await axios.post(`${BASE_URL}/login`, { email, password })
        console.log(respone)
        return respone.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const CreateUser = (data) => {
    return axios.post
}

const DeleteUser = (id) => {
    return axios.delete
}

const UpdateUser = (id) => {
    return axios.put
}
const registerUser = async (fromData) => {
    try {
        const respone = await axios.post(`${BASE_URL}/register`, fromData)
        console.log(respone)
        return respone
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default {
    loginService,
    CreateUser,
    DeleteUser,
    UpdateUser,
    registerUser
}
