const axios = require("axios")

const BASE_URL = 'http://localhost:3001/api'
const getDoctors = async () => {
  try {
    const respone = await axios.get(`${BASE_URL}/doctors`)
    return respone.data.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
module.exports = {
  getDoctors
}