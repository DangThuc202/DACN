import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios' // You might use this for fetching data from an API

const ClinicDetailPage = () => {
  const { id } = useParams() // Get the clinic ID from the URL
  const [clinic, setClinic] = useState(null)

  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchClinicDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/specialty/${id}`)
        setClinic(response.data.data)
      } catch (error) {
        console.error('Error fetching clinic details:', error)
      }
    }

    fetchClinicDetails()
  }, [id])

  if (!clinic) {
    return <div>Loading...</div>
  }

  return (
    <div className="clinic-detail-page">
      <h1 className="clinic-name">{clinic.name}</h1>
      <p className="clinic-description">{clinic.description}</p>

      <div className="clinic-services">
        {clinic.services.map((service, index) => (
          <div key={index} className="service">
            <h2 className="service-title">{service.name}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="clinic-hours">
        <h2>Operating Hours</h2>
        <p>{clinic.operatingHours}</p>
      </div>

      <div className="clinic-contact">
        <h2>Contact Information</h2>
        <p>{clinic.contact.phone}</p>
        <p>{clinic.contact.email}</p>
      </div>
    </div>
  )
}

export default ClinicDetailPage
