
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DoctorDetailPage = () => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/doctor/${id}`)
        console.log(response.data.data)
        setDoctor(response.data.data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [id])
  if (!doctor) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>Doctor Detail</h1>
      <p>ID: {id}</p>
      <p>Name: {doctor.user_id.first_name} {doctor.user_id.first_name}</p>
      <p>Specialty: {doctor.specialty_id.name}</p>
      <p>Phone: {doctor.user_id.phone}</p>
      <p>Descriptin: {doctor.description}</p>
    </div>
  )
}

export default DoctorDetailPage
