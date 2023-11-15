import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import Sidebar from '../Sidebar'
import { useFormik } from "formik";
import * as Yup from "yup";
import { type } from '@testing-library/user-event/dist/type';

const ManageDoctor = () => {

    const gender = {
    }

    const createForm = useFormik({
        initialValues: {
            lastName: "",
            firstName: "",
            address: "",
            email: "",

        },
        validationSchema: Yup.object({
            lastName: Yup.string()
                .min(0, "Họ tên lót không được để trống")
                .required("Trường này là bắt buộc"),
            firstName: Yup.string()
                .min(0, "Tên không được để trống")
                .required("Trường này là bắt buộc"),
            address: Yup.string()
                .min(0, "Địa chỉ không được để trống")
                .required("Trường này là bắt buộc"),
            email: Yup.string().email('Sai định dạng email !')
                .min(0, "Email không được để trống")
                .required("Trường này là bắt buộc"),
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <Box display="flex">
            <Sidebar />
            <Box
                sx={{
                    width: "calc(100% - 300px)",
                    padding: "30px 50px 0 50px"
                }}
                component="form"
                onSubmit={createForm.handleSubmit}
            >
                <Typography variant='h4' textAlign="center" mb={5}>Tạo Thông Tin Bác Sĩ</Typography>
                <Stack spacing={4}>
                    <Stack direction="row" spacing={4}>
                        <TextField
                            type='text'
                            label="Họ tên lót"
                            variant="outlined"
                            fullWidth
                            name='lastName'
                            value={createForm.values.lastName}
                            onChange={createForm.handleChange}
                            error={
                                createForm.touched.lastName &&
                                createForm.errors.lastName !== undefined
                            }
                            helperText={createForm.touched.lastName && createForm.errors.lastName}
                        />
                        <TextField
                            type='text'
                            label="Tên"
                            variant="outlined"
                            fullWidth
                            name='firstName'
                            value={createForm.values.firstName}
                            onChange={createForm.handleChange}
                            error={
                                createForm.touched.firstName &&
                                createForm.errors.firstName !== undefined
                            }
                            helperText={createForm.touched.firstName && createForm.errors.firstName}
                        />
                    </Stack>
                    <Stack direction="row" spacing={4}>
                        <TextField
                            type='text'
                            label="Địa chỉ"
                            variant="outlined"
                            fullWidth
                            name='address'
                            value={createForm.values.address}
                            onChange={createForm.handleChange}
                            error={
                                createForm.touched.address &&
                                createForm.errors.address !== undefined
                            }
                            helperText={createForm.touched.address && createForm.errors.address}
                        />
                        <TextField
                            type='email'
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name='email'
                            value={createForm.values.email}
                            onChange={createForm.handleChange}
                            error={
                                createForm.touched.email &&
                                createForm.errors.email !== undefined
                            }
                            helperText={createForm.touched.email && createForm.errors.email}
                        />
                    </Stack>
                    <Button type='submit' variant='contained'>Tạo thông tin</Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default ManageDoctor
