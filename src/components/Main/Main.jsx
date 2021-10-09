import React from 'react';
import Container from '@mui/material/Container';
import ContentSlider from './ContentSlider/ContentSlider';
import OtherContentSlider from './OtherContentSlider/OtherContentSlider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {AI, Bangla, Business, BasicElectronics, Calculus, ComputerProgrammingC, ComputerFundamentals, Chemistry, CompetetiveProgramming, Compiler, ComputerArchitecture, ComputerNet, ComputerProgCPP, Cryptography, Database, DataStructure, DataTeleCom, DesignAnalysis, DigitalSystem, DiscreteMath, Ecommerce, Economics, ElectricalCircuitAnalysis, English, FiniteAutomata, Graphics, ImageProcessing, Java, LinearAlgebra, MachineDataMine, MachineLearning, MathForCom, Microprocessor, NumericalMath, ODE, OperatingSystem, LinuxOS, Peripheral, Physics, Probability, Sociology, SoftwareDesign, SoftwareEng, Statistics, SystemProg, WebDev} from './Container';

const style = {
    display: 'flex',
    maxWidth: '100vw',
    maxHeight: '85vh',
}

const Main = () => {
    
    return (
        <Router>
        <Container maxWidth="sm" style={style}>
            <ContentSlider />
            <Switch>
                <Route exact path="/"><WebDev /></Route>
                <Route exact path="/webDev"><WebDev /></Route>
                <Route exact path="/machineLearning"><MachineLearning /></Route>
                <Route exact path="/CompetetiveProgramming"><CompetetiveProgramming /></Route>
                <Route exact path="/LinuxOS"><LinuxOS /></Route>
                <Route exact path="/ArtificialIntelligence"><AI /></Route>
                <Route exact path="/ComputerProgrammingWithC"><ComputerProgrammingC /></Route>
                <Route exact path="/ComputerFundamentals"><ComputerFundamentals /></Route>
                <Route exact path="/Chemistry"><Chemistry /></Route>
                <Route exact path="/Physics"><Physics /></Route>
                <Route exact path="/Calculus"><Calculus /></Route>
                <Route exact path="/ElectricalCircuitAnalysis"><ElectricalCircuitAnalysis /></Route>
                <Route exact path="/DiscreteMathematics"><DiscreteMath /></Route>
                <Route exact path="/ComputerProgrammingWithCPP"><ComputerProgCPP /></Route>
                <Route exact path="/DigitalSystem"><DigitalSystem /></Route>
                <Route exact path="/BasicElectronics"><BasicElectronics /></Route>
                <Route exact path="/LinearAlgebra"><LinearAlgebra /></Route>
                <Route exact path="/IntroductionstoStatistics"><Statistics /></Route>
                <Route exact path="/DataStructure"><DataStructure /></Route>
                <Route exact path="/ObjectOrientedProgrammingWithJava"><Java /></Route>
                <Route exact path="/ComputerArchitecture"><ComputerArchitecture /></Route>
                <Route exact path="/OrdinaryDifferentialEquation"><ODE /></Route>
                <Route exact path="/IntroductiontoProbability"><Probability /></Route>
                <Route exact path="/IntroductiontoBusiness"><Business /></Route>
                <Route exact path="/DatabaseSystem"><Database /></Route>
                <Route exact path="/MicroprocessorandAssemblyLanguages"><Microprocessor /></Route>
                <Route exact path="/DesignAnalysisofAlgorithms"><DesignAnalysis /></Route>
                <Route exact path="/NumericalAnalysis"><NumericalMath /></Route>
                <Route exact path="/Economics"><Economics /></Route>
                <Route exact path="/Sociology"><Sociology /></Route>
                <Route exact path="/PeripheralandInterfacing"><Peripheral /></Route>
                <Route exact path="/DataandTeleCommunications"><DataTeleCom /></Route>
                <Route exact path="/SoftwareDesignPattern"><SoftwareDesign /></Route>
                <Route exact path="/MathematicsforComputerScience"><MathForCom /></Route>
                <Route exact path="/ProfessionalEnglish"><English /></Route>
                <Route exact path="/BangladeshStudies"><Bangla /></Route>
                <Route exact path="/SoftwareEngineering"><SoftwareEng /></Route>
                <Route exact path="/ComputerNetworking"><ComputerNet /></Route>
                <Route exact path="/FiniteLangaugeAutomataandComputation"><FiniteAutomata /></Route>
                <Route exact path="/SystemProgramming"><SystemProg /></Route>
                <Route exact path="/OperatingSystem"><OperatingSystem /></Route>
                <Route exact path="/ArtificialIntelligence"><AI /></Route>
                <Route exact path="/CompilerDesignandConstruction"><Compiler /></Route>
                <Route exact path="/ComputerGraphics"><Graphics /></Route>
                <Route exact path="/EcommerceandWebEngineering"><Ecommerce /></Route>
                <Route exact path="/DigitalImageProcessing"><ImageProcessing /></Route>
                <Route exact path="/CryptographyandNetworkSecurity"><Cryptography /></Route>
                <Route exact path="/MachineLearningandDataMining"><MachineDataMine /></Route>

            </Switch>
            <OtherContentSlider />
        </Container>
        </Router>
    );
};

export default Main;