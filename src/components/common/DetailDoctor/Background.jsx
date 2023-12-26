import { Box } from '@mui/material'
import Doctor from './Doctor'
import Booking from './Booking'
import Introduce from './Introduce'
import Time from './Time'

const Background = () => {
  return (
    <Box
      sx={{
        width: 'auto',
        minHeight: '1300px',
        backgroundColor: 'rgb(241 245 249)',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          top: '50px',
          left: '50%',
          transform: 'translate(-50%, 0)',
          minWidth: '850px',
          height: 'auto',
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: '20px'
        }}
      >
        <Doctor />
        <Time />
        <Introduce />
        <Booking />
      </Box>
    </Box>
  )
}

export default Background
