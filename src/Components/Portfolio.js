import React from 'react'
import { Container, Stack, Box, Typography, Grid } from '@mui/material'
import { projects } from './Utils/Constants'

const Portfolio = () => {

    return (
        <div id='Portfolio'>
            <Stack minHeight={'100vh'} sx={{ backgroundColor: 'rgb(245 , 245 , 245)' }}>
                <Container>
                    <Box data-aos="fade-down" data-aos-duration = '2000'  textAlign={'center'} padding={'50px 0'}>
                        <Typography variant='h6' fontSize={'18px'} color={'#212529'} display={'inline-block'} sx={{ backgroundColor: '#f5df4e!important' }}>
                            Portfolio
                        </Typography>
                        <Typography margin={'10px'} fontWeight={'600'} color={'#212529'} sx={{
                            fontSize: { sm: '40px', xs: '30px' }
                        }}>
                            Some of my most recent projects
                        </Typography>
                    </Box>
                    <Grid container data-aos="fade-up" data-aos-duration = '2000' >
                        {
                            projects.map((item, i) => (
                                <Grid key={i} lg={4} sm={6} xs={12} padding={'20px'}>
                                    <Box position={'relative'}>
                                        <div style={{ width: '100%' }}>
                                            <img src={item.image} style={{ width: '100%' }} />
                                        </div>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Stack>
        </div>
    )
}

export default Portfolio