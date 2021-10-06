import React from 'react';
import useStyles from './style';
import WebDev from './WebDev/WebDev';
import OperatingSystem from './OperatingSystem/OperatingSystem';
import MachineLearning from './MachineLearning/MachineLearning';
import CompetetiveProgramming from './CompetetiveProgramming/CompetetiveProgramming';

const Containers = ({ webDev, OS, ML, CP }) => {
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
        </div>
    );
};

export default Containers;