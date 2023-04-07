import { Container, Stack, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import { myEducation, myExperiance, skills } from './Utils/Constants'

const Resume = () => {
    return (
        <div id='Resume'>
            <Stack minHeight={'100vh'} sx={{ backgroundColor: '#fff' }}>
                <Container>
                    <Box data-aos="fade-down" data-aos-duration = '2000'  textAlign={'center'} padding={'50px 0'}>
                        <Typography variant='h6' fontSize={'18px'} color={'#212529'} display={'inline-block'} sx={{ backgroundColor: '#f5df4e!important' }}>
                            Resume
                        </Typography>
                        <Typography margin={'10px'} fontWeight={'600'} color={'#212529'} sx={{
                            fontSize: { sm: '40px', xs: '30px' }
                        }}>
                            A summary of My Resume
                        </Typography>
                    </Box>
                    <Grid container>
                        <Grid md={6} xs={12} data-aos="fade-up" data-aos-duration = '2000'  padding={'20px'}>
                            <Typography variant='h4' paddingBottom={'20px'}>
                                My Education
                            </Typography>
                            {
                                myEducation.map((item, i) => (
                                    <Box paddingTop={'20px'} borderLeft={'2px solid #f5df4e!important'} paddingLeft={'20px'} >
                                        <Typography fontSize={'25px'}>
                                            {item.title}
                                        </Typography>
                                        <Typography fontSize={'20px'} padding={'10px 0'}>
                                            {item.Date}
                                        </Typography>
                                        <Typography fontSize={'18px'} color={'#777'} paddingBottom={'20px'}>
                                            {item.Details}
                                        </Typography>
                                        <hr style={{ border: '1px solid lightgray' }} />
                                    </Box>
                                ))
                            }
                        </Grid>
                        <Grid md={6} xs={12} padding={'20px'} data-aos="fade-down" data-aos-duration = '2000' > 
                            <Typography variant='h4' paddingBottom={'20px'}>
                                My Experiance
                            </Typography>
                            {
                                myExperiance.map((item, i) => (
                                    <Box paddingTop={'20px'} borderLeft={'2px solid #f5df4e!important'} paddingLeft={'20px'} >
                                        <Typography fontSize={'25px'}>
                                            {item.title}
                                        </Typography>
                                        <Typography fontSize={'20px'} padding={'10px 0'}>
                                            {item.Date}
                                        </Typography>
                                        <Typography fontSize={'18px'} color={'#777'} paddingBottom={'20px'}>
                                            {item.Details}
                                        </Typography>
                                        <hr style={{ border: '1px solid lightgray' }} />
                                    </Box>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid container paddingTop={'50px'} data-aos="fade-up" data-aos-duration = '2000' >
                        <Grid xs={12} paddingBottom={'20px'}>
                            <Typography variant='h5'>
                                My Skills
                            </Typography>
                        </Grid>
                        {
                            skills.map((item, i) => (
                                <Grid md={6} xs={12} key={i} padding={'10px 0'} paddingRight={'20px'}>
                                    <Grid container alignItems={'center'}>
                                        <Grid xs={6}>
                                            <Typography fontSize={'18px'} color={'#000'}>
                                                {item.skillName}
                                            </Typography>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Typography fontSize={'18px'} padding={'10px 0'} color={'#000'} textAlign={'end'} minWidth={'70px'}>
                                                {item.percent}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <div className='skill-percent'>
                                        <span style={{ width: item.percent }}></span>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <div className='Cv' data-aos="fade-down" data-aos-duration = '2000' >
                        <a href='#'>Download CV</a>
                    </div>
                </Container>
            </Stack>
        </div>
    )
}

export default Resume