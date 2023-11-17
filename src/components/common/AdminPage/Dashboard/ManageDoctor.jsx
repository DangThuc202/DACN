import React, { useEffect, useState } from 'react'
import {
    Box, Button, Typography, Paper, TextField, IconButton,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, Backdrop, Fade
} from '@mui/material'
import Sidebar from '../Sidebar'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'

const ManageDoctor = () => {
    const [doctors, setDoctors] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [editingDoctor, setEditingDoctor] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    useEffect(() => {
        // Fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/doctors')
                setDoctors(response.data.data)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }
        fetchData()
    }, [])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    // const filteredDoctors = doctors.filter(doctor =>
    //     doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    // )

    // ... other handler functions (e.g., handleEditClick, handleCloseModal)

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, margin: '0 16px', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Box sx={{ alignSelf: 'center', mb: 3 }}>
                    <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
                        QUẢN LÝ THÔNG TIN BÁC SĨ
                    </Typography>
                </Box>

                {/* Search and Add Button */}
                <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextField
                        id="search"
                        label="Tên chuyên khoa"
                        variant="outlined"
                        size="small"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button variant="contained" color="primary">
                        Thêm
                    </Button>
                </Paper>

                {/* Doctors Table */}
                <TableContainer component={Paper} sx={{ maxHeight: '500px', overflow: 'auto' }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Avatar</TableCell>
                                <TableCell>Họ tên</TableCell>
                                <TableCell align='center'>Chức vụ</TableCell>
                                <TableCell align="right">Chuyên khoa</TableCell>
                                <TableCell align="right">Phòng khám</TableCell>
                                <TableCell align="right">Địa chỉ</TableCell>
                                <TableCell align="right">Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {doctors.map((doctor, index) => (
                                <TableRow key={doctor._id}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        <img src={doctor.avatar} alt={doctor.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {doctor.name}
                                    </TableCell>
                                    <TableCell align="center">{doctor.position}</TableCell>
                                    <TableCell align="right">{doctor.specialty}</TableCell>
                                    <TableCell align="right">{doctor.clinic}</TableCell>
                                    <TableCell align="right">{doctor.address}</TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* ... Modal for editing doctor details ... */}
            </Box>
        </Box >
    )
}

export default ManageDoctor
