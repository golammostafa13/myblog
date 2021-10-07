import React from 'react';
import useStyles from './style';
import WebDev from './WebDev/WebDev';
import OperatingSystem from './OperatingSystem/OperatingSystem';
import MachineLearning from './MachineLearning/MachineLearning';
import CompetetiveProgramming from './CompetetiveProgramming/CompetetiveProgramming';
import ComputerFundamentals from './ComputerFundamentals/ComputerFundamentals';
import ComputerProgrammingC from './ComputerProgrammingC/ComputerProgrammingC';
import Physics from './Physics/Physics';
import Chemistry from './Chemistry/Chemistry';
import Calculus from './Calculus/Calculus';
import ElectricalCircuitAnalysis from './ElectricalCircuiteAnalysis/ElectricalCircuitAnalysis';

const Containers = (props) => {

    const { webDev, OS, ML, CP, comProgC, comFun, physics, chemistry, calculus, electricalCir } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
           {
               webDev && <WebDev />
           }
           {
               OS && <OperatingSystem />
           }
           {
               ML && <MachineLearning />
           }
           {
               CP && <CompetetiveProgramming />
           }
           {
               comFun && <ComputerFundamentals />
           }
           {
               comProgC && <ComputerProgrammingC />
           }
           {
               physics && <Physics />
           }
           {
               chemistry && <Chemistry />
           }
           {
               calculus && <Calculus />
           }
           {
               electricalCir && <ElectricalCircuitAnalysis />
           }
        </div>
    );
};

export default Containers;