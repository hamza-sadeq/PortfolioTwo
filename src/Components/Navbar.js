import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import Sidebar from './Sidebar';
import '../App.css'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <nav className={navbar ? 'nav active' : 'nav'}>
            <Container sx={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center'}}>
                <div>
                    <Typography color={'#212529'} variant='h4' fontWeight={'600'}>
                        Hamza
                    </Typography>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display: {sm: 'block' , xs: 'none'}
                    }}>
                        <CallIcon />
                    </Box>
                    <div>
                        <Typography fontSize={'18px'} paddingLeft={'10px'} sx={{
                            display: {sm: 'block' , xs: 'none'}
                        }}>
                            +20100-703-8325
                        </Typography>
                    </div>
                    <div style={{
                        marginLeft: '10px'
                    }}>
                        <Sidebar />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar