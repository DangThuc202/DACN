import { Chart as ChartJS, defaults } from "chart.js/auto"
import { Bar, Doughnut } from "react-chartjs-2"
import Sidebar from "../Sidebar"
import { Box, Typography } from "@mui/material"


defaults.maintainAspectRatio = false
defaults.responsive = true

const ManageDashboard = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box
                sx={{
                    width: "calc(100% - 300px)",
                    padding: "30px 50px 0 50px"
                }}
            >
                <Typography variant='h4' textAlign="center" mb={5}>Thống kê</Typography>
                <Box>
                    <Doughnut
                        data={{
                            labels: ["A", "B", "C"],
                            datasets: [
                                {
                                    label: "Revenue",
                                    data: [200, 300, 400]
                                },
                            ]
                        }}
                    />
                </Box>
                <Box>
                    <Bar
                        data={{
                            labels: ["A", "B", "C"],
                            datasets: [
                                {
                                    label: "Revenue",
                                    data: [200, 300, 400]
                                },
                            ]
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default ManageDashboard
