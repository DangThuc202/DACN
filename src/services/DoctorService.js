import axios from 'axios'


const BASE_URL = 'http://localhost:3001/api'
export const getDoctors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors`)
    return response.data.data
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error
  }
}
