import bg2 from "../../image/bg2.svg"
import { Box, Typography, Stack } from "@mui/material"
import { useState } from "react"
import ExploreBg2_1 from "./ExploreBg2_1"
import ExploreBg2_2 from "./ExploreBg2_2"
import ExploreBg2_3 from "./ExploreBg2_3"


const Background2 = () => {

    const [checkHover, setCheckHover] = useState(false)

    // const handleHover = () => {
    //     setIsHovered(true);
    // };

    // const handleLeave = () => {
    //     setIsHovered(false);
    // };

    return (
        <Box sx={{ position: "relative" }}>
            <img style={{ width: "100%", height: "1000px", position: "relative" }} src={bg2} />
            <Box sx={{
                position: "absolute",
                top: "10%",
                paddingLeft: "250px",
            }}>
                <Typography sx={{
                    fontSize: "42px",
                    fontWeight: "500",
                    color: "#3300C4",
                    marginBottom: "18px"
                }}>
                    Khám phá các phòng khám
                </Typography>
                <Stack direction="row" spacing={5}>
                    <ExploreBg2_1 />
                    <ExploreBg2_2 />
                    <ExploreBg2_3 />
                </Stack>
            </Box>
        </Box>
    )
}

export default Background2
