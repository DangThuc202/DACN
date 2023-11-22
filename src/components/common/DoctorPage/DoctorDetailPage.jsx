
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
    <div style={{ margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Doctor Detail</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {doctor.user_id.first_name} {doctor.user_id.last_name}</p>
      <p><strong>Specialty:</strong> {doctor.specialty_id.name}</p>
      <p><strong>Phone:</strong> {doctor.user_id.phone}</p>
      <p><strong>Description:</strong> {doctor.description}</p>
    </div>
  )
}

export default DoctorDetailPage
