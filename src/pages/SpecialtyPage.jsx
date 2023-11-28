import { Box } from "@mui/material"
import HeaderCovid from "../components/common/HeaderCovid"
import Header from "../components/common/Header"
import Slide from "../components/common/SpecialtyPage/Slide"
import Body from "../components/common/SpecialtyPage/Body"
import Background2 from "../components/common/Background2"
import Background3 from "../components/common/Background3"
import Background4 from "../components/common/Background4"
import Pay from "../components/common/DoctorPage/Pay"
import Background9 from "../components/common/Background9"
import Footer from "../components/common/Footer"
import { useEffect } from "react"


const SpecialtyPage = () => {
    useEffect(() => {
        document.title = 'Chuyên Khoa';
    }, []);
    return (
        <Box sx={{ backgroundColor: "#fff", }}>
            <HeaderCovid />
            <Header />
            <Slide />
            <Body />
            <Background2 />
            <Background3 />
            <Background4 />
            <Pay />
            <Background9 />
            <Footer />
        </Box>
    )
}

export default SpecialtyPage
