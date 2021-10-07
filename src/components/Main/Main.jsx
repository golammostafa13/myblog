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

    const [comFun, setComFun] = React.useState('false');
    const [comProgC, setComProgC] = React.useState('false');
    const [physics, setPhysics] = React.useState('false');
    const [chemistry, setChemistry] = React.useState('false');
    const [calculus, setCalculus] = React.useState('false');
    const [electricalCir, setElectricalCir] = React.useState('false');

    const handleClick = (value) => {
        switch (value) {
            case 'one':
                setWebDev(true);
                setOS(false);
                setML(false);
                setCP(false);

                setComProgC(false);
                setComFun(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                break;
            case 'two':
                setWebDev(false);
                setOS(false);
                setML(true);
                setCP(false);

                setComProgC(false);
                setComFun(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);


                break;
            case 'three':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(true);

                setComProgC(false);
                setComFun(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                break;
            case 'four':
                setWebDev(false);
                setOS(true);
                setML(false);
                setCP(false);

                setComProgC(false);
                setComFun(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                break;
            default:
                break;
        }
    }
    const handleSubjectClick = (val) => {
        switch (val) {
            case 'Computer Programming(C)':

                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComProgC(true);
                setComFun(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                break;
            case 'Computer Fundamentals':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(true);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                break;
            case 'Physics':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(true);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                break;
            case 'Chemistry':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(true);
                setCalculus(false);
                setElectricalCir(false);
                break;
            case 'Calculus':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(true);
                setElectricalCir(false);
                break;
            case 'Electrical Circuit Analysis':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(true);
                break;
            
            default:
                break;
        }
    }
    return (
        <Container maxWidth="sm" style={style}>
            <ContentSlider handleSubjectClick={handleSubjectClick} />
            <Containers 
            webDev={webDev}
            ML={ML} 
            OS={OS} 
            CP={CP}
            comFun={comFun}
            comProgC={comProgC}
            physics={physics}
            chemistry={chemistry}
            calculus={calculus}
            electricalCir={electricalCir}
            />
            <OtherContentSlider handleOthersClick={handleClick} />
        </Container>
    );
};

export default Main;