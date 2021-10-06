import React from 'react';
import Container from '@mui/material/Container';
import Containers from './Container/Containers';
import ContentSlider from './ContentSlider/ContentSlider';

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
        </Container>
    );
};

export default Main;