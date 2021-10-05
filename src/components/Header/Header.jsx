import * as React from 'react';
import {AppBar, Container, Box, Toolbar, Typography, Button, IconButton, CssBaseline,} from '@mui/material';

const logoStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '50%'
}

const style = {
    position: 'sticky',
    top: 0,
    left: 0,
}

const Header = () =>{
  return (
    <div style={style}>
      <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sharing and Learning
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  );
}

export default Header;