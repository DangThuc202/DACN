import { Box, Typography, Divider, Button } from '@mui/material'
import ModalCustomer from "../ModalCustomer"
import { useState } from 'react'

const Booking = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }


    return (
        <Box sx={{
            width: "auto",
            height: "auto",
            display: 'flex',
            padding: "0 30px 30px 30px",
        }}>
            <Typography variant='h6' sx={{
                mr: "50px",
                '&:hover': {
                    color: '#1DCBB6',
                    cursor: "pointer"
                },
            }}>
                Liên hệ đặt khám <br />
                1900-12345
            </Typography>
            <Button variant='contained'
                sx={{
                    width: "70%"
                }}
                onClick={openModal}
            >
                Đặt khám ngay
            </Button>
            <ModalCustomer open={isModalOpen} handleClose={closeModal} BackdropClick={closeModal} />
        </Box>
    )
}

export default Booking
