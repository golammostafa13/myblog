import React from 'react';
import useStyles from './style';
import { Typography, CssBaseline } from '@mui/material';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Typography variant="body 2">Copyright &copy; <a href="http://github.com/golammostafa13/">Golam Mostafa</a></Typography>
        </div>
    );
};

export default Footer;