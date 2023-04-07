import { Container, Typography } from '@mui/material'
import React from 'react'

const HireMe = () => {
    return (
        <div id='HireMe' data-aos="fade-up" data-aos-duration = '2000'  style={
            {
                margin: '100px 0',
            }
        }>
            <div className='hireMe'>
                <Container>
                    <Typography fontSize={'30px'} color={'#fff'} margin={'40px'}>
                        Interested in working with me?
                    </Typography>
                    <a href='#' className='hire-btn'>
                        Hire Me!
                    </a>
                </Container>
            </div>
        </div>
    )
}

export default HireMe