import React from 'react';
import logo from '../../../assets/images/rmstu.png'
import { CssBaseline, Box, Tab, Tabs, Typography } from '@mui/material';
import useStyles from './style';
import ListSemester from '../ContentSlider/ListSemester/ListSemester';

const OtherContentSlider = ({ handleOthersClick }) => {
    const [value, setValue] = React.useState('one');

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
                    onClick={() => handleOthersClick('one')}
                >
                    <Tab value="one" label="Web Developping" />
                </Tabs>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    onClick={() => handleOthersClick('two')}
                >
                    <Tab value="two" label="Machine Learning" />
                </Tabs>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    onClick={() => handleOthersClick('three')}
                >
                    <Tab value="three" label="Competitive Programming" />
                </Tabs>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    onClick={() => handleOthersClick("four")}
                >
                    <Tab value="four" label="Linux OS" />
                </Tabs>
                </Box>
            </section>
        </div>
    );
};

export default OtherContentSlider;