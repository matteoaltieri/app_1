import './Header.css'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../logo/Logo'
import Paper from '@mui/material/Paper';
import React from 'react';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled(Paper)(({ theme }) =>  {console.log(theme); return {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }});

const Header = () => {
    return (<HeaderContainer className="header">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Logo />
                </Grid>
                <Grid item xs={7}>
                    
                </Grid>
                <Grid item xs={1}>
                    Home
                </Grid>
                <Grid item xs={1}>
                    ABOUT US
                </Grid>
                <Grid item xs={1}>
                    CONTACT
                </Grid>
            </Grid>
        </Box>
    </HeaderContainer>)
}

export default Header ;