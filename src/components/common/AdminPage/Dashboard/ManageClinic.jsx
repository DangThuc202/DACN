import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import Sidebar from '../Sidebar'

const ManageClinic = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box
                sx={{
                    width: "calc(100% - 300px)",
                    padding: "30px 50px 0 50px"
                }}
            >
                <Typography variant='h4' textAlign="center" mb={5}>Quản Lý Thông Tin Chuyên Khoa</Typography>
            </Box>
        </Box>
    )
}

export default ManageClinic
