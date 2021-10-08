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

    const [discrete, setDiscrete] = React.useState('false');
    const [computerProgCPP, setComputerProgCPP] = React.useState('false');
    const [digitalSystem, setDigitalSystem] = React.useState('false');
    const [basicElec, setBasicElec] = React.useState('false');
    const [linear, setLinear] = React.useState('false');
    const [statistics, setStatistics] = React.useState('false');

    const [dataStructure, setDataStructure] = React.useState('false');
    const [java, setJava] = React.useState('false');
    const [computerArchitecture, setComputerArchitecture] = React.useState('false');
    const [ode, setOde] = React.useState('false');
    const [probability, setProbability] = React.useState('false');
    const [business, setBusiness] = React.useState('false');

    const [database, setDatabase] = React.useState('false');
    const [microprocessor, setMicroprocessor] = React.useState('false');
    const [designAnalysis, setDesignAnalysis] = React.useState('false');
    const [numerical, setNumerical] = React.useState('false');
    const [economics, setEconomics] = React.useState('false');
    const [sociology, setSociology] = React.useState('false');

    const [peripheral, setPeripheral] = React.useState('false');
    const [dataTele, setDataTele] = React.useState('false');
    const [softwareDesign, setSoftwareDesign] = React.useState('false');
    const [mathematicsForCom, setMathematicsForCom] = React.useState('false');
    const [english, setEnglish] = React.useState('false');
    const [bangla, setBangla] = React.useState('false');

    const [softwareEng, setSoftwareEng] = React.useState('false');
    const [comNetworking, setComNetworking] = React.useState('false');
    const [finiteAuto, setFiniteAuto] = React.useState('false');
    const [systemProgramming, setSystemProgramming] = React.useState('false');
    const [operatingSystem, setOperatingSystem] = React.useState('false');

    const [ai, seAi] = React.useState('false');
    const [compiler, setCompiler] = React.useState('false');
    const [graphics, setGraphics] = React.useState('false');
    const [ecommerce, setEcommerce] = React.useState('false');

    const [image, setImage] = React.useState('false');
    const [crypto, setCrypto] = React.useState('false');
    const [machineLearning, setMachineLearning] = React.useState('false');

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
                
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
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
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
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
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
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
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
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
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
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
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;
            
            case 'Discrete Mathematics':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(true);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Computer Programming(CPP)':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(true);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Digital System':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(true);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Basic Electronics':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(true);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Linear Algebra':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(true);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Introductions to Statistics':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(true);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Data Structure':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(true);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Object Oriented Programming(JAVA)':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(true);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);

                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);

                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Computer Architecture':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(true);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Ordinary Differential Equation':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(true);
                setProbability(false);
                setBusiness(false);

                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);

                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);

                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);

                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Introduction to Probability':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(true);
                setBusiness(false);

                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);

                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Introduction to Business':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(true);

                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);

                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Database System':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);

                setDatabase(true);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);

                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Microprocessor and Assembly Languages':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(true);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Design Analysis of Algorithms':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(true);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Numerical Analysis':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);

                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);

                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(true);
                setEconomics(false);
                setSociology(false);

                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);

                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);

                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Economics':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(true);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;
            case 'Sociology':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);

                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);

                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(true);

                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Peripheral and Interfacing':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(true);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Data & Telecommunications':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(true);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Software Design Pattern':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(true);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Mathematics for Computer Science':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(true);
                setEnglish(false);
                setBangla(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Professional English':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(true);
                setBangla(false);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Bangladesh Studies':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(true);
                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Software Engineering':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);
                
                setSoftwareEng(true);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Computer Networking':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(true);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;
            
            case 'Finite Langauge, Automata and Computation':
                console.log(val);
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(true);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'System Programming':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(true);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Operating System':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(true);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Artificial Intelligence':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(true);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Compiler Design and Construction':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(true);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Computer Graphics':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(true);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'E-commerce and Web Engineering':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(true);
                setImage(false);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Digital Image Processing':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(true);
                setCrypto(false);
                setMachineLearning(false);
                break;

            case 'Cryptography and Network Security':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(true);
                setMachineLearning(false);
                break;

            case 'Machine Learning and Data Mining':
                setWebDev(false);
                setOS(false);
                setML(false);
                setCP(false);

                setComFun(false);
                setComProgC(false);
                setPhysics(false);
                setChemistry(false);
                setCalculus(false);
                setElectricalCir(false);
                setDiscrete(false);
                setComputerProgCPP(false);
                setDigitalSystem(false);
                setBasicElec(false);
                setLinear(false);
                setStatistics(false);
                setDataStructure(false);
                setJava(false);
                setComputerArchitecture(false);
                setOde(false);
                setProbability(false);
                setBusiness(false);
                setDatabase(false);
                setMicroprocessor(false);
                setDesignAnalysis(false);
                setNumerical(false);
                setEconomics(false);
                setSociology(false);
                setPeripheral(false);
                setDataTele(false);
                setSoftwareDesign(false);
                setMathematicsForCom(false);
                setEnglish(false);
                setBangla(false);

                setSoftwareEng(false);
                setComNetworking(false);
                setFiniteAuto(false);
                setSystemProgramming(false);
                setOperatingSystem(false);
                seAi(false);
                setCompiler(false);
                setGraphics(false);
                setEcommerce(false);
                setImage(false);
                setCrypto(false);
                setMachineLearning(true);
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
            discrete={      discrete}
            computerProgCPP={computerProgCPP}
            digitalSystem={ digitalSystem}
            basicElec={     basicElec}
            linear={        linear}
            statistics={    statistics}
            dataStructure={ dataStructure}
            java={          java}
            computerArchitecture={computerArchitecture}
            ode={           ode}
            probability={   probability}
            business={      business}
            database={      database}
            microprocessor={microprocessor}
            designAnalysis={designAnalysis}
            numerical={     numerical}
            economics={     economics}
            sociology={     sociology}
            peripheral={    peripheral}
            dataTele={      dataTele}
            softwareDesign={softwareDesign}
            mathematicsForCom={mathematicsForCom}
            english={       english}
            bangla={bangla}
            softwareEng={   softwareEng}
            comNetworking={ comNetworking}
            finiteAuto={    finiteAuto}
            systemProgramming={systemProgramming}
            operatingSystem={operatingSystem}
            ai={            ai}
            compiler={      compiler}
            graphics={      graphics}
            ecommerce={     ecommerce}
            image={         image}
            crypto={        crypto}
            machineLearning={machineLearning}
            />
            <OtherContentSlider handleOthersClick={handleClick} />
        </Container>
    );
};

export default Main;