import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const CreateForm = () => {

    const modalForm = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            phonenumber: "",
            account: "",
            password: "123456"
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(4, "Họ phải có ít nhất 4 kí tự")
                .required("Không được để trống phần này"),
            lastName: Yup.string()
                .min(1, "Tên phải có ít nhất 1 kí tự")
                .required("Không được để trống phần này"),
            address: Yup.string()
                .required("Không được để trống phần này"),
            email: Yup.string().email('Sai định dạng email !')
                .required("Không được để trống phần này"),
            phonenumber: Yup.string()
                .required("Không được để trống phần này"),
            account: Yup.string()
                .required("Không được để trống phần này"),
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <Box
            component="form"
            sx={{ width: "100%" }}
            onSubmit={modalForm.handleSubmit}
        >
            <Typography variant='h4' style={{
                marginTop: "20px",
                textAlign: "center",
                fontWeight: "700",
                marginBottom: "50px"
            }}>
                Thêm thông tin bác sĩ
            </Typography>
            <Stack spacing={4} margin="0 5rem">
                <Stack direction="row" spacing={3} >
                    <TextField
                        type="text"
                        placeholder="Họ tên lót bác sĩ"
                        name="firstName"
                        fullWidth
                        value={modalForm.values.firstName}
                        onChange={modalForm.handleChange}
                        error={
                            modalForm.touched.firstName &&
                            modalForm.errors.firstName !== undefined
                        }
                        helperText={
                            modalForm.touched.firstName && modalForm.errors.firstName
                        }
                    />


                    <TextField
                        type="text"
                        placeholder="Tên bác sĩ"
                        name="lastName"
                        fullWidth
                        value={modalForm.values.lastName}
                        onChange={modalForm.handleChange}
                        error={
                            modalForm.touched.lastName &&
                            modalForm.errors.lastName !== undefined
                        }
                        helperText={
                            modalForm.touched.lastName && modalForm.errors.lastName
                        }
                    />
                </Stack>
                <Stack direction="row" spacing={3} >
                    <TextField
                        type="text"
                        placeholder="Địa chỉ"
                        name="address"
                        fullWidth
                        value={modalForm.values.address}
                        onChange={modalForm.handleChange}
                        error={
                            modalForm.touched.address &&
                            modalForm.errors.address !== undefined
                        }
                        helperText={
                            modalForm.touched.address && modalForm.errors.address
                        }
                    />
                    <TextField
                        type="text"
                        placeholder="Email"
                        name="email"
                        fullWidth
                        value={modalForm.values.email}
                        onChange={modalForm.handleChange}
                        error={
                            modalForm.touched.email &&
                            modalForm.errors.email !== undefined
                        }
                        helperText={
                            modalForm.touched.email && modalForm.errors.email
                        }
                    />
                </Stack>
                <Stack direction="row" spacing={3} >
                    <TextField
                        type="number"
                        placeholder="SĐT"
                        name="phonenumber"
                        fullWidth
                        value={modalForm.values.phonenumber}
                        onChange={modalForm.handleChange}
                        error={
                            modalForm.touched.phonenumber &&
                            modalForm.errors.phonenumber !== undefined
                        }
                        helperText={
                            modalForm.touched.phonenumber && modalForm.errors.phonenumber
                        }
                    />
                    <TextField
                        type="text"
                        placeholder="Tạo tài khoản"
                        name="account"
                        fullWidth
                        value={modalForm.values.account}
                        onChange={modalForm.handleChange}
                        error={
                            modalForm.touched.account &&
                            modalForm.errors.account !== undefined
                        }
                        helperText={
                            modalForm.touched.account && modalForm.errors.account
                        }
                    />
                    <TextField
                        type="text"
                        placeholder="Tạo mật khẩu"
                        name="password"
                        fullWidth
                        value={modalForm.values.password}
                        // onChange={modalForm.handleChange}
                        error={
                            modalForm.touched.password &&
                            modalForm.errors.password !== undefined
                        }
                        helperText={
                            modalForm.touched.password && modalForm.errors.password
                        }
                    />
                </Stack>
                <Button type='submit' variant='contained'>xác nhận tạo thông tin</Button>
                <Button type='submit' variant='contained'>sửa thông tin</Button>
            </Stack>
        </Box >
    )
}

export default CreateForm
