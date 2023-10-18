import { Box, Typography, TextField, Stack } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const Search = () => {

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
                    style={textStyle}
                />
                <TextField
                    variant="outlined"
                    InputProps={{
                        style: { color: '#111c63', fontWeight: "700", fontSize: "18px", height: "100%" },
                        placeholder: 'Tìm theo chuyên khoa',
                        endAdornment: (
                            <LocalPharmacyIcon style={{ color: "#42ebe9", fontSize: "30px", fontWeight: "800" }} />
                        ),
                    }}
                    style={textStyle}
                />
                <TextField
                    variant="outlined"
                    InputProps={{
                        style: { color: '#111c63', fontWeight: "700", fontSize: "18px", height: "100%" },
                        placeholder: 'Tìm theo phòng ban',
                        endAdornment: (
                            <PlaceIcon style={{ color: "red", fontSize: "30px", fontWeight: "800" }} />
                        ),
                    }}
                    style={textStyle}
                />
            </Stack>

        </Box>
    )
}

export default Search
