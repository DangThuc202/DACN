import { Box, Typography, Button, Stack } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import bell_img from '../../image/bell_img.png'
import { useState } from 'react'
import test from '../../image/test.jpg'

const Bell = () => {
  const [showNotification, setShowNotification] = useState(false)

  const handleHover = () => {
    setShowNotification(true)
  }

  const handleLeave = () => {
    setShowNotification(false)
  }

  const highlight = {
    color: 'red'
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginRight: '16px',
        position: 'relative',
        color: '#1976d2',
        '&:hover': {
          cursor: 'pointer'
        }
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <NotificationsActiveIcon />
      {showNotification && (
        <Box
          sx={{
            height: 'auto',
            minHeight: '300px',
            width: '430px',
            position: 'absolute',
            top: '120%',
            backgroundColor: 'white',
            right: -30,
            padding: '10px ',
            boxShadow: ' rgb(0, 0, 0) 5px 11px 33px',
            '&:after': {
              cursor: 'pointer'
            }
          }}
        >
          <Stack spacing={1.2}>
            <Box sx={{ width: '100%', height: '90px', display: 'flex', backgroundColor: 'pink', alignItems: 'center' }}>
              <img style={{ width: '70px', height: '70px', marginRight: '20px', marginLeft: '10px' }} src={test} />
              <Typography sx={{ marginTop: '10px' }}>
                Bạn có hẹn với bác sĩ
                <span style={highlight}> Đặng Hoàng Thức </span> ở khoa
                <span style={highlight}> Khoa nhi </span> lúc
                <span style={highlight}> 10:00 </span> ngày
                <span style={highlight}> 25/12/2023 </span>
              </Typography>
            </Box>
            <Box sx={{ width: '100%', height: '90px', display: 'flex', backgroundColor: 'pink', alignItems: 'center' }}>
              <img style={{ width: '70px', height: '70px', marginRight: '20px', marginLeft: '10px' }} src={test} />
              <Typography sx={{ marginTop: '10px' }}>
                Bạn có hẹn với bác sĩ
                <span style={highlight}> Lê Hiếu Nghĩa </span> ở khoa
                <span style={highlight}> Cơ xương khớp </span> lúc
                <span style={highlight}> 10:00 </span> ngày
                <span style={highlight}> 29/12/2023 </span>
              </Typography>
            </Box>
            <Box sx={{ width: '100%', height: '90px', display: 'flex', backgroundColor: 'pink', alignItems: 'center' }}>
              <img style={{ width: '70px', height: '70px', marginRight: '20px', marginLeft: '10px' }} src={test} />
              <Typography sx={{ marginTop: '10px' }}>
                Bạn có hẹn với bác sĩ
                <span style={highlight}> Lê Hiếu Nghĩa </span> ở khoa
                <span style={highlight}> Cơ xương khớp </span> lúc
                <span style={highlight}> 10:00 </span> ngày
                <span style={highlight}> 29/12/2023 </span>
              </Typography>
            </Box>
            <Box sx={{ width: '100%', height: '90px', display: 'flex', backgroundColor: 'pink', alignItems: 'center' }}>
              <img style={{ width: '70px', height: '70px', marginRight: '20px', marginLeft: '10px' }} src={test} />
              <Typography sx={{ marginTop: '10px' }}>
                Bạn có hẹn với bác sĩ
                <span style={highlight}> Lê Hiếu Nghĩa </span> ở khoa
                <span style={highlight}> Cơ xương khớp </span> lúc
                <span style={highlight}> 10:00 </span> ngày
                <span style={highlight}> 29/12/2023 </span>
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              position: 'absolute',
              top: '-39px',
              right: '22px',
              borderWidth: '20px',
              borderStyle: 'solid',
              borderColor: 'transparent transparent white transparent'
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default Bell
