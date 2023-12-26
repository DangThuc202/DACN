import { Box } from '@mui/material'
import Header from '../components/common/Header'
import Background from '../components/common/DetailDoctor/Background'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DetailDoctor = () => {
    const { idDoctor } = useParams()
    return (
        <Box>
            <Header />
            <Box>
                <Background />
            </Box>
            <Footer />
        </Box>
    )
}

export default DetailDoctor
