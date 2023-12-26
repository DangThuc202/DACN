import { Box, Stack, Typography } from '@mui/material'
import pay1 from '../../../image/DoctorPage_img/pay1.svg'
import pay2 from '../../../image/DoctorPage_img/pay2.svg'
import pay3 from '../../../image/DoctorPage_img/pay3.png'
import pay4 from '../../../image/DoctorPage_img/pay4.svg'

const Pay = () => {
  const boxStyle = {
    height: '160px',
    width: '160px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const contentStyle = {
    height: '94px',
    width: '94px',
    background: '#fff',
    borderRadius: '50%',
    boxShadow: ' rgb(154, 206, 220) 5px 11px 33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'Center'
  }

  const textStyle = {
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <Box margin="50px 146px">
      <Typography sx={{ color: '#111C63', fontSize: '36px', fontWeight: '700' }}>
        Phương pháp thanh toán linh hoạt
      </Typography>
      <Typography sx={{ fontSize: '20px', margin: '30px 0' }}>
        Chúng tôi cũng cung cấp các lựa chọn trả góp linh hoạt để đảm bảo khả năng chi trả của khách hàng cho các dịch
        vụ chăm sóc cao cấp.
      </Typography>
      <Stack direction="row" spacing={6}>
        <Box position="relative">
          <Box sx={boxStyle} style={{ backgroundColor: 'rgb(218, 245, 251)' }}>
            <Box sx={contentStyle}>
              <img src={pay1} />
            </Box>
          </Box>
          <Typography sx={textStyle}>Tiền mặt</Typography>
        </Box>
        <Box position="relative">
          <Box sx={boxStyle} style={{ backgroundColor: 'rgb(232, 212, 254)' }}>
            <Box sx={contentStyle}>
              <img src={pay2} />
            </Box>
          </Box>
          <Typography sx={textStyle}>Thẻ tín dụng</Typography>
        </Box>
        <Box position="relative">
          <Box sx={boxStyle} style={{ backgroundColor: 'rgb(255, 237, 216)' }}>
            <Box sx={contentStyle}>
              <img src={pay3} style={{ height: '45px' }} />
            </Box>
          </Box>
          <Typography sx={textStyle}>Momo</Typography>
        </Box>
        <Box position="relative">
          <Box sx={boxStyle} style={{ backgroundColor: 'rgb(242, 255, 216)' }}>
            <Box sx={contentStyle}>
              <img src={pay4} />
            </Box>
          </Box>
          <Typography sx={textStyle}>Chuyển khoản</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default Pay
