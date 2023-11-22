import { Box, Modal, Typography, TextField, Stack, Button, Avatar } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup"
import test from "../../image/test.jpg"

const ModalCustomer = ({ open, handleClose }) => {

    const today = new Date()
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const currentDate = tomorrow.toISOString().split('T')[0];

    const modalForm = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            phoneNumber: "",
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
                height: "580px"
            }}
                component="form"
                onSubmit={modalForm.handleSubmit}
            >
                <Typography sx={{ marginBottom: "20px", display: "flex", justifyContent: "center" }} variant="h5">Đặt lịch khám ngay</Typography>
                <Box display="flex" mb={3}>
                    <Avatar sx={{ width: "60px", height: "60px" }} src={test} />
                    <Stack sx={{ display: "flex", justifyContent: "center", ml: "20px" }}>
                        <Typography>BS.<strong>Đặng Hoàng Thức</strong></Typography>
                        <Typography>Chuyên khoa <strong>Cơ xương khớp</strong> </Typography>
                    </Stack>
                </Box>
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
                    <Stack direction="row" spacing={4}>
                        <TextField
                            sx={{ width: '300px' }}
                            name="email"
                            label="Email"
                            variant="outlined"
                            value={modalForm.values.email}
                            onChange={modalForm.handleChange}
                        />
                        <TextField
                            sx={{ width: '250px' }}
                            name="phoneNumber"
                            label="SĐT"
                            variant="outlined"
                            value={modalForm.values.phoneNumber}
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

                    <Stack direction="row" spacing={4}>
                        <TextField type="date" inputProps={{ min: currentDate }} variant="outlined" helperText="Chọn thời gian khám bệnh  &nbsp; " />
                        <TextField type="time" variant="outlined" helperText="Chọn khung giờ khám bệnh " />
                    </Stack>
                    <Button variant="contained" size="large" type="submit"> Đăng ký khám </Button>
                </Stack>
            </Box>
        </Modal >
    )
}

export default ModalCustomer
