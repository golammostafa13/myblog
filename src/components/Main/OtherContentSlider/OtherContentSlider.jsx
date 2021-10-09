import React from 'react';
import logo from '../../../assets/images/rmstu.png'
import { CssBaseline, Box, Tab, Tabs, Typography } from '@mui/material';
import useStyles from './style';
import ListSemester from '../ContentSlider/ListSemester/ListSemester';
import { Link } from 'react-router-dom';

const OtherContentSlider = ({ handleOthersClick }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <section>
                <Box sx={{ width: '100%' }}>
                <Typography variant="h6">Others</Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab component={Link} to={'webDev'} value="one" label="Web Developping" />
                </Tabs>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab component={Link} to={'machineLearning'} value="two" label="Machine Learning" />
                </Tabs>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab component={Link} to={'CompetetiveProgramming'} value="three" label="Competitive Programming" />
                </Tabs>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab component={Link} to={'LinuxOS'} value="four" label="Linux OS" />
                </Tabs>
                </Box>
            </section>
        </div>
    );
};

export default OtherContentSlider;