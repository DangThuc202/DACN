import { Box, Stack, TextField } from '@mui/material'
import React from 'react'
import Sidebar from '../components/common/AdminPage/Sidebar'
import CreateForm from '../components/common/AdminPage/CreateForm'

const AdminPage = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <CreateForm />
        </Box>

    )
}

export default AdminPage
