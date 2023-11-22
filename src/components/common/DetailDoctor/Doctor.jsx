import { Box, Avatar, Typography, Stack } from "@mui/material"
import test from "../../../image/test.jpg"
import ReportIcon from '@mui/icons-material/Report';

const Doctor = () => {
    return (
        <Box>
            <Box sx={{
                padding: "10px",
                display: "flex"
            }}>
                <Avatar src={test} style={{ height: "150px", width: "150px", marginRight: "50px" }} />
                <Stack spacing={2} mt={2}>
                    <Box>
                        <Typography variant="h5" fontWeight="700">Bác sĩ, Đặng Hoàng Thức </Typography>
                        <Typography fontWeight="700" ml={3}>Với <span style={{ color: "red" }}>23</span> năm kinh nghiệm </Typography>
                    </Box>
                    <Box display="flex">
                        <Box>
                            <Typography fontWeight="700" color="#949494">Chuyên khoa </Typography>
                            <Typography fontWeight="700" color="#949494">Chức vụ </Typography>
                            <Typography fontWeight="700" color="#949494">Công tác </Typography>
                        </Box>
                        <Box ml={2}>
                            <Typography fontWeight="700" color="blue">Cơ xương khớp </Typography>
                            <Typography fontWeight="700" color="blue">Bác sĩ chuyên khoa </Typography>
                            <Typography fontWeight="700" color="blue">Bệnh viện ABC </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ backgroundColor: "rgb(255 247 237)", padding: "20px" }}>
                <Box display="flex" mb={1}>
                    <ReportIcon />
                    <Typography ml={1}>Lưu ý</Typography>
                </Box>
                <Typography>
                    * Nếu bệnh nhân bận việc không đến khám được vui
                    lòng hủy lịch khám đã đặt và đặt lại ngày khác. Xin cảm ơn!
                </Typography>
            </Box>
        </Box>
    )
}

export default Doctor
