import React, { useEffect, useState } from 'react'
import './ClinicPage.css'
import { Box } from '@mui/material'
import HeaderCovid from '../HeaderCovid'
import Header from '../Header'
import Background3 from '../Background3'
import Background4 from '../Background4'
import Footer from '../Footer'
import Background9 from '../Background9'
import Pay from '../DoctorPage/Pay'
import homePageService from '../../../services/homePageService'
import { Link } from 'react-router-dom'


const ClinicPage = () => {

  const [clinics, setClinics] = useState([])
  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await homePageService.getClinicsHomePage()
        setClinics(response)
      } catch (error) {
        console.error('Error fetching clinics:', error)
      }
    }
    fetchClinics()
  }, [])
  const ClinicCard = ({ clinics }) => {
    return (
      < Link to={`/phongkham/${clinics._id}`
      } className='clinic-link' >
        <div className="clinic-card">
          <img src={clinics.image} alt={clinics.name} className="clinic-image" />
          <h3 className="clinic-name">{clinics.name}</h3>
          <p className="clinic-address">{clinics.address}</p>
          <p className="clinic-description">{clinics.description}</p>

        </div>
      </Link >
    )
  }
  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <HeaderCovid />
      <Header />
      <div className="clinic-page">
        <h1 className="page-title">
          THÔNG TIN CÁC PHÒNG KHÁM CỦA CHÚNG TÔI
        </h1>
        <div className="clinic-list">
          {clinics.map(clinic => (
            <ClinicCard key={clinic.id} clinics={clinic} />
          ))}
        </div>
      </div>
      )
      <Background3 />
      <Background4 />
      <Pay />
      <Background9 />
      <Footer />
    </Box>
  )
}
export default ClinicPage