import React from 'react'
import './ClinicDetailCard.css'

const ClinicDetailCard = ({ clinic }) => {
  if (!clinic) {
    return <div>Loading...</div>
  }

  return (
    <div className="clinic-detail-card">
      <h1 className="clinic-detail-name">{clinic.name}</h1>
      <img src={clinic.image} alt={clinic.name} className="clinic-detail-image" />
      <p className="clinic-detail-description">{clinic.description}</p>
      <p className="clinic-detail-address">{clinic.address}</p>
    </div>
  )
}

export default ClinicDetailCard