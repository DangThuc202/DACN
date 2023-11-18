import axios from "axios"
const BASE_URL = 'http://localhost:3001/api'
const getSpecialties = async () => {
  try {
    const respone = await axios.get(`${BASE_URL}/specialty`)
    console.log(respone)
    return respone.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
module.exports = {
  getSpecialties
}