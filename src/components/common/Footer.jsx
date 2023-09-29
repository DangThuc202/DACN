import { Box, Typography, Stack, Divider } from "@mui/material"
import logo_footer from "../../image/logo_footer.svg"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import last from "../../image/last.png"

const Footer = () => {

    const styleTypo = {
        color: "#ffffffb8",
        '&:hover': {
            color: "#4de695",
            cursor: "pointer"
        }
    }




    return (
        <Box sx={{ backgroundColor: "#242a61", color: "white", padding: "85px 150px" }}>
            <img src={logo_footer} />
            <Box sx={{ marginTop: "30px", display: "flex" }}>
                <Box sx={{ width: "470px", marginRight: "60px" }}>
                    <Stack spacing={1}>
                        <Typography sx={{ display: "flex" }}>
                            Hotline <Typography sx={styleTypo}>&nbsp; 1900123456789</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            Hỗ trợ <Typography sx={styleTypo}>&nbsp; support@jiohealth.com</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            Copyright © 2017-2023 Rai and Rohl Technologies, Inc. All rights reserved.
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ padding: "0 30px" }}>
                    <Stack spacing={1}>
                        <Typography sx={{ display: "flex", fontWeight: "700" }}>
                            Dịch vụ
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Hẹn Bác Sĩ, Điều Dưỡng<br /> Đến Nhà</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Nhà Thuốc Trực Tuyến Jio</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Jio Prime</Typography>
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ padding: "0 30px" }}>
                    <Stack spacing={1}>
                        <Typography sx={{ display: "flex", fontWeight: "700" }}>
                            Tìm hiểu thêm
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Đội ngũ bác sĩ</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Dịch vụ thăm khám</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Dành cho báo chí</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Vị trí tuyển dụng</Typography>
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ padding: "0 30px" }}>
                    <Stack spacing={1}>
                        <Typography sx={{ display: "flex", fontWeight: "700" }}>
                            Hỗ trợ khách hàng
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Câu hỏi thường gặp</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Chính sách bảo mật</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Chính sách hoạt động</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Typography sx={styleTypo}>Liên hệ</Typography>
                        </Typography>
                        <Typography sx={{ display: "flex", marginBottom: "20px" }}>
                            <Typography style={{ marginBottom: "30px" }} sx={styleTypo}>Chính sách giải quyết khiếu nại</Typography>
                        </Typography>
                    </Stack>
                </Box>
            </Box>
            <Divider color="white" />
            <Box sx={{ marginTop: "30px", display: "flex" }}>
                <Box sx={{ width: "470px", marginRight: "60px" }}>
                    <Stack spacing={1}>
                        <Typography sx={{ display: "flex" }}>
                            CÔNG TY TNHH PHÒNG KHÁM ĐA KHOA JIO HEALTH
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            Giấy CN ĐKDN số 0309145924, đăng ký lần đầu ngày 06/07/2009, đăng ký thay đổi lần thứ 9 ngày 06/07/2023, cấp bởi Sở KH&ĐT Thành phố Hồ Chí Minh.
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ padding: "0 30px" }}>
                    <Stack spacing={1}>
                        <Typography sx={{ display: "flex", fontWeight: "700" }}>
                            Địa chỉ
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            Phòng khám Đa khoa Cao cấp Jio Health - Jio Smart <br />Clinic
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            39 Lê Duẩn, Phường Bến Nghé, Quận 1, TP.HCM
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            Hãy theo dõi Jio Health tại
                        </Typography>
                        <Stack direction="row" spacing={3} style={{ marginLeft: "70px", cursor: "pointer" }}>
                            <FacebookOutlinedIcon style={{ fontSize: "50px" }} />
                            <InstagramIcon style={{ fontSize: "50px" }} />
                        </Stack>
                    </Stack>
                </Box>
                <Box sx={{ padding: "0 30px" }}>
                    <img src={last} />
                </Box>

            </Box>
        </Box >
    )
}

export default Footer
