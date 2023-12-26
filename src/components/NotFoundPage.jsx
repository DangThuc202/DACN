import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import pageError from '../image/error/404.jpg'
function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Box sx={{ textAlign: 'center', mt: 8, color: '#666' }}>
      <img src={pageError} alt="404 Error" style={{ maxWidth: '500px', height: '500px' }} />
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
        404 - Trang Không Tìm Thấy
      </Typography>
      <Typography variant="subtitle1" style={{ marginBottom: '20px' }}>
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: '#0056b3',
            color: '#fff',
            transform: 'scale(1.05)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }
        }}
        onClick={() => navigate('/')}
      >
        Trở về Trang Chủ
      </Button>
    </Box>
  )
}

export default NotFoundPage
