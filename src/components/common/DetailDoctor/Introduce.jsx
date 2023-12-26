import { Box, Stack, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import homePageService from '../../../services/homePageService'
const Introduce = () => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await homePageService.getDoctorById(id)
        setDoctor(response)
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
    <Stack padding={4} sx={{ width: 'auto', height: 'auto' }} spacing={3}>
      <Typography variant="h6" fontWeight={700}>
        Giới thiệu
      </Typography>
      <Typography fontSize={18}>
        Bác sĩ
        <span style={{ color: 'red' }}>
          {' '}
          {doctor.name}
          {''}
        </span>{' '}
        chuyên khoa
        <span style={{ color: 'red' }}> {doctor.specialty.name} </span>
        đã có hơn <span style={{ color: 'red' }}>{doctor.workExperience}</span> năm kinh nghiệm trong lĩnh vực{' '}
        {doctor.specialty.name}.
      </Typography>

      <Typography fontSize={18}>
        {doctor.name} <strong>chuyên điều trị: </strong>
        <br />
        <ul>
          <li tabIndex={2}>
            <span style={{ color: 'red' }}> {doctor.specialty.name} </span>
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        Mô tả bác sĩ
      </Typography>
      <Typography fontSize={18}>{doctor.description}</Typography>
    </Stack>
  )
}

export default Introduce
