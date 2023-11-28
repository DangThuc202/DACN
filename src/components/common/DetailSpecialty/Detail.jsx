import { Box, Stack, Typography } from '@mui/material'
import taimuihong from "../../../image/taimuihong.jpg"

const Detail = () => {
    return (
        <Box sx={{ width: "100%", height: "auto" }}>
            <img src={taimuihong} style={{ height: "500px", width: "50%", display: "block", margin: "40px auto" }} />
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "700" }}>Chuyên khoa Tai Mũi Họng</Typography>
            <Stack spacing={3} margin="50px 100px">
                <Typography sx={{ textIndent: "50px", lineHeight: "30px", fontSize: "20px" }}>
                    Chuyên khoa Cột sống, còn được gọi là Khoa Phẫu thuật cột sống hoặc Chấn thương cột sống,
                    là một chuyên ngành trong lĩnh vực Y học tập trung vào chẩn đoán,
                    điều trị và phục hồi các vấn đề liên quan đến cột sống và hệ thống liên quan như xương,
                    cơ, dây chằng, đĩa đệm, và các cấu trúc khác trong khu vực này.
                    Chuyên khoa này đóng vai trò quan trọng trong việc đảm bảo tính chức năng và
                    sức khỏe tổng thể của hệ cơ xương và cột sống của con người.",
                </Typography>
                <Typography sx={{ marginLeft: "50px", lineHeight: "30px", fontSize: "18px" }}>
                    _ Triệu chứng ho <br />
                    _ Triệu chứng ho <br />
                    _ Triệu chứng ho <br />
                    _ Triệu chứng ho <br />
                    _ Triệu chứng ho <br />
                    _ Triệu chứng ho <br />
                    _ Triệu chứng ho <br />
                    _ Triệu chứng ho <br />
                </Typography>

            </Stack>
        </Box>
    )
}

export default Detail
