import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const loginService = async (email, password) => {
  try {
    const respone = await axios.post(`${BASE_URL}/login`, { email, password })
    return respone.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const registerService = async (userData) => {
  console.log('Log userData: ', userData)
  try {
    const respone = await axios.post(`${BASE_URL}/register`, userData)
    console.log('Log response: ', respone.data)
    return respone.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
const emailVerification = async (token) => {
  try {
    const respone = await axios.post(`${BASE_URL}/verify-email`, { token })
    return respone.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default {
  loginService,
  registerService,
  emailVerification
}
