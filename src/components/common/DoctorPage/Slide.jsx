import { Box, Typography } from '@mui/material'
import bg1 from '../../../image/DoctorPage_img/bg1.svg'
import doctor from '../../../image/DoctorPage_img/doctor.png'
import bg3 from '../../../image/DoctorPage_img/bg3.svg'
import title from '../../../image/DoctorPage_img/title.svg'
import zIndex from '@mui/material/styles/zIndex'

const Slide = () => {
  const title1 = {
    height: '100%',
    width: '400px',
    display: 'flex',
    borderRadius: '100px',
    background: 'rgba(255, 255, 255, .1)',
    marginTop: '20px',
    fontSize: '18px'
  }

  return (
    <Box>
      <Box display={'flex'}>
        <img style={{ width: '100%', zIndex: '-1' }} src={bg1} />
        <Box display="flex">
          <img style={{ width: '1600px', position: 'absolute', right: 0 }} src={doctor} />
          {}
        </Box>
        <Box sx={{ position: 'absolute', left: 0, margin: '100px 146px', color: 'white' }}>
          <Typography variant="h3" sx={{ fontWeight: '700' }}>
            Đội ngũ Bác sĩ ưu tú <br /> từ các Bệnh viện <br /> hàng đầu
          </Typography>
          <Box style={title1}>
            <img style={{ marginRight: '10px' }} src={title} />
            Y bác sĩ của chúng tôi đã được tiêm vaccine <br /> phòng ngừa COVID-19
          </Box>
          <Typography sx={{ marginTop: '20px', fontSize: '18px' }}>
            Đội ngũ Bác sĩ ưu tú với thâm niên trung bình 10
            <br />
            năm kinh nghiệm hiện công tác tại các Bệnh viện
            <br />
            hàng đầu Việt Nam, thăm khám trên nhiều chuyên
            <br />
            khoa đa dạng, tận tâm chăm sóc bạn cùng gia đình.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Slide
