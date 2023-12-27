import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'

const homePageService = {
  getDoctors: async () => {
    try {
      const respone = await axios.get(`${BASE_URL}/doctors/homePage`)
      return respone.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getSpecialties: async () => {
    try {
      const respone = await axios.get(`${BASE_URL}/specialty`)
      return respone.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getSpecialtiesByIDHomePage: async (id) => {
    try {
      const respone = await axios.get(`${BASE_URL}/specialties-homepage/${id}`)
      return respone.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getDoctorById: async (id) => {
    try {
      console.log(id)
      const respone = await axios.get(`${BASE_URL}/doctors/homePage/${id}`)
      console.log(respone.data.data)
      return respone.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getClinicsHomePage: async () => {
    try {
      const respone = await axios.get(`${BASE_URL}/clinics/homePage`)
      return respone.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getSpecialtiesHomePage: async () => {
    try {
      const respone = await axios.get(`${BASE_URL}/specialties-homepage`)
      return respone.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getClinicsHomePageById: async (id) => {
    try {
      const respone = await axios.get(`${BASE_URL}/clinics/homePage/${id}`)
      return respone.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  getBlogsHomePage: async () => {
    try {
      const reponse = await axios.get(`${BASE_URL}/blogs`)
      return reponse.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
export default homePageService
