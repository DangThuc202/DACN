import { Box, Button, Stack } from "@mui/material"
import logo from "../../image/logo.svg"
import { styled } from '@mui/material/styles';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HomeIcon from '@mui/icons-material/Home';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Header = () => {

    const MidButton = styled(Button)({
        textTransform: 'none',
        fontSize: "16px",
        borderRadius: "100px",
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
                position: "relative",
                backgroundColor: "white",
                height: "50px",
                zIndex: 10,
                padding: "15px",
                alignItems: "center"


            }}
        >
            <img style={{ padding: "25px" }} src={logo} />
            <Stack direction="row" spacing={2} sx={{ marginLeft: "10px" }}>
                <MidButton variant="text" sx={{ backgroundColor: "#00FFFF" }}> <HomeIcon style={IconStyle} />
                    Trang Chủ
                </MidButton>
                <MidButton variant="text" > <MedicalServicesIcon style={IconStyle} />
                    Các Dịch Vụ
                </MidButton>
                <MidButton variant="text" > <HealthAndSafetyIcon style={IconStyle} />
                    Nhà Thuốc Jio
                </MidButton>
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
            <RightButton variant="contained" sx={{ backgroundColor: "#1DCBB6" }}>Đặt Hẹn Khám Ngay</RightButton>
            <RightButton variant="contained" sx={{ backgroundColor: "#2320D4" }} >Tải Ứng Dụng Ngay</RightButton>

        </Box>
    )


}

export default Header
