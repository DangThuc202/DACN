import { Box, Typography } from '@mui/material'
import slide from '../../../image/SpecialtyPage_img/slide.png'

const Slide = () => {
  return (
    <Box display="flex">
      <img style={{ width: '100%', display: 'flex' }} src={slide} />
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#fff',
          marginLeft: '100px',
          marginTop: '120px',
          lineHeight: '60px',
          position: 'absolute'
        }}
      >
        Bệnh viện chúng tôi với <br />
        hơn&nbsp;
        <span style={{ padding: '3px 15px', backgroundColor: '#3cffff', color: ' #111c63 ', borderRadius: '20px' }}>
          20+
        </span>
        &nbsp;chuyên khoa
        <br /> sẵn sàng phục vụ vì
        <br />
        sức khỏe của các bạn
      </Typography>
    </Box>
  )
}

export default Slide
