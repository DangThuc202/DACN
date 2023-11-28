import axios from 'axios'
const API_URL = 'http://localhost:3001/api'
export class specialtyService {
  static async getSpecialties() {
    try {
      const response = await axios.get(`${API_URL}/specialty`)
      return response.data.data
    } catch (error) {
      throw error
    }
  }
  static async getSpecialty(id) {
    try {
      const response = await axios.get(`${API_URL}/specialty/${id}`)
      return response.data.data
    } catch (error) {
      throw error
    }
  }
  static async createSpecialty(specialty) {
    try {
      const response = await axios.post(`${API_URL}/specialty`, specialty)
      return response.data
    } catch (error) {
      throw error
    }
  }
  static async updateSpecialty(specialty) {
    try {
      const response = await axios.put(`${API_URL}/specialty`, specialty)
      return response.data
    } catch (error) {
      throw error
    }
  }
  static async deleteSpecialty(id) {
    try {
      const response = await axios.delete(`${API_URL}/specialty/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
}