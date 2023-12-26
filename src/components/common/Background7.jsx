import { Box, Typography, Button } from '@mui/material'
import bg7 from '../../image/bg7.svg'
import h1 from '../../image/bg7_img/h1.svg'
import h2 from '../../image/bg7_img/h2.svg'
import h3 from '../../image/bg7_img/h3.svg'
import h4 from '../../image/bg7_img/h4.svg'
import h5 from '../../image/bg7_img/h5.svg'
import h6 from '../../image/bg7_img/h6.svg'
import h7 from '../../image/bg7_img/h7.svg'

const Background7 = () => {
  const btnStyle = {
    padding: ' 20px',
    textTransform: 'none',
    fontSize: '16px',
    marginLeft: '50px',
    marginTop: '20px',
    height: '80px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transform: 'scale(1.2)'
    }
  }

  const iconStyle = {
    marginRight: '10px'
  }

  return (
    <Box sx={{ height: '35vw', display: 'flex' }}>
      <Box sx={{ position: 'absolute', left: '50%', paddingTop: '110px', zIndex: 1 }}>
        <Box>
          <Button variant="contained" sx={btnStyle}>
            <img style={iconStyle} src={h1} />
            Tim mạch
            <br />
            13 bài viết
          </Button>
          <Button variant="contained" sx={btnStyle}>
            <img style={iconStyle} src={h2} />
            Nhi khoa
            <br />
            21 bài viết
          </Button>
        </Box>
        <Box sx={{ marginLeft: '50px' }}>
          <Button variant="contained" sx={btnStyle}>
            <img style={iconStyle} src={h3} />
            Đái tháo đường
            <br />7 bài viết
          </Button>
          <Button variant="contained" sx={btnStyle}>
            <img style={iconStyle} src={h4} />
            Thận tiết niệu
            <br />
            10 bài viết
          </Button>
        </Box>
        <Box sx={{ marginLeft: '-50px' }}>
          <Button variant="contained" sx={btnStyle}>
            <img style={iconStyle} src={h5} />
            Thai sản
            <br />
            71 bài viết
          </Button>
          <Button variant="contained" sx={btnStyle}>
            <img style={iconStyle} src={h6} />
            Sức khỏe giới tính
            <br />
            12 bài viết
          </Button>
          <Button variant="contained" sx={btnStyle}>
            <img style={iconStyle} src={h7} />
            Sức khỏe phụ nữ
            <br />8 bài viết
          </Button>
        </Box>
      </Box>
      <img style={{ position: 'absolute', right: 0, height: '42vw', display: 'flex' }} src={bg7} />
      <Box sx={{ marginLeft: '100px', paddingTop: '130px' }}>
        <Typography style={{ fontWeight: 600, paddingBottom: '40px' }} variant="h2">
          Thông tin sức khỏe dành <br />
          cho bạn
        </Typography>
        <Typography style={{ fontSize: '18px' }}>
          360 độ nội dung sức khỏe thuộc các chủ đề được nhiều người quan tâm <br /> hiện nay, dưới sự xây dựng từ các
          chuyên gia sức khỏe tại Jio Health.
        </Typography>
        <Typography sx={{ fontSize: '18px', paddingTop: '30px' }}>
          Cần xem thêm nhiều bài viết chuyên khoa thú vị khác ?
          <a style={{ color: 'red' }} href="#">
            {' '}
            Blog Jio Health{' '}
          </a>
          là <br /> điểm đến về tin tức và kiến thức sức khỏe lý tưởng dành cho bạn.
        </Typography>
      </Box>
    </Box>
  )
}

export default Background7
