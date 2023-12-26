import bg2 from '../../image/bg2.svg'
import { Box, Typography, Stack, Slide } from '@mui/material'
import ExploreBg2_1 from './ExploreBg2_1'
import ExploreBg2_2 from './ExploreBg2_2'
import ExploreBg2_3 from './ExploreBg2_3'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Background2 = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <img alt="" style={{ width: '100%', height: '850px', position: 'relative' }} src={bg2} />
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          paddingLeft: '250px'
        }}
      >
        <Typography
          sx={{
            fontSize: '42px',
            fontWeight: '500',
            color: '#3300C4',
            marginBottom: '18px'
          }}
        >
          Khám phá các phòng khám
        </Typography>
        <Stack direction="row" spacing={3}>
          <Box><ExploreBg2_1 /></Box>
          <Box><ExploreBg2_2 /></Box>
          <Box><ExploreBg2_3 /></Box>
        </Stack>

      </Box >
    </Box >
  )
}

export default Background2
