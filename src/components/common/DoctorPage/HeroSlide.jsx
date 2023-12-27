import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import place from '../../../image/DoctorPage_img/place.svg'
import exp from '../../../image/DoctorPage_img/exp.svg'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homePageService from './../../../services/homePageService'

const HeroSlide = () => {
  const [doctors, setDoctors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    homePageService
      .getDoctors()
      .then((doctors) => {
        setDoctors(doctors)
      })
      .catch((error) => {
        console.error('Error fetching and parsing data', error)
      })
  }, [])

  const contentStyle = {
    borderRadius: '10px',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    padding: '10px',
    justifyContent: 'center'
  }

  const iconStyle = {
    height: '60px',
    width: '60px',
    backgroundColor: '#fff',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '20px'
  }
  return (
    <Box>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid xs={4}>
            <Box
              sx={{
                maxWidth: '380px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '5px 10px 30px #ccd6ef',
                padding: '20px',
                backgroundColor: '#ffebee'
              }}
            >
              <Box
                sx={{
                  height: '230px',
                  backgroundImage: `url(${doctor.image})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain'
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '30px'
                }}
              >
                <Link to={`/doingubacsi/${doctor._id}`} onChange={() => navigate(`/doingubacsi/${doctor._id}`)}>
                  <Typography variant="h6">{`${doctor.name}`}</Typography>
                  <Typography>{doctor.specialty.name}</Typography>
                </Link>
              </Box>
              <Box backgroundColor="rgb(227 245 233)" sx={contentStyle}>
                <Box sx={iconStyle}>
                  <img alt="Avatar" style={{ width: '30px' }} src={place} />
                </Box>
                <Box sx={{ width: '260px' }}>
                  <Typography>
                    {`${doctor.clinic.name}`}
                    <Typography></Typography>
                  </Typography>
                </Box>
              </Box>
              <Box backgroundColor="rgb(213 237 250)" sx={contentStyle}>
                <Box sx={iconStyle}>
                  <img style={{ width: '30px' }} src={exp} />
                </Box>
                <Box sx={{ width: '260px' }}>
                  <Typography>
                    <strong>{`${doctor.workExperience}`}</strong> năm kinh nghiệm
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HeroSlide
