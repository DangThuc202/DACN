import { Box, Stack, Typography } from '@mui/material'
import img1_bg3 from '../../image/img1_bg3.png'
import img2_bg3 from '../../image/img2_bg3.png'
import img3_bg3 from '../../image/img3_bg3.png'
import img4_bg3 from '../../image/img4_bg3.png'

const Background3 = () => {
  const boxStyle = {
    width: '340px',
    height: '450px',
    display: 'flex',
    borderRadius: '20px',
    cursor: 'pointer'
  }

  const typoStyle = {
    display: 'flex',
    position: 'absolute',
    fontSize: '30px',
    color: '#111c63',
    marginLeft: '40px',
    marginTop: '20px',
    fontWeight: '600'
  }

  return (
    <Box sx={{ height: '500px', padding: '50px 0 20px 0', display: 'flex', justifyContent: 'right' }}>
      <Stack direction="row" spacing={3}>
        <Box sx={{ backgroundColor: '#daf5fb' }} style={boxStyle}>
          <Typography style={typoStyle}>
            Bác sĩ <br /> đến nhà
          </Typography>
          <img src={img1_bg3} />
        </Box>
        <Box sx={{ backgroundColor: '#eae7fb' }} style={boxStyle}>
          <Typography style={typoStyle}>
            Nhà thuốc <br /> trực tuyến
          </Typography>
          <img src={img2_bg3} />
        </Box>
        <a href="/doingubacsi">
          <Box sx={{ backgroundColor: '#f2ddde' }} style={boxStyle}>
            <Typography style={typoStyle}>Tìm bác sĩ</Typography>
            <img src={img3_bg3} />
          </Box>
        </a>
        <Box sx={{ backgroundColor: '#f8fbda' }} style={boxStyle}>
          <Typography style={typoStyle}>
            Gói chăm sóc <br /> sức khỏe{' '}
          </Typography>
          <img src={img4_bg3} />
        </Box>
      </Stack>
    </Box>
  )
}

export default Background3
