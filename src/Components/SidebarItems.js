import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { links, navIcons } from './Utils/Constants'
import '../App.css'
import { HashLink } from 'react-router-hash-link'

const SidebarItems = () => {
    return (
        <Stack display={'flex'} alignItems={'center'} margin={'150px 0'} data-aos="fade-up" data-aos-duration = '2000'>
            {
                links.map((item, i) => (
                        <HashLink to={item.to} className='Links'>{item.name}</HashLink>
                ))
            }
            <Box display={'flex'} alignItems={'center'} marginTop={'20px'}>
                {
                    navIcons.map((icon, i) => (
                        <a href='#'><Typography key={i} variant='h4' margin={'0 15px'} color={'#fff'} sx={{
                            transition: 'all .4s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                color: icon.color,
                            }
                        }}>{icon.icon}</Typography></a>
                    ))
                }
            </Box>
        </Stack>
    )
}

export default SidebarItems