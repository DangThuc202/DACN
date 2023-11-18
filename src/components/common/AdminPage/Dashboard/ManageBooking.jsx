import { Box, Typography } from '@mui/material'
import Sidebar from '../Sidebar'

const ManageBooking = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box
                sx={{
                    width: "calc(100% - 300px)",
                    padding: "30px 50px 0 50px"
                }}
            >
                <Typography variant='h4' textAlign="center" mb={5}>Quản Lý Thông Tin Đặt Lịch</Typography>
            </Box>
        </Box>
    )
}

export default ManageBooking
