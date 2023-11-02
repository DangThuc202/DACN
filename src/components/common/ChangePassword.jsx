import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
// import userApi from "../../api/modules/user.api";
// import { setAuthModalOpen } from "../../redux/feartures/authModalSlice";
// import { setUser } from "../../redux/feartures/userSlice";

const ChangePassword = ({ switchAuthState }) => {
    const dispatch = useDispatch();

    const [isLoginRequest, setIsLoginRequest] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const changePassword = useFormik({
        initialValues: {
            password: "",
            username: "",
            newPassword: "",
            confirmNewPassword: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(0, "Tên đăng nhập không được để trống")
                .required("Trường này là bắt buộc"),
            password: Yup.string()
                .min(0, "Password không được để trống")
                .required("Trường này là bắt buộc"),
            newPassword: Yup.string()
                .min(0, "Password không được để trống")
                .required("Trường này là bắt buộc"),
            confirmNewPassword: Yup.string()
                .oneOf([Yup.ref("newPassword")], "Xác nhận mật khẩu không trùng khớp")
                .min(0, "Password không được để trống")
                .required("Trường này là bắt buộc"),
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <Box component="form" onSubmit={changePassword.handleSubmit}>
            <Stack spacing={3}>
                <Typography sx={{
                    textAlign: "center",
                    fontWeight: "700"
                }}
                    variant="h4"
                >
                    Đổi mật khẩu
                </Typography>
                <TextField
                    type="text"
                    placeholder="Tên đăng nhập"
                    name="username"
                    fullWidth
                    value={changePassword.values.username}
                    onChange={changePassword.handleChange}
                    error={
                        changePassword.touched.username &&
                        changePassword.errors.username !== undefined
                    }
                    helperText={changePassword.touched.username && changePassword.errors.username}
                />
                <TextField
                    type="password"
                    placeholder="Mật khẩu cũ"
                    name="password"
                    fullWidth
                    value={changePassword.values.password}
                    onChange={changePassword.handleChange}
                    color="success"
                    error={
                        changePassword.touched.password &&
                        changePassword.errors.password !== undefined
                    }
                    helperText={changePassword.touched.password && changePassword.errors.password}
                />
                <TextField
                    type="password"
                    placeholder="Mật khẩu mới"
                    name="newPassword"
                    fullWidth
                    value={changePassword.values.newPassword}
                    onChange={changePassword.handleChange}
                    error={
                        changePassword.touched.newPassword &&
                        changePassword.errors.newPassword !== undefined
                    }
                    helperText={changePassword.touched.newPassword && changePassword.errors.newPassword}
                />
                <TextField
                    type="password"
                    placeholder="Xác nhận mật khẩu mới"
                    name="confirmNewPassword"
                    fullWidth
                    value={changePassword.values.confirmNewPassword}
                    onChange={changePassword.handleChange}
                    error={
                        changePassword.touched.confirmNewPassword &&
                        changePassword.errors.confirmNewPassword !== undefined
                    }
                    helperText={changePassword.touched.confirmNewPassword && changePassword.errors.confirmNewPassword}
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
                Đổi mật khẩu
            </Button>
            <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
                Đăng nhập
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

export default ChangePassword;
