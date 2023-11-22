import { Box, Stack, Typography } from "@mui/material"

const Introduce = () => {
    return (
        <Stack padding={4} sx={{ width: "auto", height: 'auto' }} spacing={3} >
            <Typography variant="h6" fontWeight={700}>Giới thiệu</Typography>
            <Typography fontSize={18}>
                Bác sĩ chuyên khoa
                <span style={{ color: "red" }}> Đặng Hoàng Thức </span>
                đã có hơn <span style={{ color: "red" }}>23</span>  năm kinh nghiệm trong lĩnh vực Tiêu hóa.
            </Typography>
            <Typography fontSize={18}>
                Là một bác sĩ giỏi, có bề dày kinh nghiệm cũng như chuyên môn cao,
                PGS.TS.BS Lâm Việt Trung hiện là Trưởng khoa Ngoại tiêu hóa -
                Bệnh viện Chợ Rẫy và hiện đang giữ chức vụ Phó Giám Đốc Bệnh Viện Chợ Rẫy.
                Là một bác sĩ giỏi, có bề dày kinh nghiệm cũng như chuyên môn cao,
                PGS.TS.BS Lâm Việt Trung hiện là Trưởng khoa Ngoại tiêu hóa -
                Bệnh viện Chợ Rẫy và hiện đang giữ chức vụ Phó Giám Đốc Bệnh Viện Chợ Rẫy.
            </Typography>
        </Stack >
    )
}

export default Introduce
