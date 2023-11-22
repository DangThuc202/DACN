import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from "yup"
import UserServices from "../../services/UserServices"
import { ToastContainer, toast } from "react-toastify"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"

const Login = ({ switchAuthState }) => {
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const login = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email is not valid")
                .required("Trường này là bắt buộc"),
            password: Yup.string()
                .required("Trường này là bắt buộc"),
        }),
        onSubmit: async (values) => {
            setIsLoggingIn(true)
            setErrorMessage('')
            console.log(values)
            try {
                const result = await UserServices.loginService(values.email, values.password)
                if (result && result.accessToken) {
                    Cookies.set('accessToken', result.accessToken)
                    Cookies.set('refreshToken', result.refreshToken)
                    toast.success("Đăng nhập thành công")
                    navigate('/')
                } else {
                    setErrorMessage("Không thể nhận token từ server")
                    toast.error("Không thể nhận token từ server")
                }
            } catch (error) {
                const message = error.response ? error.response.data.message : (error.message || 'An unexpected error occurred.')
                setErrorMessage(message)
                toast.error(message)
            } finally {
                setIsLoggingIn(false)
            }
        }
    })

    return (
        <Box component="form" onSubmit={login.handleSubmit}>
            <Stack spacing={3}>
                <Typography sx={{ textAlign: "center", fontWeight: "700" }} variant="h4">
                    Login
                </Typography>
                <TextField
                    type="text"
                    placeholder="Email"
                    name="email"
                    fullWidth
                    value={login.values.email}
                    onChange={login.handleChange}
                    error={login.touched.email && Boolean(login.errors.email)}
                    helperText={login.touched.email && login.errors.email}
                />
                <TextField
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    name="password"
                    fullWidth
                    value={login.values.password}
                    onChange={login.handleChange}
                    error={login.touched.password && Boolean(login.errors.password)}
                    helperText={login.touched.password && login.errors.password}
                />
                <Button type="submit" fullWidth variant="contained" disabled={isLoggingIn}>
                    {isLoggingIn ? 'Logging in...' : 'Login'}
                </Button>
                {errorMessage && (
                    <Box sx={{ marginTop: 2 }}>
                        <Alert severity="error" variant="outlined">
                            {errorMessage}
                        </Alert>
                    </Box>
                )}
                <Button type="button" fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
                    Forget password
                </Button>
            </Stack>
            <ToastContainer />
        </Box>
    )
}

export default Login