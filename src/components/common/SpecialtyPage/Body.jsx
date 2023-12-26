import { Box, Typography } from '@mui/material'
import vatlitrilieu from '../../../image/vatlitrilieu.webp'
import { useEffect, useState } from 'react'
import specialtyService from '../../../services/specialtyService'
import { Link, Route } from 'react-router-dom'

const Body = () => {
  const itemStyle = {
    width: '150px',
    padding: '5px',
    textAlign: 'center',
    textTransform: 'none',
    transition: 'transform 0.3s ease',
    lineHeight: '24px',
    '&:hover': {
      transform: 'scale(1.2)',
      cursor: 'pointer'
    }
  }
  const [specialties, setSpecialties] = useState([])
  useEffect(() => {
    specialtyService
      .getSpecialties()
      .then((specialties) => {
        console.log(specialties)
        setSpecialties(specialties)
      })
      .catch((error) => {
        console.error('Error fetching and parsing data', error)
      })
  }, [])
  return (
    <Box style={{ margin: '50px 100px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: '700' }}>
        THÔNG TIN CÁC CHUYÊN KHOA CỦA CHÚNG TÔI
      </Typography>
      <Box
        sx={{
          padding: ' 50px 30px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '70px',
          justifyContent: 'center'
        }}
      >
        {Array.isArray(specialties) &&
          specialties.map((specialty, index) => (
            <Link to={`/thongtinchuyenkhoa/${specialty._id}`} key={index} style={{ textDecoration: 'none' }}>
              <Box key={index} sx={itemStyle}>
                <img src={specialty.image} style={{ width: '64px', height: '64px' }} />
                <Typography>{specialty.name}</Typography>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  )
}
export default Body
