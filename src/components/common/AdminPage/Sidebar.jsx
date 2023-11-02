import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const boxStyle = {
    padding: "16px 40px ",
    fontSize: "1.1rem",
    color: "black",
    '&:hover': {
        backgroundColor: "#cccccc",
    }
}

const linkStyle = {
    textDecoration: "none",
    color: "black"
}

const Sidebar = () => {
    const [expanded, setExpanded] = React.useState('panel');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{
            width: "20%"
        }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Quản lý bác sĩ</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: "contents" }}>
                    <a href='/create'>
                        <Box sx={boxStyle}>Tạo thông tin bác sĩ</Box>
                    </a>
                    <Divider />
                    <a href='/edit'>
                        <Box sx={boxStyle}>Sửa thông tin bác sĩ</Box>
                    </a>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Quản lý bệnh nhân</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: "contents" }}>
                    <a href='/patient-info'>
                        <Box sx={boxStyle}>Thông tin bệnh nhân</Box>
                    </a>
                    <Divider />
                    <a href='/patient-calendar'>
                        <Box sx={boxStyle}>Quản lý đặt lịch khám bệnh nhân</Box>
                    </a>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Quản lý thời gian biểu</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: "contents" }}>
                    <a href='/doctor-shift'>
                        <Box sx={boxStyle}>Quản lý ca làm của bác sĩ</Box>
                    </a>
                    <Divider />
                    <a href='/doctor-busy'>
                        <Box sx={boxStyle}>Quản lý lịch bận của bác sĩ</Box>
                    </a>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Quản lý chuyên khoa</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: "contents" }}>
                    <a href='/create'>
                        <Box sx={boxStyle}>Thông tin chuyên khoa</Box>
                    </a>
                    <Divider />
                    <a href='/edit'>
                        <Box sx={boxStyle}>Thông tin bác sĩ ở từng chuyên khoa</Box>
                    </a>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default Sidebar