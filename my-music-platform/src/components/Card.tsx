import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CustomAudioPlayer from '@/components/Music';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MultiActionAreaCard() {
    return (

        <Card sx={{ display: 'flex', borderRadius: '20px', border: '3px solid black', backgroundColor: '#434343' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#EEEEEE', // First color
                        padding: "2vh", // Adjust padding as needed
                    }}
                >
                    <Typography gutterBottom sx={{ textAlign: 'center' }} variant="h4" component="div" color='grey' fontFamily={'Verdana'}>
                        <b>PROJECTTITLE</b>
                    </Typography>
                    <CustomAudioPlayer />
                </Box>
                <Box sx={{
                    flex: 1,
                    backgroundColor: '#434343', // First color
                    padding: "2vh", // Adjust padding as needed
                }}>
                    <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
                        <Typography gutterBottom variant="body1" component="div" color='white' fontFamily={'Verdana'} paddingTop={0.5}>
                            Goal:
                        </Typography>
                        <Box sx={{ width: '100%', border: '1px solid black', borderRadius: 5, overflow: 'hidden' }}>
                            <LinearProgress variant="determinate"
                                value={50}
                                sx={{
                                    height: 15,
                                    backgroundColor: 'white', // Background color of the bar
                                    borderRadius: 5,
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#E3FCFF', // Color of the progress bar
                                        borderRadius: '20px'
                                    },
                                }} />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 86,
                                    left: 500,
                                    bottom: 0,
                                    right: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{
                                    fontSize: '0.7rem',  // Custom font size
                                    fontFamily: 'Verdana',  // Custom font family
                                    color: 'black',       // Text color
                                }}>
                                    $40/$80
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography variant="body2" color='#E3FCFF' fontFamily={'Verdana'} padding={1}>
                        Support me to <b>produce this</b> professionally. Support badges starting at <b>$10</b>.
                    </Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" paddingTop="2vh">
                        <Button variant="contained" endIcon={<FavoriteIcon />} sx={{ fontFamily: 'Verdana', color: "black", backgroundColor: "white", borderRadius: '20px', paddingX: 8 }}><b>Support</b></Button>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}