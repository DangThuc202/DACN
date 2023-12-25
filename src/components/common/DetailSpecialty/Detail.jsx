import { Box, Stack, Typography } from '@mui/material'
import taimuihong from "../../../image/taimuihong.jpg"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import homePageService from '../../../services/homePageService'
const Detail = () => {
    const [specialty, setSpecialty] = useState({})
    const { specialtyId } = useParams()

    useEffect(() => {
        homePageService.getSpecialtyById('6516b2ec6cb07b1137bc823e')
            .then(specialty => {
                console.log(specialty)
                setSpecialty(specialty)
            })
            .catch(error => {
                console.error('Error fetching and parsing data', error)
            })
    }, [])
    return (
        <Box sx={{ width: "100%", height: "auto" }}>
            <img src={taimuihong} style={{ height: "500px", width: "50%", display: "block", margin: "40px auto" }} />
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "700" }}>{
                specialty.name
            }</Typography>
            <Stack spacing={3} margin="50px 100px">
                <Typography sx={{ textIndent: "50px", lineHeight: "30px", fontSize: "20px" }}>
                    {specialty.description}
                </Typography>
                <Typography sx={{ marginLeft: "50px", lineHeight: "30px", fontSize: "18px" }}>
                    _ Triệu chứng ho <br />
                </Typography>

            </Stack>
        </Box>
    )
}

export default Detail
