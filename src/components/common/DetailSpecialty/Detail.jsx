import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import homePageService from '../../../services/homePageService'
const Detail = () => {
  const [specialty, setSpecialty] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await homePageService.getSpecialtiesByIDHomePage(id)
        console.log('log response', response)
        setSpecialty(response)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [id])
  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      <img
        alt='img'
        src={specialty.image}
        style={{
          height: '500px',
          width: '50%',
          display: 'block',
          margin: '40px auto'
        }}
      />
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: '700' }}>
        {specialty.name}
      </Typography>
      <Stack spacing={3} margin="50px 100px">
        <Typography sx={{ textIndent: '50px', lineHeight: '30px', fontSize: '20px' }}>
          {specialty.description}
        </Typography>
      </Stack>
    </Box>
  )
}

export default Detail
