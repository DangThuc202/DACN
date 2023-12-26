import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio
} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import userService from '../../services/UserServices'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    gender: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const validate = (formValues) => {
    let errors = {}
    if (!formData.firstName) {
      errors.firstName = 'First name is required'
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required'
    }
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone is required'
    }
    if (!formData.address) {
      errors.address = 'Address is required'
    }
    return errors
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    try {
      if (Object.keys(validationErrors).length === 0) {
        const result = await userService.registerService(formData)
        if (result) {
          toast.success('Register succesfully', { autoClose: 3000 })
          setTimeout(() => navigate('/'), 3000)
        }
      } else {
        toast.error('Please input all fields', { autoClose: 3000 })
      }
    } catch (error) {
      console.error('Error registering user:', error)
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error('An unexpected error occurred.')
      }
    }
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ padding: '20px', width: '400px' }}>
        <Typography variant="h4" textAlign="center" mb={5}>
          ĐĂNG KÝ TÀI KHOẢN
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
            <TextField
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Phone"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
            <TextField
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              error={!!errors.address}
              helperText={errors.address}
            />
            <FormControl component="fieldset" error={!!errors.gender}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup name="gender" value={formData.gender} onChange={handleInputChange}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </FormControl>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#3f51b5', color: '#fff' }}>
              Register
            </Button>
          </Stack>
        </form>
      </Card>
      <ToastContainer limit={3} />
    </Box>
  )
}

export default Register
