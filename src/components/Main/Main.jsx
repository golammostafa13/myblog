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
    const [webDev, setWebDev] = React.useState('false');
    const [OS, setOS] = React.useState('false');
    const [CP, setCP] = React.useState('false');
    const [ML, setML] = React.useState('false');
    
    const handleClick = (value) => {
        switch (value) {
            case 'one':
                setWebDev(true);
                setOS(false);
                setML(false);
                setCP(false);
                break;
            case 'two':
                setWebDev(false);
                setOS(false);
                setML(true);
                setCP(false);
                break;
            case 'three':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(true);
                break;
            case 'four':
                setWebDev(false);
                setOS(true);
                setML(false);
                setCP(false);
                break;
            default:
                break;
        }
    }

    return (
        <Container maxWidth="sm" style={style}>
            <ContentSlider />
            <Containers webDev={webDev} ML={ML} OS={OS} CP={CP}/>
            <OtherContentSlider handleOthersClick={handleClick} />
        </Container>
    );
};

export default Main;