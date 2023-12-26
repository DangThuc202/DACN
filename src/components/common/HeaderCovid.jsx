import { Box, Typography, Button } from '@mui/material'
import blue from '../../image/blue.svg'
import red from '../../image/red.svg'

const HeaderCovid = () => {
  return (
    <Box
      sx={{
        height: '80px',
        backgroundColor: '#111c63',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
      }}
    >
      <img
        src={blue}
        alt="My Image"
        style={{
          position: 'absolute',
          top: '20px',
          marginLeft: '200px',
          width: '105px'
        }}
      />

      <img
        src={red}
        alt="My Image"
        style={{
          position: 'absolute',
          left: '20%',
          width: '80px',
          marginBottom: '50px'
        }}
      />

      <Typography variant="h2" color="white" marginTop="6px" fontWeight={700} zIndex={10} fontSize="35px">
        Cập nhật mới nhất về COVID-19
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: 'white',
          color: '#111C63',
          fontWeight: 600,
          width: '200px',
          borderRadius: '100px',
          fontSize: '20px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#ffffffb5'
          }
        }}
      >
        Tìm Hiểu Thêm
      </Button>

      <img
        src={red}
        alt="My Image"
        style={{
          position: 'absolute',
          right: '11%',
          width: '120px',
          marginTop: '60px'
        }}
      />

      <img
        src={blue}
        alt="My Image"
        style={{
          position: 'absolute',
          right: 0,
          width: '170px',
          marginBottom: '100px',
          marginRight: '24px'
        }}
      />
    </Box>
  )
}

export default HeaderCovid
