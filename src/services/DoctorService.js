import axios from 'axios'


const BASE_URL = 'http://localhost:3001/api'
export class DoctorService {
  static async getDoctors() {
    try {
      const response = await axios.get(`${BASE_URL}/doctors`)
      return response.data.data
    } catch (error) {
      console.error('Error fetching data: ', error)
      throw error
    }
  }
  static async getDoctorById(id) {
    try {
      const response = await axios.get(`${BASE_URL}/doctor/${id}`)
      return response.data.data
    } catch (error) {
      console.error('Error fetching data: ', error)
      throw error
    }
  }
}

