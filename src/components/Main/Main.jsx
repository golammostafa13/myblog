import React from 'react';
import Container from '@mui/material/Container';
import Containers from './Container/Containers';
import ContentSlider from './ContentSlider/ContentSlider';
import OtherContentSlider from './OtherContentSlider/OtherContentSlider';

const style = {
    display: 'flex',
    maxWidth: '100vw',
    maxHeight: '85vh',
}

const Main = () => {
    return (
        <Container maxWidth="sm" style={style}>
            <ContentSlider />
            <Containers />
            <OtherContentSlider />
        </Container>
    );
};

export default Main;