import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Doughnut, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import Sidebar from '../Sidebar'
import BarChartIcon from '@mui/icons-material/BarChart'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GroupIcon from '@mui/icons-material/Group'

import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


// Register the necessary components for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)


const StatCard = ({ icon, value, description, bgColor }) => (
    <Card sx={{ minWidth: 100, m: 1, bgcolor: bgColor, borderRadius: 2 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ color: 'darkslategray', p: 1, borderRadius: '50%', bgcolor: 'white' }}>
                {icon}
            </Box>
            <Typography variant="h6" component="div">
                {value}
            </Typography>
            <Typography color="text.secondary">
                {description}
            </Typography>
        </CardContent>
    </Card>
)
// General options for the charts
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                padding: 20,
            },
        },
        title: {
            display: true,
            text: 'Revenue Breakdown',
            font: {
                size: 18,
            },
        },
    },
    animation: {
        animateScale: true,
        animateRotate: true,
    },
}

// Doughnut & Bar chart data
const chartData = {
    labels: ["A", "B", "C"],
    datasets: [
        {
            label: "Revenue",
            data: [200, 300, 400],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

const ManageDashboard = () => {
    const [totalSpecialties, setTotalSpecialties] = useState(null)
    const [totalUsers, setTotalUsers] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        if (!Cookies.get('accessToken')) {
            navigate('/login')
            return
        }
        const fetchSpecialtyCount = async () => {
            try {
                const token = Cookies.get('accessToken')
                const response = await axios.get('http://localhost:3001/api/specialties/count', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setTotalSpecialties(response.data.data.count)
            } catch (error) {
                console.error('Error fetching specialty count: ', error)
            }
        }
        const fetchUserCount = async () => {
            try {
                const token = Cookies.get('accessToken')
                const response = await axios.get('http://localhost:3001/api/admin/users/count', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setTotalUsers(response.data.data.count)
            } catch (error) {
                console.error('Error fetching specialty count: ', error)
            }
        }
        fetchSpecialtyCount()
        fetchUserCount()
    }, []) // The empty dependency array ensures this effect runs only once when the component mounts
    const statistics = [
        {
            icon: <BarChartIcon />,
            value: "Loading...",
            description: "Weekly Revenue",
            bgColor: "lightgreen",
        },
        {
            icon: <PersonAddIcon />,
            value: totalUsers !== null ? totalUsers : "Loading...",
            description: "Total users",
            bgColor: "lightblue",
        },
        {
            icon: <AccessTimeIcon />,
            value: "Loading...",
            description: "Total Health Appointment Done",
            bgColor: "lightyellow",
        },
        {
            icon: <GroupIcon />,
            value: totalSpecialties !== null ? totalSpecialties : "Loading...",
            description: "Tổng số chuyên khoa",
            bgColor: "lightcoral",
        },
    ]
    return (
        <Box display="flex">
            <Sidebar />
            <Box
                sx={{
                    width: "calc(100% - 300px)",
                    padding: "30px 50px 0 50px",
                    height: '100vh', // Adjust the height of the chart area
                }}
            >

                <Typography variant='h4' textAlign="center" mb={5}>Hi, Welcome back</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {statistics.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </Box>
                <Box sx={{ height: '40%' }}>
                    <Doughnut data={chartData} options={chartOptions} />
                </Box>
                <Box sx={{ height: '40%' }}>
                    <Bar data={chartData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: 'Monthly Revenue' } } }} />
                </Box>
            </Box>
        </Box>
    )
}

export default ManageDashboard
