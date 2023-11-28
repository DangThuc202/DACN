import { Box, Typography } from '@mui/material'
import vatlitrilieu from "../../../image/vatlitrilieu.webp"

const Body = () => {

    const itemStyle = {
        width: "150px",
        padding: "5px",
        textAlign: "center",
        textTransform: "none",
        transition: 'transform 0.3s ease',
        lineHeight: "24px",
        '&:hover': {
            transform: 'scale(1.2)',
            cursor: "pointer",
        },
    }

    return (
        <Box style={{ margin: "50px 100px", }}>
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "700", }}>Thông tin các Chuyên khoa của chúng tôi</Typography>
            <Box sx={{ padding: " 50px 30px", display: "flex", flexWrap: "wrap", gap: "70px", justifyContent: "center" }}>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
                <Box sx={itemStyle}>
                    <img src={vatlitrilieu} style={{ width: "64px", height: "64px" }} />
                    <Typography>Vật lý trị liệu</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Body
