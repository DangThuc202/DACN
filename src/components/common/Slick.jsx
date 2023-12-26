import { Box, Button, Typography, Chip } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useRef, useEffect } from 'react'
import banner01 from '../../image/banner01.jpg'
import banner02 from '../../image/banner02.jpg'
import banner03 from '../../image/banner03.jpg'
import banner04 from '../../image/banner04.jpg'
import banner05 from '../../image/banner05.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import heartIcon from '../../image/heartIcon.svg'
import bannerClinicIcon from '../../image/bannerClinicIcon.svg'
import bg1 from '../../image/bg1.svg'
import ModalCustomer from './ModalCustomer'
import { useState } from 'react'

const Slick = () => {
  const nextSlide = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide.current.slickNext()
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleClickNext = () => {
    nextSlide.current.slickNext()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const ImgSide = {
    width: '1180px',
    height: '680px',
    borderRadius: '40px'
  }

  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Box>
      <img style={{ position: 'absolute', width: '100%' }} src={bg1} />
      <Box
        sx={{
          paddingLeft: '250px',
          borderRadius: '40px'
        }}
      >
        <Slider ref={nextSlide} style={{ width: '90%' }} {...settings}>
          <div>
            <img style={ImgSide} src={banner01} />
          </div>
          <div>
            <img style={ImgSide} src={banner02} />
          </div>
          <div>
            <img style={ImgSide} src={banner03} />
          </div>
          <div>
            <img style={ImgSide} src={banner04} />
          </div>
          <div>
            <img style={ImgSide} src={banner05} />
          </div>
        </Slider>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            position: 'absolute',
            right: 0,
            top: '50%',
            marginRight: '170px',
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            color: 'red',
            '&:hover': {
              backgroundColor: '#d6e7e7'
            }
          }}
          onClick={() => handleClickNext()}
        >
          <ChevronRightIcon />
        </Button>

        <img src={heartIcon} alt="" style={{ position: 'absolute', top: '45%', zIndex: 10, left: '13%' }} />

        <Box
          sx={{
            width: 'auto',
            height: 'auto',
            padding: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            position: 'absolute',
            top: '50%',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px'
          }}
        >
          <Typography sx={{ fontSize: '36px', color: 'purple', fontWeight: 600 }}>
            Hơn 300,000 <br /> khách hàng tin tưởng <br /> sử dụng dịch vụ
          </Typography>
          <Chip
            sx={{
              background: 'linear-gradient(to right, #3300C4, #D68397 )',
              color: 'white',
              padding: '30px 60px',
              fontSize: '20px',
              borderRadius: '50px',
              marginTop: '12px',
              fontWeight: '600',
              boxShadow: '0 8px 8px rgba(0, 0, 0, 0.7)',
              '&:hover': {
                opacity: '0.7'
              }
            }}
            onClick={openModal}
            label="Đặt Hẹn Khám"
          />
          <ModalCustomer open={isModalOpen} handleClose={closeModal} BackdropClick={closeModal} />
        </Box>

        <img src={bannerClinicIcon} style={{ position: 'absolute', top: '80%', zIndex: 10, left: '37%' }} />
      </Box>
    </Box>
  )
}

export default Slick
