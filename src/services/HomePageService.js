import axios from "axios"
const BASE_URL = 'http://localhost:3001/api'

const homePageService = {
  getDoctors: async () => {
    try {
      const respone = await axios.get(`${BASE_URL}/doctors/homePage`)
      console.log(respone)
      return respone.data
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
  getSpecialtyById: async (id) => {
    try {
      const respone = await axios.get(`${BASE_URL}/specialty/${id}`)
      return respone.data.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
export default homePageService
