
import React, { useState } from 'react'
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import RegisterUser from '../../services/UserServices'


function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const validate = () => {
    let errors = {}
    if (!formData.first_name) {
      errors.first_name = 'First name is required'
    }
    if (!formData.last_name) {
      errors.last_name = 'Last name is required'
    }
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    }
    return errors
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    try {
      if (await RegisterUser(formData))
        if (Object.keys(validationErrors).length === 0) {
          toast.success("Đăng ký tài khoản thành công", { autoClose: 3000 })
          setTimeout(() => navigate('/'), 3000)
        }
    } catch (error) {
      console.error('Error registering user:', error)
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error("An unexpected error occurred.")
      }
    }
    toast.error("Vui lòng điền đầy đủ thông tin.", { autoClose: 3000 })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ padding: '20px', width: '400px' }}>
        <Typography variant='h4' textAlign="center" mb={5}>ĐĂNG KÝ TÀI KHOẢN</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="First Name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              error={!!errors.first_name}
              helperText={errors.first_name}
            />
            <TextField
              label="Last Name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              error={!!errors.last_name}
              helperText={errors.last_name}
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
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button type='submit' variant='contained' sx={{ backgroundColor: '#3f51b5', color: '#fff' }}>Register</Button>
          </Stack>
        </form>
      </Card>
      <ToastContainer limit={3} />
    </Box>
  )
}

export default Register
