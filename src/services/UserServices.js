import axios from "axios";

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

export default {
    HandleLoginApi,
    CreateUser,
    DeleteUser,
    UpdateUser,
}