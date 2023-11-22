import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import UserServices from "../../services/UserServices"

const Login = ({ switchAuthState }) => {
    const dispatch = useDispatch()

    const [isLoginRequest, setIsLoginRequest] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const login = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .min(0, "Email is required")
                .required("Trường này là bắt buộc"),
            password: Yup.string()
                .min(0, "Mật khẩu không được để trống")
                .required("Trường này là bắt buộc"),
        }),
        onSubmit: values => {
            console.log(values)
        }
    })
    const handleLogin = async (event) => {
        event.preventDefault()
        setIsLoggingIn(true)
        setErrorMessage('')
        try {
            const result = await UserServices.loginService(username, password)
            console.log(result)
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage(error.message || 'An unexpected error occurred.')
            }
        } finally {
            setIsLoggingIn(false)
        }
    }
    return (
        <Box component="form" onSubmit={login.handleSubmit}>
            <Stack spacing={3}>
                <Typography sx={{
                    textAlign: "center",
                    fontWeight: "700"
                }}
                    variant="h4"
                >
                    Login
                </Typography>
                <TextField
                    type="text"
                    placeholder="Email"
                    name="email"
                    fullWidth
                    value={login.values.email}
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
                variant="contained"
                disabled={isLoggingIn}
            >
                {isLoggingIn ? 'Logging in...' : 'Login'}
            </Button>
            {errorMessage && (
                <Alert severity="error">{errorMessage}</Alert>
            )}
            <Button type="submit" fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
                Forget password
            </Button>

            {errorMessage && (
                <Box sx={{ marginTop: 2 }}>
                    <Alert severity="error" variant="outlined">
                        {errorMessage}
                    </Alert>
                </Box>
            )}
        </Box>
    )
}

export default Login
