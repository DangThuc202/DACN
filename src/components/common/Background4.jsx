import { Box, Stack, Typography } from "@mui/material"
import bg4 from "../../image/bg4.svg"
import h1 from "../../image/bank_img/h1.png"


const Background4 = () => {

    return (
        <Box sx={{ position: "relative", color: "white" }}>
            <img style={{ width: "100%", position: "relative", height: "900px" }} src={bg4} />
            <Box sx={{ position: "absolute", top: "12%", left: "10%", right: "10%" }}>
                <Typography variant="h4" sx={{ fontWeight: "600" }}>Bão lãnh viện phí trực tiếp</Typography>
                <Typography sx={{ fontSize: "20px", marginTop: '50px' }}>Jio Health hiện đang liên kết với 40+ doanh nghiệp bảo hiểm lớn và uy tín nhằm mang đến cho khách hàng dịch vụ chăm sóc sức khỏe chất lượng với chi phí hợp lý.</Typography>
                <img src={h1} style={{ width: "95%", position: "absolute", display: "flex" }} />
            </Box>
        </Box>
    )
}

export default Background4
