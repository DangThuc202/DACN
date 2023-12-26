import axios from 'axios'
const API_URL = 'http://localhost:3001/api'

const specialtyService = {
  getSpecialties: async () => {
    const respone = await axios.get(`${API_URL}/specialty`)
    return respone.data.data
  }
}
export default specialtyService
