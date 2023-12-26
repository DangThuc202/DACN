import { Box, Divider, Stack, Typography } from '@mui/material'

const Booking = () => {
  const btnStyle = {
    width: '150px',
    padding: '5px',
    border: '2px solid black',
    textAlign: 'center',
    textTransform: 'none',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    fontSize: '16px',
    display: 'block',
    whiteSpace: 'nowrap',
    color: 'black',
    '&:hover': {
      color: 'black',
      transform: 'scale(1.2)',
      cursor: 'pointer'
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto'
      }}
    >
      <Typography variant="h6" ml={3} mt={3} mb={3}>
        Đặt lịch khám
      </Typography>
      <Box sx={{ padding: ' 0 30px', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <Box sx={btnStyle}>
          T3 (22/11/2023) <br />
          <Typography sx={{ color: '' }}>5 khung giờ</Typography>
        </Box>
        <Box sx={btnStyle}>
          T3 (22/11/2023) <br />
          <Typography sx={{ color: 'red' }}>5 khung giờ</Typography>
        </Box>
        <Box sx={btnStyle}>
          T3 (22/11/2023) <br />
          <Typography sx={{ color: 'red' }}>5 khung giờ</Typography>
        </Box>
        <Box sx={btnStyle}>
          T3 (22/11/2023) <br />
          <Typography sx={{ color: 'red' }}>5 khung giờ</Typography>
        </Box>
        <Box sx={btnStyle}>
          T3 (22/11/2023) <br />
          <Typography sx={{ color: 'red' }}>5 khung giờ</Typography>
        </Box>
        <Box sx={btnStyle}>
          T3 (22/11/2023) <br />
          <Typography sx={{ color: 'red' }}>5 khung giờ</Typography>
        </Box>
        <Box sx={btnStyle}>
          T3 (22/11/2023) <br />
          <Typography sx={{ color: 'red' }}>5 khung giờ</Typography>
        </Box>
      </Box>
      <Box mb={5} mt={5}>
        <Box>
          <Divider textAlign="left" sx={{ fontSize: '20px', fontWeight: '700' }}>
            Buổi sáng
          </Divider>
          <Stack direction="row" spacing={4} ml={4} mt={3}>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
          </Stack>
        </Box>
        <Box mt={4}>
          <Divider textAlign="left" sx={{ fontSize: '20px', fontWeight: '700' }}>
            Buổi chiều
          </Divider>
          <Stack direction="row" spacing={4} ml={4} mt={3}>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
            <Box sx={btnStyle}>10:00 - 11:00</Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Booking
