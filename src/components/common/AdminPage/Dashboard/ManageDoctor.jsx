import React, { useEffect, useState } from 'react'
import {
    Box, Button, Typography, Paper, TextField, IconButton,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, Backdrop, Fade
} from '@mui/material'
import Sidebar from '../Sidebar'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import Cookies from 'js-cookie'
import { adminService } from '../../../../services/adminService'

const ManageDoctor = () => {
    const [doctors, setDoctors] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [editingDoctor, setEditingDoctor] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await adminService.getDoctors()
                console.log(response)
                setDoctors(response)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }
        fetchData()
    }, [])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleOpenModal = (doctor) => {
        setEditingDoctor(doctor)
        setOpenModal(true) // Mở modal
    }
    const handleCloseModal = () => {
        setOpenModal(false) // Đóng modal
    }

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImagePreview(URL.createObjectURL(img))
            setEditingDoctor({ ...editingDoctor, image: img })
        }
    }
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
                <TableContainer component={Paper} sx={{ maxHeight: '500px', overflow: 'auto' }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align='left'>Avatar</TableCell>
                                <TableCell align='left'>Họ tên</TableCell>
                                <TableCell align="left">Chuyên khoa</TableCell>
                                <TableCell align="left">Phòng khám</TableCell>
                                <TableCell align="left">Địa chỉ</TableCell>
                                <TableCell align="left">Hành động</TableCell>
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
                                        {doctor.user_id.first_name + ' ' + doctor.user_id.last_name}
                                    </TableCell>
                                    <TableCell align="center">{doctor.specialty_id.name}</TableCell>
                                    <TableCell align="right">{doctor.clinic_id.name}</TableCell>
                                    <TableCell align="right">{doctor.user_id.address}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleOpenModal()}>
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
                <Modal
                    aria-labelledby="edit-clinic-modal"
                    aria-describedby="edit-clinic-form"
                    open={openModal}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openModal}>
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400, // You can adjust the width
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                        }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>Chỉnh sửa chuyên khoa</Typography>
                            <TextField
                                label="Họ tên"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={editingDoctor?.name || ''}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })}
                            />
                            <TextField
                                label="Chuyên khoa"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                sx={{ mb: 2 }}
                                value={editingDoctor?.description || ''}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, description: e.target.value })}
                            />
                            <TextField
                                label="Phòng khám"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                sx={{ mb: 2 }}
                                value={editingDoctor?.description || ''}
                                onChange={(e) => setEditingDoctor({ ...editingDoctor, description: e.target.value })}
                            />
                            {/* Image Upload */}
                            <Box sx={{ mb: 2 }}>
                                <Button variant="contained" component="label">
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                        onChange={handleImageChange}
                                    />
                                </Button>
                                {(imagePreview || editingDoctor?.image) && (
                                    <Box sx={{ mt: 2 }}>
                                        <img src={imagePreview || editingDoctor?.image} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
                                    </Box>
                                )}
                            </Box>
                            {/* Buttons for actions */}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button onClick={handleCloseModal} sx={{ mr: 1 }}>Thoát</Button>
                                <Button variant="contained" color="primary" onClick={() => {/* handle update */ }}>
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </Box>
        </Box >
    )
}

export default ManageDoctor
