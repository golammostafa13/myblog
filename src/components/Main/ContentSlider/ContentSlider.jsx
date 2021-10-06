import React from 'react';
import logo from '../../../assets/images/rmstu.png'
import { CssBaseline, Box, Tab, Tabs } from '@mui/material';
import useStyles from './style';
import ListSemester from './ListSemester/ListSemester';

const ContentSlider = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <section className={classes.image}>
                <img style={{height: '45px', width: '50px'}} src={logo} alt="rmstu" />
            </section>
            <section>
                <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="CSE Edu" />
                </Tabs>
                </Box>
            </section>
            <ListSemester />
        </div>
    );
};

export default ContentSlider;