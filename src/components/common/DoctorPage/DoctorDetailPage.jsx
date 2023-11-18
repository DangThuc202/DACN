
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const DoctorDetailPage = () => {
  const { id } = useParams()
  const [doctors, setDoctors] = useState([])
  return (
    <div>
      <h1>Trang doctor detail</h1>
      <p>ID: {id}</p>
    </div>
  )
}

export default DoctorDetailPage
