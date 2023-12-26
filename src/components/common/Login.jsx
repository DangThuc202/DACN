import { Alert, Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import UserServices from '../../services/UserServices'
import { ToastContainer, toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import GoogleIcon from '@mui/icons-material/Google'
import axios from 'axios'
const Login = ({ switchAuthState }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    console.log(showPassword)
    setShowPassword(!showPassword)
  }
  const handleGoogleLogin = async () => {
    try {
      const googleToken = '845159881702-5qqakik71b1iajk32a7425ojahb9jcid.apps.googleusercontent.com' // Get the Google token from the Google login API
      const apiResponse = await axios.post('http://localhost:3001/api/auth-google', {
        token: googleToken // Send the Google token to your backend server
      })
      if (apiResponse.data.success) {
        console.log('Login successful')
      } else {
        console.log('Login failed')
      }
    } catch (error) {
      const message = error.response ? error.response.data.message : error.message || 'An unexpected error occurred.'
      toast.error(message)
    }
  }
  const login = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email is not valid').required('Require email to login'),
      password: Yup.string().required('Require password to login')
    }),
    onSubmit: async (values) => {
      setIsLoggingIn(true)
      setErrorMessage('')
      try {
        const result = await UserServices.loginService(values.email, values.password)
        if (result && result.accessToken) {
          Cookies.set('accessToken', result.accessToken)
          toast.success('Đăng nhập thành công')
          navigate('/')
        } else {
          setErrorMessage('Không thể nhận token từ server')
          toast.error('Không thể nhận token từ server')
        }
      } catch (error) {
        const message = error.response ? error.response.data.message : error.message || 'An unexpected error occurred.'
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
        <Typography sx={{ textAlign: 'center', fontWeight: '700' }} variant="h4">
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
          type={showPassword ? 'text' : 'password'}
          placeholder="Mật khẩu"
          name="password"
          fullWidth
          value={login.values.password}
          onChange={login.handleChange}
          error={login.touched.password && Boolean(login.errors.password)}
          helperText={login.touched.password && login.errors.password}
          InputProps={{
            endAdornment: (
              <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )
          }}
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
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2, bgcolor: 'error.main' }}
          onClick={() => handleGoogleLogin()}
          startIcon={<GoogleIcon />}
          disabled={isLoggingIn}
        >
          Login with Google
        </Button>
        <Button type="button" fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
          Forget password
        </Button>
        <Link to="/">
          <Button type="button" fullWidth sx={{ marginTop: 1 }}>
            Back to Home
          </Button>
        </Link>
      </Stack>
      <ToastContainer />
    </Box>
  )
}

export default Login
