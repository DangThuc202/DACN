import { Box, Typography, Button } from '@mui/material'
import bg5 from '../../image/bg5.svg'
import stethoscope from '../../image/stethoscope.svg'
import testTube from '../../image/testTube.svg'

const Background5 = () => {
    return (
        <Box sx={{ height: '52vw' }}>
            <img
                src={bg5}
                style={{ height: '55vw', position: 'absolute', right: 0, top: '-5%' }}
            />
            <Box sx={{ paddingLeft: '70px', paddingTop: '250px' }}>
                <Typography variant="h2" sx={{ fontWeight: '700' }}>
                    Bạn thấy không khỏe? <br />
                    Hãy để Jio Health chăm <br /> sóc cho bạn!
                </Typography>
                <Typography sx={{ paddingTop: '50px', fontSize: '18px' }}>
                    Tìm hiểu thêm về các dịch vụ chăm sóc sức khỏe của chúng tôi, từ cảm{' '}
                    <br /> mạo thông thường đến các bệnh mạn tính - các bác sĩ Jio thân
                    thiện sẽ <br /> tận tình chăm sóc bạn và gia đình.
                </Typography>
                <Box sx={{ display: 'flex', paddingTop: '30px', fontSize: '18px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <img src={stethoscope} />
                        <Typography style={{ paddingLeft: '10px', fontWeight: '700' }}>
                            Dịch vụ Bác sĩ & Điều dưỡng
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', paddingLeft: '30px' }}>
                        <img src={testTube} />
                        <Typography style={{ paddingLeft: '10px', fontWeight: '700' }}>
                            Lấy mẫu xét nghiệm
                        </Typography>
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '30px',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '18px',
                        backgroundColor: '#1DCBB6',
                        '&:hover': {
                            backgroundColor: '#1DCBB6',
                            opacity: '0.7',
                        },
                    }}
                >
                    Tìm hiểu thêm
                </Button>
            </Box>
        </Box>
    )
}

export default Background5
