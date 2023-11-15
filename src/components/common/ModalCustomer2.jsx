import { Box, Modal, Typography, TextField, Stack, MenuItem, Button } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const ModalCustomer2 = ({ open, handleClose }) => {

    const modalForm = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            phoneNumber: "",
            description: ""
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
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        toast.success('Xác nhận câu hỏi thành công!', {
            position: 'bottom-right',
            autoClose: 700, // Tự động đóng sau 3 giây
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => handleClose()
        });
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "20px",
                fontSize: '16px',
                width: "600px",
                height: "540px"
            }}
                component="form"
                onSubmit={modalForm.handleSubmit}
            >
                <Typography sx={{ marginBottom: "20px", display: "flex", justifyContent: "center" }} variant="h5">Tư vấn sức khỏe ngay</Typography>
                <Stack spacing={4}>
                    <Stack direction="row" spacing={4}>
                        <TextField
                            sx={{ width: '300px' }}
                            name="firstName"
                            label="Họ "
                            variant="outlined"
                            value={modalForm.values.firstName}
                            onChange={modalForm.handleChange}
                        />
                        <TextField
                            sx={{ width: '250px' }}
                            name="lastName"
                            label="Tên"
                            variant="outlined"
                            value={modalForm.values.lastName}
                            onChange={modalForm.handleChange}
                        />
                    </Stack>
                    <TextField
                        name="address"
                        label="Địa Chỉ"
                        variant="outlined"
                        value={modalForm.values.address}
                        onChange={modalForm.handleChange}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={modalForm.values.email}
                        onChange={modalForm.handleChange}
                    />
                    <TextField
                        name="phoneNumber"
                        label="SĐT"
                        variant="outlined"
                        value={modalForm.values.phoneNumber}
                        onChange={modalForm.handleChange}
                    />
                    <TextField
                        name="description"
                        label="Mô tả về tình trạng sức khỏe của bạn"
                        variant="outlined"
                        value={modalForm.values.description}
                        onChange={modalForm.handleChange}
                    >
                    </TextField>
                    <Button variant="contained" size="large" onClick={handleFormSubmit}>Xác nhận</Button>
                    <ToastContainer />
                </Stack>
            </Box>
        </Modal >

    )
}

export default ModalCustomer2
