import { Box, Typography } from '@mui/material'
import bg6 from '../../image/bg6.png'
import camera from '../../image/camera.svg'
import chat from '../../image/chat.svg'

const Background6 = () => {
  return (
    <Box sx={{ height: '50vw', display: 'flex' }}>
      <img style={{ width: '85vw' }} src={bg6} />
      <Box sx={{ position: 'absolute', right: 0, marginRight: '40px', marginTop: '150px' }}>
        <Typography variant="h3" style={{ fontWeight: 500, marginBottom: '40px' }}>
          Tư vấn sức khỏe từ xa 24/7 <br /> qua video & chat
        </Typography>
        <Typography sx={{ fontSize: '18px' }}>
          Bạn cần sự tư vấn chuyên môn khi gặp các vấn đề sức khỏe? Dù bạn ở <br /> đâu hay vào bất cứ lúc nào, các bác
          sĩ chuyên khoa của Jio Health luôn <br /> sẵn sàng tư vấn, giải đáp đáp mọi thắc mắc của bạn.
        </Typography>
        <Box sx={{ display: 'flex', marginTop: '30px' }}>
          <img style={{ paddingRight: '10px' }} src={camera} />
          <Typography style={{ fontWeight: 600 }}>Video call với bác sĩ</Typography>
          <img style={{ paddingRight: '10px', marginLeft: '50px' }} src={chat} />
          <Typography style={{ fontWeight: 600 }}>Chat với bác sĩ</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Background6
