import { Box, Stack, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Introduce = () => {
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
    <Stack padding={4} sx={{ width: 'auto', height: 'auto' }} spacing={3}>
      <Typography variant="h6" fontWeight={700}>
        Giới thiệu
      </Typography>
      <Typography fontSize={18}>
        Bác sĩ chuyên khoa
        <span style={{ color: 'red' }}>
          {' '}
          {doctor.user_id.first_name} {doctor.user_id.last_name}{' '}
        </span>
        đã có hơn <span style={{ color: 'red' }}>23</span> năm kinh nghiệm trong lĩnh vực {doctor.specialty_id.name}.
      </Typography>
      <Typography fontSize={18}>{doctor.description}</Typography>
    </Stack>
  )
}

export default Introduce
