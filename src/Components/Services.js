import { Container, Stack, Box, Typography, Grid, Icon } from '@mui/material'
import React from 'react'
import { WhatIDo } from './Utils/Constants'

const Services = () => {
    return (
        <div id='Services'>
            <Stack minHeight={'100vh'} sx={{ backgroundColor: 'rgb(245 , 245 , 245)' }}>
                <Container>
                    <Box data-aos="fade-down" data-aos-duration = '2000'  textAlign={'center'} padding={'50px 0'}>
                        <Typography variant='h6' fontSize={'18px'} color={'#212529'} display={'inline-block'} sx={{ backgroundColor: '#f5df4e!important' }}>
                            What I DO ?
                        </Typography>
                        <Typography margin={'10px'} fontWeight={'600'} color={'#212529'} sx={{
                            fontSize: { sm: '40px', xs: '30px' }
                        }}>
                            How I can help your next project
                        </Typography>
                    </Box>
                    <Grid container data-aos="fade-up" data-aos-duration = '2000' >
                        {
                            WhatIDo.map((item, i) => (
                                <Grid lg={4} md={6} xs={12} textAlign={'center'} padding={'20px'}>
                                    <Icon sx={{ color: '#f5df4e!important' }} fontSize='large'>{item.icon}</Icon>
                                    <Typography variant='h5' padding={'10px'}>
                                        {item.ServiceName}
                                    </Typography>
                                    <Typography fontSize={'18px'} color={'#777'} lineHeight={'1.8'}>
                                        {item.ServiceDetails}
                                    </Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Stack>
        </div>
    )
}

export default Services