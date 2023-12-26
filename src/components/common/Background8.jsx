import { Box, Typography } from '@mui/material'
import h1 from '../../image/bg8_img/h1.jpg'
import h2 from '../../image/bg8_img/h2.jpg'
import h3 from '../../image/bg8_img/h3.jpg'
import h4 from '../../image/bg8_img/h4.jpg'
import h5 from '../../image/bg8_img/h5.jpg'
import h6 from '../../image/bg8_img/h6.jpg'
import h7 from '../../image/bg8_img/h7.jpg'
import h8 from '../../image/bg8_img/h8.jpg'
import h9 from '../../image/bg8_img/h9.jpg'
import h10 from '../../image/bg8_img/h10.jpg'

const Background8 = () => {
  const boxStyle = {
    padding: '5px 20px',
    marginTop: '30px',
    height: '60px',
    boxShadow: '0 3px 15px rgba(0,0,0,.1)',
    width: 'fit-content',
    borderRadius: '10px',
    marginLeft: '30px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transform: 'scale(1.2)'
    }
  }

  return (
    <Box sx={{ height: '25vw', display: 'flex' }}>
      <Box>
        <Box sx={{ marginLeft: '70px', display: 'flex' }}>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h1} />
            </a>
          </Box>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h2} />
            </a>
          </Box>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h3} />
            </a>
          </Box>
        </Box>
        <Box sx={{ marginLeft: '70px', display: 'flex' }}>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h4} />
            </a>
          </Box>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h5} />
            </a>
          </Box>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h6} />
            </a>
          </Box>
        </Box>
        <Box sx={{ marginLeft: '70px', display: 'flex' }}>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h7} />
            </a>
          </Box>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h8} />
            </a>
          </Box>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h9} />
            </a>
          </Box>
          <Box sx={boxStyle}>
            <a href="https://vietcetera.com/en/jio-health-is-using-technology-to-humanize-healthcare" target="_blank">
              <img style={{ height: '60px' }} src={h10} />
            </a>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginLeft: '100px' }}>
        <Typography variant="h2" style={{ fontWeight: 600 }}>
          Truyền thông nói <br /> về Jio Health
        </Typography>
        <Typography
          style={{
            fontSize: '18px',
            paddingTop: '50px'
          }}
        >
          Cùng khám phá những góc nhìn đa chiều từ <br />
          các cơ quan truyền thông về Jio Health và hiểu <br />
          hơn về cách chúng tôi cải tiến dịch vụ chăm <br />
          sóc sức khỏe.
        </Typography>
      </Box>
    </Box>
  )
}

export default Background8
