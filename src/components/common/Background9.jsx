import { Box, Typography } from "@mui/material"
import bg9 from "../../image/bg9_img/bg9.svg"
import s1 from "../../image/bg9_img/s1.svg"
import s2 from "../../image/bg9_img/s2.svg"
import nurse from "../../image/bg9_img/nurse.png"
import chat from "../../image/bg9_img/chat.svg"
import phone from "../../image/bg9_img/phone.svg"

const Background9 = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <img style={{ width: "100%", height: "490px" }} src={bg9} />
            <Box sx={{ position: "absolute", top: "40%", left: "20%" }}>
                <Typography variant="h4" style={{ color: "white", fontWeight: 700, marginBottom: "30px" }}>Tìm hiểu thêm về Jio Health? <br />Tải ứng dụng ngay!</Typography>
                <a href="https://apps.apple.com/vn/app/jio-health/id933157797" target="_blank">
                    <img style={{ marginRight: "30px" }} src={s1} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.jiohealth.patient" target="_blank">
                    <img src={s2} />
                </a>
            </Box>
            <Box sx={{ position: "absolute", bottom: 0, right: 0, marginRight: "320px" }}>
                <img style={{ width: "345px", height: "383.7px" }} src={nurse} />
                <img style={{ position: "absolute", left: "-15%", bottom: "67px" }} src={chat} />
                <img style={{ position: 'absolute' }} src={phone} />
            </Box>
        </Box>
    )
}

export default Background9
