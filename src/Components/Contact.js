import React from 'react'
import { Container, Grid, Stack, Typography, Box } from '@mui/material'
import { navIcons } from './Utils/Constants'
import '../App.css'

const Contact = () => {
    return (
        <div id='Contact'>
            <Stack minHeight={'100vh'} padding={'100px 0'} sx={{ backgroundColor: '#f5df4e!important' }}>
                <Container>
                    <Grid container sx={{ textAlign: { md: 'start', xs: 'center' } }}>
                        <Grid data-aos="fade-up" data-aos-duration = '2000'  md={6} xs={12} sx={{ paddingRight: { md: '40px', xs: '0' } }}>
                            <Typography variant='h4' fontWeight={'600'}>
                                Let's get in touch
                            </Typography>
                            <Typography padding={'50px 0'} fontSize={'25px'} letterSpacing={'1px'}>
                                I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.
                            </Typography>
                            <Typography fontSize={'20px'} margin={'20px 0'}>
                                <span style={{ fontWeight: '600', padding: '20px 0' }}>Living In :</span>
                                <br />
                                Egypt, New Cairo
                            </Typography>
                            <Typography fontSize={'20px'} margin={'20px 0'}>
                                <span style={{ fontWeight: '600', padding: '20px 0' }}>Call :</span>
                                <br />
                                (+20) 100-703-8325
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: { md: 'flex-start', xs: 'center' } }}>
                                {
                                    navIcons.map((item, i) => (
                                        <a href='#'><Typography key={i} variant='h4' margin={'0 10px'} color={'#777'} sx={{
                                            transition: 'all .4s ease',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: item.color,
                                                fontSize: 'large'
                                            }
                                        }}>{item.icon}</Typography></a>
                                    ))
                                }
                            </Box>
                        </Grid>
                        <Grid md={6} xs={12} data-aos="fade-down" data-aos-duration = '2000' >
                            <Typography variant='h4' fontWeight={'600'}>
                                Estimate Your Project?
                            </Typography>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: '60px'
                            }}>
                                <label style={{ fontSize: '18px' }}>What is Your Name:</label>
                                <input className='contactInput' type='text' style={{
                                    padding: '10px 0',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '2px solid #000',
                                    fontSize: '18px',
                                    transition: 'all .4s ease'
                                }} />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: '60px'
                            }}>
                                <label style={{ fontSize: '18px' }}>Your Email Address</label>
                                <input className='contactInput' type='text' style={{
                                    padding: '10px 0',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '2px solid #000',
                                    fontSize: '18px',
                                    transition: 'all .4s ease'
                                }} />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: '60px'
                            }}>
                                <label style={{ fontSize: '18px' }}>How can I help You ?</label>
                                <textarea className='contactInput' type='text' style={{
                                    padding: '10px 0',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '2px solid #000',
                                    fontSize: '18px',
                                    transition: 'all .4s ease',
                                    height: '150px'
                                }} />
                            </div>
                            <button style={{
                                backgroundColor: '#212529',
                                color: '#fff',
                                fontSize: '20px',
                                padding: '15px 50px',
                                border: 'none',
                                margin: '20px 0'
                            }}>
                                Send
                            </button>
                        </Grid>
                    </Grid>
                </Container>
            </Stack>
        </div>
    )
}

export default Contact