import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Background3 from '../Background3'
import Background4 from '../Background4'
import Footer from '../Footer'
import Background9 from '../Background9'
import Pay from '../DoctorPage/Pay'
import { Box } from '@mui/material'
import HeaderCovid from '../HeaderCovid'
import Header from '../Header'
import './ClinicDetailCard'
import ClinicDetailCard from './ClinicDetailCard'
import homePageService from '../../../services/homePageService'
const ClinicDetailPage = () => {
  const { id } = useParams()
  const [clinic, setClinic] = useState(null)

  useEffect(() => {
    const fetchClinicDetails = async () => {
      try {
        const response = await homePageService.getClinicsHomePageById(id)
        setClinic(response)
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
    <Box sx={{ backgroundColor: '#fff' }}>
      <HeaderCovid />
      <Header />
      <ClinicDetailCard clinic={clinic} />
      <Background3 />
      <Background4 />
      <Pay />
      <Background9 />
      <Footer />
    </Box>
  )
}

export default ClinicDetailPage
