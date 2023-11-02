import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
// import userApi from "../../api/modules/user.api";
// import { setAuthModalOpen } from "../../redux/feartures/authModalSlice";
// import { setUser } from "../../redux/feartures/userSlice";

const Login = ({ switchAuthState }) => {
    const dispatch = useDispatch();

    const [isLoginRequest, setIsLoginRequest] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const login = useFormik({
        initialValues: {
            password: "",
            username: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(0, "Tên đăng nhập không được để trống")
                .required("Trường này là bắt buộc"),
            password: Yup.string()
                .min(0, "Mật khẩu không được để trống")
                .required("Trường này là bắt buộc"),
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <Box component="form" onSubmit={login.handleSubmit}>
            <Stack spacing={3}>
                <Typography sx={{
                    textAlign: "center",
                    fontWeight: "700"
                }}
                    variant="h4"
                >
                    Đăng nhập
                </Typography>
                <TextField
                    type="text"
                    placeholder="Tên đăng nhập"
                    name="username"
                    fullWidth
                    value={login.values.username}
                    onChange={login.handleChange}
                    error={
                        login.touched.username &&
                        login.errors.username !== undefined
                    }
                    helperText={login.touched.username && login.errors.username}
                />
                <TextField
                    type="password"
                    placeholder="Mật khẩu"
                    name="password"
                    fullWidth
                    value={login.values.password}
                    onChange={login.handleChange}
                    error={
                        login.touched.password &&
                        login.errors.password !== undefined
                    }
                    helperText={login.touched.password && login.errors.password}
                />
            </Stack>
            <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{ marginTop: 4 }}
                loading={isLoginRequest}
            >
                Đăng nhập
            </Button>
            <Button type="submit" fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
                Đổi mật khẩu
            </Button>

            {errorMessage && (
                <Box sx={{ marginTop: 2 }}>
                    <Alert severity="error" variant="outlined">
                        {errorMessage}
                    </Alert>
                </Box>
            )}
        </Box>
    );
};

export default Login;
