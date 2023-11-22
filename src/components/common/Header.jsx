import { Box, Button, Stack, Typography } from "@mui/material"
import logo from "../../image/logo.svg"
import { styled } from '@mui/material/styles'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import HomeIcon from '@mui/icons-material/Home'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import ModalCustomer2 from "./ModalCustomer2"
import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import Bell from "./Bell"

const Header = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedInUser")
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setIsLoggedIn(true)
            setUserName(foundUser.name)
        }
    }, [])
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser")
        setIsLoggedIn(false)
        setUserName('')
    }
    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const [isTop, setIsTop] = useState(false)

    const handleScroll = () => {
        const scrollTop = window.pageYOffset

        // Kiểm tra vị trí cuộn của trang và cập nhật trạng thái isTop
        if (scrollTop > 0) {
            setIsTop(false)
        } else {
            setIsTop(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const MidButton = styled(Button)({
        textTransform: 'none',
        fontSize: "16px",
        borderRadius: "100px",
        padding: "8px",
        '&:hover': {
            backgroundColor: '#00FFFF',
            borderRadius: "100px"
        },
    })

    const RightButton = styled(Button)({
        marginLeft: "20px",
        padding: "10px 20px",
        borderRadius: "100px",
        color: "white",
        textTransform: 'none',
        '&:hover': {
            backgroundColor: "red",
            opacity: "0.4"
        },
    })

    const IconStyle = {
        marginRight: "4px",
        marginBottom: "4px"
    }


    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: "white",
                height: "50px",
                zIndex: 1,
                padding: "15px",
                alignItems: "center",
                top: isTop ? '' : "0",

            }}
        >
            <img style={{ padding: "25px", zIndex: 100 }} src={logo} />
            <Stack direction="row" spacing={2} sx={{ marginLeft: "10px" }}>
                <Link to="/" onClick={() => navigate('/')}>
                    <MidButton variant="text"> <HomeIcon style={IconStyle} />
                        Trang Chủ
                    </MidButton>
                </Link>
                <MidButton variant="text" > <MedicalServicesIcon style={IconStyle} />
                    Các Dịch Vụ
                </MidButton>
                <a href="https://pharmacy.jiohealth.com/" target="_blank">
                    <MidButton variant="text" > <HealthAndSafetyIcon style={IconStyle} />
                        Nhà Thuốc Jio
                    </MidButton>
                </a>
                <Link to="/chuyenkhoa" onClick={() => navigate('/chuyenkhoa')}>
                    <MidButton variant="text" > <MedicalInformationIcon style={IconStyle} />
                        Chuyên khoa
                    </MidButton>
                </Link>
                <Link to="/doingubacsi" onClick={() => navigate('/doingubacsi')}>
                    <MidButton variant="text"> <PeopleAltIcon style={IconStyle} />
                        Đội Ngũ Bác Sĩ
                    </MidButton>
                </Link>
                <MidButton variant="text" > <NewspaperIcon style={IconStyle} />
                    Tin Tức
                </MidButton>
                <Bell />
            </Stack>
            <RightButton onClick={openModal} variant="contained" sx={{ backgroundColor: "#1DCBB6" }}>Tư Vấn Sức Khỏe Ngay</RightButton>
            <ModalCustomer2 open={isModalOpen} handleClose={closeModal} BackdropClick={closeModal} />
            <RightButton variant="contained" sx={{ backgroundColor: "#2320D4" }} >Tải Ứng Dụng Ngay</RightButton>
            {
                isLoggedIn && (
                    <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1">
                            Xin chào, {userName}
                        </Typography>
                        <Button onClick={handleLogout} variant="outlined">
                            Đăng Xuất
                        </Button>
                        <h1>csacasc</h1>
                    </Stack>
                )
            }
        </Box>

    )


}

export default Header
