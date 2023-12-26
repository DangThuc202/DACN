import { Box, Avatar, Typography, Stack } from '@mui/material'
import test from '../../../image/test.jpg'
import ReportIcon from '@mui/icons-material/Report'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import homePageService from '../../../services/homePageService'

const Doctor = () => {
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
    return <div>Đang load....</div>
  }
  return (
    <Box>
      <Box
        sx={{
          padding: '10px',
          display: 'flex'
        }}
      >
        <Avatar src={doctor.image} style={{ height: '150px', width: '150px', marginRight: '50px' }} />
        <Stack spacing={2} mt={2}>
          <Box>
            <Typography variant="h5" fontWeight="700">
              {doctor.name}
            </Typography>
            <Typography fontWeight="700" ml={3}>
              Với <span style={{ color: 'red' }}>10</span> năm kinh nghiệm{' '}
            </Typography>
          </Box>
          <Box display="flex">
            <Box>
              <Typography fontWeight="700" color="#949494">
                Chuyên khoa{' '}
              </Typography>
              <Typography fontWeight="700" color="#949494">
                Chức vụ{' '}
              </Typography>
              <Typography fontWeight="700" color="#949494">
                Công tác{' '}
              </Typography>
            </Box>
            <Box ml={2}>
              <Typography fontWeight="700" color="blue">
                {doctor.specialty?.name}{' '}
              </Typography>
              <Typography fontWeight="700" color="blue">
                Bác sĩ
              </Typography>
              <Typography fontWeight="700" color="blue">
                {doctor.clinic?.name}{' '}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ backgroundColor: 'rgb(255 247 237)', padding: '20px' }}>
        <Box display="flex" mb={1}>
          <ReportIcon />
          <Typography ml={1}>Lưu ý</Typography>
        </Box>
        <Typography>
          * Nếu bệnh nhân bận việc không đến khám được vui lòng hủy lịch khám đã đặt và đặt lại ngày khác. Xin cảm ơn!
        </Typography>
      </Box>
    </Box>
  )
}

export default Doctor
