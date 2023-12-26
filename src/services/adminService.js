import axios from 'axios'
import Cookies from 'js-cookie'
const API_URL = 'http://localhost:3001/api'
const token = Cookies.get('accessToken')

export class adminService {
  static async getDoctors() {
    try {
      const response = await axios.get(`${API_URL}/admin/doctors`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data.data
    } catch (error) {
      throw error
    }
  }
}
