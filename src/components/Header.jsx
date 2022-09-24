import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
    return (
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography>CryptoCoffee</Typography>
                    <Select variant='outlined'
                    style={{
                        width: 100,
                        height: 40,
                        marginLeft: 15,
                    }}>
                        <MenuItem>USD</MenuItem>
                        <MenuItem>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;