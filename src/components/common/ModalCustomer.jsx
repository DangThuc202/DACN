import { Box, Modal, Typography, TextField, Stack, MenuItem, Button } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup"

const ModalCustomer = ({ open, handleClose }) => {

    const currencies = [
        {
            value: 0,
            label: 'Nam'
        },
        {
            value: 1,
            label: 'Nữ'
        },
        {
            value: 2,
            label: 'Khác'
        }
    ]

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
            address: Yup.string()
                .required("Không được để trống phần này"),
        })
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
                height: "680px"
            }}
            >
                <Typography sx={{ marginBottom: "20px", display: "flex", justifyContent: "center" }} variant="h5">Đặt lịch khám ngay</Typography>
                <Stack spacing={4}>
                    <Stack direction="row" spacing={4}>
                        <TextField sx={{ width: '300px' }} name="firstName" label="Họ " variant="outlined" />
                        <TextField sx={{ width: '250px' }} name="lastName" label="Tên" variant="outlined" />
                    </Stack>
                    <TextField name="address" label="Địa Chỉ" variant="outlined" />
                    <TextField name="email" label="Email" variant="outlined" />
                    <TextField name="phoneNumber" label="SĐT" variant="outlined" />
                    <Stack direction="row" spacing={4}>
                        <TextField type="date" variant="outlined" helperText="Chọn ngày tháng năm sinh" />
                        <TextField
                            select
                            label="Giới tính"
                            helperText="Chọn giới tính của bạn"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                        <TextField type="date" inputProps={{ min: currentDate }} variant="outlined" helperText="Chọn thời gian khám bệnh  &nbsp; " />
                        <TextField type="time" variant="outlined" helperText="Chọn khung giờ khám bệnh " />
                    </Stack>
                    <Button variant="contained" size="large"> Đăng ký khám </Button>
                </Stack>
            </Box>

        </Modal >
    )
}

export default ModalCustomer