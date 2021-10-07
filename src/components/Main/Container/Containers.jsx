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
import DiscreteMath from './DiscreteMath/DiscreteMath';
import ComputerProgCPP from './ComputerProgCPP/ComputerProgCPP';
import DigitalSystem from './DigitalSystem/DigitalSystem';
import BasicElectronics from './BasicElectronics/BasicElectronics';
import LinearAlgebra from './LinearAlgebra/LinearAlgebra';
import Statistics from './Statistics/Statistics';
import DataStructure from './DataStructure/DataStructure';
import Java from './Java/Java';
import ComputerArchitecture from './ComputerArchitecture/ComputerArchitecture';
import Probability from './Probability/Probability';
import Business from './Business/Business';
import Database from './Database/Database';
import Microprocessor from './Microprocessor/Microprocessor';
import DesignAnalysis from './DesignAnalysis/DesignAnalysis';
import NumericalMath from './NumericalMath/NumericalMath';
import Economics from './Economics/Economics';
import Sociology from './Sociology/Sociology';
import Peripheral from './Peripheral/Peripheral';
import DataTeleCom from './DataTeleCom/DataTeleCom';
import SoftwareDesign from './SoftwareDesign/SoftwareDesign';
import MathForCom from './MathForCom/MathForCom';
import English from './English/English';
import SoftwareEng from './SoftwareEng/SoftwareEng';
import ComputerNet from './ComputerNet/ComputerNet';
import FiniteAutomata from './FiniteAutomata/FiniteAutomata';
import SystemProg from './SystemProg/SystemProg';
import AI from './AI/AI';
import Compiler from './Compiler/Compiler';
import Graphics from './Graphics/Graphics';
import Ecommerce from './Ecommerce/Ecommerce';
import ImageProcessing from './ImageProcessing/ImageProcessing';
import Cryptography from './Cryptography/Cryptography';
import MachineDataMine from './MachineDataMine/MachineDataMine';
import ODE from './ODE/ODE';

const Containers = (props) => {

    const { 
        webDev, OS, ML, CP, comProgC, comFun, physics, chemistry, calculus, electricalCir, discrete, computerProgCPP, digitalSystem, basicElec, linear, statistics, dataStructure, java, computerArchitecture, ode, probability, business, database,microprocessor, designAnalysis, numerical, economics, socioloyg, peripheral, dataTele, softwareDesign, mathematicsForCom, english, softwareEng, comNetworking, finiteAuto, systemProgramming, operatingSystem, ai, compiler, graphics, ecommerce,image, crypto, machineLearning } = props;

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
           {
               discrete && <DiscreteMath />
           }
           {
               computerProgCPP && <ComputerProgCPP />
           }
           {
               digitalSystem && <DigitalSystem />
           }
           {
               basicElec && <BasicElectronics />
           }
           {
               linear && <LinearAlgebra />
           }
           {
               statistics && <Statistics />
           }
            {dataStructure && <DataStructure />}
            {java && <Java />}
            {computerArchitecture && <ComputerArchitecture />}
            {ode && <ODE />}
            {probability && <Probability />}
            {business && <Business />}
            {database && <Database />}
            {microprocessor && <Microprocessor />}
            {designAnalysis && <DesignAnalysis />}
            {numerical && <NumericalMath />}
            {economics && <Economics />}
            {socioloyg && <Sociology />}
            {peripheral && <Peripheral />}
            {dataTele && <DataTeleCom />}
            {softwareDesign && <SoftwareDesign />}
            {mathematicsForCom && <MathForCom />}
            {english && <English />}
            {softwareEng && <SoftwareEng />}
            {comNetworking && <ComputerNet />}
            {finiteAuto && <FiniteAutomata />}
            {systemProgramming && <SystemProg />}
            {operatingSystem && <OperatingSystem />}
            {ai && <AI />}
            {compiler && <Compiler />}
            {graphics && <Graphics />}
            {ecommerce && <Ecommerce />}
            {image && <ImageProcessing />}
            {crypto && <Cryptography />}
            {machineLearning && <MachineDataMine />}
        </div>
    );
};

export default Containers;