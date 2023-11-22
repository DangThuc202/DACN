import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal'
import {
    Box, Button, Typography, Paper, TextField, IconButton,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Backdrop, Fade
} from '@mui/material'
import Sidebar from '../Sidebar'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'

const ManageClinic = () => {
    const [clinics, setClinics] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [editingClinic, setEditingClinic] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/specialty')
                setClinics(response.data.data)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }
        fetchData()
    }, [])
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const filteredClinics = clinics.filter(clinic => {
        return clinic.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    const handleEditClick = (clinic) => {
        setEditingClinic(clinic)
        setOpenModal(true)
        setImagePreview(clinic.image || null)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
        setEditingClinic(null)
    }
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImagePreview(URL.createObjectURL(img))
            setEditingClinic({ ...editingClinic, image: img })
        }
    }

    const handleDelete = async (clinicId) => {
        try {
            await axios.delete(`http://localhost:3001/api/specialty/${clinicId}`)
            const updatedClinics = clinics.filter(clinic => clinic._id !== clinicId)
            setClinics(updatedClinics)
        } catch (error) {
            console.error('Error deleting clinic: ', error)
        }
    }
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <Box sx={{ flex: 1, margin: '0 16px', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Box sx={{ alignSelf: 'center', mb: 3 }}>
                    <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: 'green' }}>
                        QUẢN LÝ CHUYÊN KHOA
                    </Typography>
                </Box>
                <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Tìm kiếm
                        </Typography>
                        <TextField
                            id="search"
                            label="Tên chuyên khoa"
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            value={searchTerm}
                            onChange={handleSearchChange} // Update search term on change
                        />
                    </Box>
                    <Button variant="contained" color="primary">
                        Thêm
                    </Button>
                </Paper>
                <TableContainer component={Paper} sx={{ maxHeight: '500px', overflow: 'auto' }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Hình ảnh</TableCell>
                                <TableCell>Tên chuyên khoa</TableCell>
                                <TableCell align='center'>Mô tả</TableCell>
                                <TableCell align="right">Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredClinics.map((clinic, index) => ( // Use filteredClinics here
                                <TableRow key={clinic.id}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        <img src={clinic.image} alt={clinic.name} style={{ width: '120px', height: '120px' }} />
                                    </TableCell>
                                    <TableCell sx={{ width: '200px' }}>{clinic.name} </TableCell>
                                    <TableCell>{clinic.description}</TableCell>
                                    <TableCell align="right">
                                        <IconButton color="primary" onClick={() => handleEditClick(clinic)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={() => handleDelete(clinic.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
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
                                        label="Tên chuyên khoa"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mb: 2 }}
                                        value={editingClinic?.name || ''}
                                        onChange={(e) => setEditingClinic({ ...editingClinic, name: e.target.value })}
                                    />
                                    {/* Add other fields as needed */}
                                    {/* Example: Description */}
                                    <TextField
                                        label="Mô tả"
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        sx={{ mb: 2 }}
                                        value={editingClinic?.description || ''}
                                        onChange={(e) => setEditingClinic({ ...editingClinic, description: e.target.value })}
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
                                        {(imagePreview || editingClinic?.image) && (
                                            <Box sx={{ mt: 2 }}>
                                                <img src={imagePreview || editingClinic?.image} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
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
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default ManageClinic
