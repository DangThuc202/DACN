import { Box, Typography, Button } from '@mui/material'
import explore1 from '../../image/explore1.jpg'
import PlaceIcon from '@mui/icons-material/Place'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const ExploreBackground = () => {
  const BtnStyle = {
    height: 'auto',
    width: 'auto',
    padding: '8px 30px',
    marginTop: '12px',
    color: 'white',
    textTransform: 'none',
    marginLeft: '24px',
    borderRadius: '30px',
    fontSize: '16px'
  }

  return (
    <Box
      sx={{
        width: '350px',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: '50px',
        padding: '8px',
        paddingBottom: '20px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '300px',
          backgroundImage: `url(${explore1})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: '50px'
          // position: "absolute"
        }}
      />
      <Box sx={{ paddingLeft: '14px' }}>
        <Typography variant="h5" sx={{ padding: '16px 0', fontWeight: 600 }}>
          Republic Plaza
        </Typography>

        <Typography
          sx={{
            fontSize: '18px',
            marginBottom: '12px',
            display: 'flex'
          }}
        >
          <PlaceIcon style={{ color: 'red', marginRight: '4px', fontSize: '18px' }} />
          Tầng trệt, 18E Cộng Hòa, phường 4, <br />
          Tân Bình, TP.HCM
        </Typography>

        <Typography
          sx={{
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <AccessTimeIcon style={{ color: 'green', marginRight: '4px', fontSize: '18px' }} />
          07:00 - 20:00 hằng ngày
        </Typography>

        <Button
          variant="contained"
          style={BtnStyle}
          sx={{
            backgroundColor: 'blue',
            '&:hover': {
              backgroundColor: 'blue',
              opacity: '0.7',
              color: 'white'
            }
          }}
        >
          Gọi ngay
        </Button>

        <Button
          variant="contained"
          style={BtnStyle}
          sx={{
            backgroundColor: '#00CC66',
            '&:hover': {
              backgroundColor: '#00CC66',
              opacity: '0.7',
              color: 'white'
            }
          }}
        >
          Đặt khám
        </Button>
      </Box>
    </Box>
  )
}

export default ExploreBackground
