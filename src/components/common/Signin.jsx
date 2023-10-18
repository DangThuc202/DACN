import { Box, Typography, TextField, Stack, Button } from "@mui/material"
import bg1 from "../../image/bg1.svg"
import { useState } from "react"
import * as Yup from "yup";
import { useFormik } from "formik";

const Signin = () => {

    const [isLoginRequest, setIsLoginRequest] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const signinForm = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(0, "Tên đăng nhập không được để trống")
                .required("Trường này là bắt buộc"),
            password: Yup.string()
                .min(0, "Password không được để trống")
                .required("Trường này là bắt buộc"),
        }),
    });

    const boxStyle = {
        width: "350px",
        height: "350px",
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

    const handleOnchangeUsername = (e) => {
        alert("abc")
    }

    const click = () => {
        alert("abc")
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
                    Đăng Nhập
                </Typography>
                <Stack spacing={3}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        label="Tên đăng nhập"
                        name="username"
                        value={signinForm.values.username}
                        onChange={signinForm.handleChange}
                        error={
                            signinForm.touched.username &&
                            signinForm.errors.username !== undefined
                        }
                        helperText={signinForm.touched.username && signinForm.errors.username}

                    />
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        label="Mật khẩu"
                        name="password"
                        value={signinForm.values.password}
                        onChange={signinForm.handleChange}
                        error={
                            signinForm.touched.password &&
                            signinForm.errors.password !== undefined
                        }
                        helperText={signinForm.touched.password && signinForm.errors.password}

                    />
                </Stack>
                <Button variant="contained" sx={{
                    width: "100%",
                    marginTop: "30px",
                    padding: "10px",
                    fontSize: "16px",
                    marginBottom: "20px"
                }}
                    onClick={() => click()}
                >
                    Đăng nhập
                </Button>
                <a style={{ fontSize: "18px", display: "flex", justifyContent: "right" }} href="/register">Đăng ký ngay</a>
            </Box>
        </Box>
    )
}

export default Signin
