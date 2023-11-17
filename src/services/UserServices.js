import axios from "axios"

const HandleLoginApi = (email, password) => {
    return axios.post("", email, password)
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
const RegiserUser = async (data) => {
    return await axios.post('http://localhost:3001/api/register', data)
}

export default {
    HandleLoginApi,
    CreateUser,
    DeleteUser,
    UpdateUser,
    RegiserUser
}
