import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Navbar from './Navbar';
import '../App.css'
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Freelancer", "Frontend Web Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 200,
      backDelay: 100,
      loop: {}
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='HomeComponent' style={{
      backgroundImage: 'url(/images/pexels-filippo-bergamaschi-986774.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <Stack minHeight={'100vh'} sx={{
        backgroundColor: '#f5df4e!important',
        paddingBottom: '50px'
      }}>
        <div style={{
          minWidth: '100%',
          position: 'fixed',
          zIndex: '3'
        }}>
          <Navbar />
        </div>
        <Container>
          <Grid container sx={{
            margin: '150px 0',
            alignItems: 'center'
          }}>
            <Grid item md={6} xs={12} width={'100%'} alignItems={'center'} justifyContent={'center'} marginBottom={'40px'} sx={{
              display: { md: 'none', xs: 'flex' }
            }}>
              <img data-aos="fade-left" data-aos-duration = '2000'  style={{ borderRadius: '50%', border: '8px solid #fff', width: '60%' }} src='/images/1664148522783.jpeg' />
            </Grid>
            <Grid data-aos="fade-down" data-aos-duration = '2000'  item md={6} xs={12} width={'100%'} sx={{
              textAlign: { md: 'start', xs: 'center' }
            }}>
              <Typography variant='h3' color={'#212529'} sx={{
                fontSize: { sm: '50px', xs: '30px' },
              }}>
                Hi , I'm Hamza Sadek A <br /><b style={{ fontSize: '50px', color: '#fff' }}><span ref={el}></span></b>
              </Typography>
              <Typography variant='h5' color={'#212529'} padding={'15px 0'}>
                based in Cairo , Egypt
              </Typography>
              <Box sx={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center' ,
                justifyContent: {md: 'start' , xs: 'center'}
              }}>
                <HashLink to='#Portfolio' className='View'>View My Works</HashLink>
                <HashLink to='#Contact' className='Contact'>Contact Me</HashLink>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} width={'100%'} alignItems={'center'} justifyContent={'flex-end'} sx={{
              display: { md: 'flex', xs: 'none' }
            }}>
              <img style={{ borderRadius: '50%', border: '16px solid #fff', width: '400px' }} src='/images/1664148522783.jpeg' />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </div>
  )
}

export default Home