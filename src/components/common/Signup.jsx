import { Box, Typography, TextField, Stack, Button } from "@mui/material"
import bg1 from "../../image/bg1.svg"


const Signup = () => {

    const boxStyle = {
        width: "350px",
        height: "400px",
        backgroundColor: "#7de1e2",
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        padding: "30px",
        color: "white",
        borderRadius: "20px"
    }


    return (
        <Box sx={{ position: "relative", height: "100%" }}>
            <img style={{ width: "100%" }} height="800px" src={bg1} />
            <Box sx={boxStyle}>
                <Typography variant="h4" sx={{
                    display: "flex",
                    justifyContent: 'center',
                    fontWeight: "700",
                    marginBottom: "50px"
                }}>
                    Đăng Ký
                </Typography>
                <Stack spacing={3}>
                    <TextField style={{ width: "100%" }} name="username" label="Tên đăng nhập" variant="filled" />
                    <TextField sx={{ width: "100%" }} name="password" label="Mật khẩu" variant="filled" />
                    <TextField sx={{ width: "100%" }} name="password" label="Xác nhận lại mật khẩu" variant="filled" />
                </Stack>
                <Button variant="contained" sx={{
                    width: "100%",
                    marginTop: "30px",
                    padding: "10px",
                    fontSize: "16px",
                    marginBottom: "20px"
                }}>
                    Đăng ký
                </Button>
            </Box>
        </Box>
    )
}

export default Signup
