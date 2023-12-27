import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import homePageService from '../../../services/homePageService'
import '../../../css/SpecialtyDetailCard.css'

const Detail = () => {
  const [specialty, setSpecialty] = useState({})
  const { id } = useParams()
  const SpecialtyDetailCard = ({ specialty }) => {
    return (
      <Box className="specialty-container">
        <img
          alt="img"
          src={specialty.image}
          className="specialty-image"
        />
        <Typography variant="h4" className="specialty-header">
          {specialty.name}
        </Typography>
        <Stack spacing={3} className="specialty-stack">
          <Typography className="specialty-description">
            {specialty.description}
          </Typography>
        </Stack>
      </Box>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await homePageService.getSpecialtiesByIDHomePage(id)
        setSpecialty(response)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [id])
  return (
    <SpecialtyDetailCard specialty={specialty} />
  )
}

export default Detail
