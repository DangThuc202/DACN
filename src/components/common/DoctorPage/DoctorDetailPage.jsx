import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import homePageService from '../../../services/homePageService'
const DoctorDetailPage = () => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await homePageService.getDoctorById(id)
        console.log('log response', response.data.data)
        setDoctor(response.data.data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div style={{ margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Doctor Detail</h1>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Name:</strong> {doctor.user.name}
      </p>
      <p>
        <strong>Specialty:</strong> {doctor.specialty.name}
      </p>
      <p>
        <strong>Phone:</strong> {doctor.clinic.name}
      </p>
      <p>
        <strong>Description:</strong> {doctor.description}
      </p>
    </div>
  )
}

export default DoctorDetailPage
