import { Stack, Typography, Box, Grid, Container } from '@mui/material'
import React from 'react'
import '../App.css'
import { AboutInfo } from './Utils/Constants'

const AboutMe = () => {
  return (
    <div id='AboutComponent'>
      <Stack minHeight={'90vh'} sx={{ backgroundColor: '#fff' }} paddingTop={'50px'}>
        <Container>
          <Box data-aos="fade-down" data-aos-duration = '2000'  textAlign={'center'}>
            <Typography variant='h6' fontSize={'18px'} color={'#212529'} display={'inline-block'} sx={{ backgroundColor: '#f5df4e!important' }}>
              About Me
            </Typography>
            <Typography margin={'10px'} fontWeight={'600'} color={'#212529'} sx={{
              fontSize: { sm: '40px', xs: '30px' }
            }}>
              Know Me More
            </Typography>
          </Box>
          <Grid container paddingTop={'50px'} justifyContent={'space-between'} >
            <Grid md={8} xs={12} data-aos="fade-down" data-aos-duration = '2000' >
              <Typography sx={{ fontSize: { sm: '30px', xs: '25px' }, textAlign: { md: 'start', xs: 'center' } }}>
                Hi, I'm <span className='MyName'>Hamza Mohamed</span>
              </Typography>
              <Typography padding={'20px 0'} lineHeight={'1.8'} fontSize={'1.4rem'} sx={{ textAlign: { md: 'start', xs: 'center' } }}>
                I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.
              </Typography>
            </Grid>
            <Grid md={4} xs={12} data-aos="fade-up" data-aos-duration = '2000'  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
              <Typography textAlign={'center'} variant='h1' color={'#212529'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <samp style={{ zIndex: 2, fontSize: '150px' }}>22</samp>
                <span className='Circle'></span>
              </Typography>
              <Typography variant='h5'>
                Years of <span style={{ fontWeight: '700' }}>Experiance</span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container paddingTop={'50px'} data-aos="fade-up" data-aos-duration = '2000' >
            {
              AboutInfo.map((item, i) => (
                <Grid lg={3} sm={6} xs={12} key={i}>
                  <Typography fontSize={'18px'} color={'#777'}>
                    {item.type}:
                  </Typography>
                  <Typography variant='h6' color={'#212529'} fontWeight={'600'}>
                    {item.answer}
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

export default AboutMe