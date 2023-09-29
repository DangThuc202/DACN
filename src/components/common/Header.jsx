import { Box, Button, Stack } from "@mui/material"
import logo from "../../image/logo.svg"
import { styled } from '@mui/material/styles';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HomeIcon from '@mui/icons-material/Home';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ModalCustomer from "./ModalCustomer";
import { useState, useEffect } from "react";

const Header = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [isTop, setIsTop] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        // Kiểm tra vị trí cuộn của trang và cập nhật trạng thái isTop
        if (scrollTop > 0) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const MidButton = styled(Button)({
        textTransform: 'none',
        fontSize: "16px",
        borderRadius: "100px",
        padding: "8px",
        '&:hover': {
            backgroundColor: '#00FFFF',
            borderRadius: "100px"
        },
    });

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
                <MidButton variant="text" sx={{ backgroundColor: "#00FFFF" }}> <HomeIcon style={IconStyle} />
                    Trang Chủ
                </MidButton>
                <MidButton variant="text" > <MedicalServicesIcon style={IconStyle} />
                    Các Dịch Vụ
                </MidButton>
                <a href="https://pharmacy.jiohealth.com/" target="_blank">
                    <MidButton variant="text" > <HealthAndSafetyIcon style={IconStyle} />
                        Nhà Thuốc Jio
                    </MidButton>
                </a>
                <MidButton variant="text" > <MedicalInformationIcon style={IconStyle} />
                    Gói Dịch Vụ
                </MidButton>
                <MidButton variant="text" > <PeopleAltIcon style={IconStyle} />
                    Đội Ngũ Bác Sĩ
                </MidButton>
                <MidButton variant="text" > <NewspaperIcon style={IconStyle} />
                    Tin Tức
                </MidButton>
                <Button variant="text" >Tin Tức</Button>
            </Stack>
            <RightButton onClick={openModal} variant="contained" sx={{ backgroundColor: "#1DCBB6" }}>Đặt Hẹn Khám Ngay</RightButton>
            <ModalCustomer open={isModalOpen} handleClose={closeModal} BackdropClick={closeModal} />
            <RightButton variant="contained" sx={{ backgroundColor: "#2320D4" }} >Tải Ứng Dụng Ngay</RightButton>
        </Box>

    )


}

export default Header
