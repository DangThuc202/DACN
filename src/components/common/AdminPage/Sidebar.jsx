import { Box, Stack, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import logo from '../../../image/logo.svg'
import test from '../../../image/test.jpg'
import PieChartIcon from '@mui/icons-material/PieChart'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import AccessibleIcon from '@mui/icons-material/Accessible'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        position: 'relative',
        width: '320px',
        height: '100vh',
        border: '2px solid #00000024',
        textAlign: 'center',
        paddingTop: '20px'
      }}
    >
      <img src={logo} />
      <Box
        sx={{
          width: 'auto',
          backgroundColor: '#00000026',
          borderRadius: '20px',
          marginTop: '20px',
          display: 'flex',
          padding: '10px 30px',
          textAlign: 'center',
          margin: '50px 20px'
        }}
      >
        <Avatar alt="Remy Sharp" src={test} style={{ height: '50px', width: '50px' }} />
        <Stack
          spacing={0.5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '40px'
          }}
        >
          <Typography sx={{ fontWeight: '700' }}>Thức - Nghĩa</Typography>
          <Typography sx={{ color: '#00000073', fontWeight: '700' }}>ADMIN</Typography>
        </Stack>
      </Box>
      <List component="nav" aria-label="mailbox folders" sx={{ padding: '0 30px' }}>
        <Link to="/admin/dashboard" onChange={() => navigate('/admin/dashboard')}>
          <ListItem button>
            <PieChartIcon />
            <ListItemText
              sx={{ marginLeft: '30px' }}
              primary="Thống kê"
              to="/admin/dashboard"
              onChange={() => navigate('/admin/dashboard')}
            />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/admin/manage-doctor" onChange={() => navigate('/admin/manage-doctor')}>
          <ListItem button>
            <PeopleAltIcon />
            <ListItemText sx={{ marginLeft: '30px' }} primary="Quản lý bác sĩ" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/admin/manage-clinic" onChange={() => navigate('/admin/manage-clinic')}>
          <ListItem button>
            <LocalHospitalIcon />
            <ListItemText sx={{ marginLeft: '30px' }} primary="Quản lý chuyên khoa" />
          </ListItem>
        </Link>
        <Divider light />
        <Link to="/admin/manage-patient" onChange={() => navigate('/admin/manage-patient')}>
          <ListItem button>
            <AccessibleIcon />
            <ListItemText sx={{ marginLeft: '30px' }} primary="Quản lý bệnh nhân" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/admin/quanlydatlich" onChange={() => navigate('/admin/quanlydatlich')}>
          <ListItem button>
            <CalendarMonthIcon />
            <ListItemText sx={{ marginLeft: '30px' }} primary="Quản lý đặt lịch" />
          </ListItem>
        </Link>
        <Divider />
        <Divider />
        <Link to="/admin/durg" onChange={() => navigate('/admin/durg')}>
          <ListItem button>
            <CalendarMonthIcon />
            <ListItemText sx={{ marginLeft: '30px' }} primary="Quản lý thuốc" />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </Box>
  )
}

export default Sidebar
