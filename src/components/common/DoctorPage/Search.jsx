import { Box, TextField, Stack, Select, FormControl, InputLabel, MenuItem, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from "react"
import specialtyService from "../../../services/specialtyService"

const Search = ({ onChangeSearch }) => {
    const [specialties, setSpecialties] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const specialtiesData = await specialtyService.getSpecialties()
                setSpecialties(specialtiesData)
                if (specialtiesData.length > 0) {
                    onChangeSearch(specialtiesData[0].name)
                }
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }
        fetchData()
    })
    const textStyle = {
        height: "50px",
        width: "420px",
        marginTop: "20px",
        borderColor: "#f2f3ff",
        backgroundColor: "#f2f3ff",
        color: "red",
        '&:hover': {
            border: "none"
        }
    }
    return (
        <Box sx={{ marginBottom: "100px" }}>
            <Typography style={{ fontSize: "35px", fontWeight: "600" }} >Tìm bác sĩ của bạn</Typography>
            <Stack direction="row" spacing={3}>
                <TextField
                    variant="outlined"
                    InputProps={{
                        style: { color: '#111c63', fontWeight: "700", fontSize: "18px", height: "100%" },
                        placeholder: 'Tìm theo tên',
                        endAdornment: (
                            <SearchIcon style={{ color: "#2FC1A6", fontSize: "30px", fontWeight: "800" }} />
                        ),
                    }}
                    onChange={(e) => onChangeSearch(e.target.value)}
                    style={textStyle}
                />
                <FormControl style={textStyle}>
                    <InputLabel id="specialty-select-label">Chuyên khoa</InputLabel>
                    <Select
                        labelId="specialty-select-label"
                        value={setSpecialties}
                        label="Chuyên khoa"
                    >
                        {specialties.map((specialty) => (
                            <MenuItem key={specialty.id} value={specialty.name}>
                                {specialty.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl style={textStyle}>
                    <InputLabel id="specialty-select-label">Địa điểm</InputLabel>
                    <Select
                        labelId="specialty-select-label"
                        value={setSpecialties}
                        label="Địa điểm"
                    >
                        {specialties.map((specialty) => (
                            <MenuItem key={specialty.id} value={specialty.name}>
                                {specialty.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>

        </Box>
    )
}

export default Search
