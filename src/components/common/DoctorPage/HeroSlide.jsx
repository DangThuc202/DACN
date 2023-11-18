import axios from 'axios'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import test from "../../../image/test.jpg"
import { Typography } from '@mui/material'
import place from "../../../image/DoctorPage_img/place.svg"
import exp from "../../../image/DoctorPage_img/exp.svg"
import { useEffect, useState } from 'react'
import doctorService from '../../../services/DoctorService'


const HeroSlide = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await doctorService.getDoctors()
                setDoctors(response.data.data)
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }
        fetchData()
    }, [])
    const contentStyle = {
        borderRadius: "10p  x",
        marginTop: "20px",
        display: "flex",
        alignItems: 'center',
        height: "auto",
        padding: "10px",
        justifyContent: 'center'
    }

    const iconStyle = {
        height: "60px",
        width: "60px",
        backgroundColor: "#fff",
        borderRadius: "40px",
        display: "flex",
        justifyContent: 'center',
        marginRight: "20px"
    }

    return (
        <Box>
            <Grid container spacing={3}>
                {doctors.map((doctor) => (
                    <Grid xs={4} >
                        <Box sx={{
                            maxWidth: "380px",
                            height: "auto",
                            borderRadius: "20px",
                            boxShadow: "5px 10px 30px #ccd6ef",
                            padding: "20px",
                            backgroundColor: "#ffebee"
                        }}>
                            <Box sx={{
                                height: "230px",
                                backgroundImage: `url(${test})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                            }}
                            />
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                marginTop: "30px"
                            }}>
                                <Typography variant='h6'>{`${doctor.user_id.first_name} ${doctor.user_id.last_name}`}</Typography>
                                <Typography>{doctor.specialty_id.name}</Typography>
                            </Box>
                            <Box backgroundColor="rgb(227 245 233)" sx={contentStyle}>
                                <Box sx={iconStyle}>
                                    <img style={{ width: "30px" }} src={place} />
                                </Box>
                                <Box sx={{ width: "260px" }}>
                                    <Typography>
                                        {`${doctor.clinic_id.name}`}
                                        <br /> Thành Phố Hồ Chí Minh <br />
                                    </Typography>
                                </Box>
                            </Box>
                            <Box backgroundColor="rgb(213 237 250)" sx={contentStyle}>
                                <Box sx={iconStyle}>
                                    <img style={{ width: "30px" }} src={exp} />
                                </Box>
                                <Box sx={{ width: "260px" }}>
                                    <Typography>
                                        <strong>15</strong> năm kinh nghiệm
                                    </Typography>

                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HeroSlide
