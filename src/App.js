import './App.css';
import '../src/assets/css/styles.css'
import '../src/assets/css/320.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from 'react-dom';
// import '../src/assets/css/480.css'
import '../src/assets/css/768.css'
// import '../src/assets/css/flexslider.css'
// import '../src/assets/css/normalize.css'
// import '../src/assets/css/prettyPhoto.css'
import '../src/assets/css/skeleton.css'
// import '../src/assets/css/touchTouch.css'
// import '../src/assets/css/ui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './components/About';
import Products from './components/Products';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import Home from './Home';
import DentalInstruments from './categories/Dental_Instruments/Dental_Instrument_Pages/DentalInstruments';
import ExtractingForceps from './categories/Dental_Instruments/Dental_Instrument_Pages/ExtractingForceps';
import RootElevators from './categories/Dental_Instruments/Dental_Instrument_Pages/RootElevators';
import FillingInstruments from './categories/Dental_Instruments/Dental_Instrument_Pages/FillingInstruments';
import DentalProbes from './categories/Dental_Instruments/Dental_Instrument_Pages/DentalProbes';
import PeriodontiaAndMallets from './categories/Dental_Instruments/Dental_Instrument_Pages/PeriodontiaAndMallets';
import CurretsAndScalars from './categories/Dental_Instruments/Dental_Instrument_Pages/CurretsAndScalars';
import ModelingAndMeasuringInstruments from './categories/Dental_Instruments/Dental_Instrument_Pages/ModelingAndMeasuringInstruments';
import WaxAndPlasterKnives from './categories/Dental_Instruments/Dental_Instrument_Pages/WaxAndPlasterKnives';
import ExplorersAndEndodonticInstruments from './categories/Dental_Instruments/Dental_Instrument_Pages/ExplorersAndEndodonticInstruments';
import Excavators from './categories/Dental_Instruments/Dental_Instrument_Pages/Excavators';
import HandlesForMouthMirrors from './categories/Dental_Instruments/Dental_Instrument_Pages/HandlesForMouthMirrors';
import Spatulas from './categories/Dental_Instruments/Dental_Instrument_Pages/Spatulas';
import NeedleHoldersAndSalivaEjectors from './categories/Dental_Instruments/Dental_Instrument_Pages/NeedleHoldersAndSalivaEjectors';
import Syringes from './categories/Dental_Instruments/Dental_Instrument_Pages/Syringes';
import DentalTweezers from './categories/Dental_Instruments/Dental_Instrument_Pages/DentalTweezers';
import RubberDamClamps from './categories/Dental_Instruments/Dental_Instrument_Pages/RubberDamClamps';
import CrownRazorsAndScissors from './categories/Dental_Instruments/Dental_Instrument_Pages/CrownRazorsAndScissors';
import CopperRingRemover from './categories/Dental_Instruments/Dental_Instrument_Pages/CopperRingRemover';
import BoneElevators from './categories/Dental_Instruments/Dental_Instrument_Pages/BoneElevators';
import PliersForOrthotonoics from './categories/Dental_Instruments/Dental_Instrument_Pages/PliersForOrthotonoics';
import ImpressionTrays from './categories/Dental_Instruments/Dental_Instrument_Pages/ImpressionTrays';
import Articulators from './categories/Dental_Instruments/Dental_Instrument_Pages/Articulators';
import Hollowares from './categories/Dental_Instruments/Dental_Instrument_Pages/Hollowares';
import MatrixRetainersAndMatrixBands from './categories/Dental_Instruments/Dental_Instrument_Pages/MatrixRetainersAndMatrixBands';
import Rongeurs from './categories/Dental_Instruments/Dental_Instrument_Pages/Rongeurs';
import SurgicalInstrument from './categories/Surgical_Instruments/Surgical_Instrument_Pages/SurgicalInstrument';
import Diagnostic from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Diagnostic';
import Scalpels from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Scalpels';
import Scissors from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Scissors';
import DissectingAndTissue from './categories/Surgical_Instruments/Surgical_Instrument_Pages/DissectingAndTissue';
import Sponge from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Sponge';
import VesselClips from './categories/Surgical_Instruments/Surgical_Instrument_Pages/VesselClips';
import Ligature from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Ligature';
import NeedleHolders from './categories/Surgical_Instruments/Surgical_Instrument_Pages/NeedleHolders';
import WoundRetractors from './categories/Surgical_Instruments/Surgical_Instrument_Pages/WoundRetractors';
import Probes from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Probes';
import SelfRetainingRetractors from './categories/Surgical_Instruments/Surgical_Instrument_Pages/SelfRetainingRetractors';
import AbdominalSurgery from './categories/Surgical_Instruments/Surgical_Instrument_Pages/AbdominalSurgery';
import GallBladder from './categories/Surgical_Instruments/Surgical_Instrument_Pages/GallBladder';
import GenitoUrinaryIntruments from './categories/Surgical_Instruments/Surgical_Instrument_Pages/GenitoUrinaryIntruments';
import VaginalSpecula from './categories/Surgical_Instruments/Surgical_Instrument_Pages/VaginalSpecula';
import UterineProbes from './categories/Surgical_Instruments/Surgical_Instrument_Pages/UterineProbes';
import BiopsyInstruments from './categories/Surgical_Instruments/Surgical_Instrument_Pages/BiopsyInstruments';
import Obstretrics from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Obstretrics';
import Cardiovascular from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Cardiovascular';
import BonePunches from './categories/Surgical_Instruments/Surgical_Instrument_Pages/BonePunches';
import Elevators from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Elevators';
import Mallets from './categories/Surgical_Instruments/Surgical_Instrument_Pages/Mallets';
import BoneHolding from './categories/Surgical_Instruments/Surgical_Instrument_Pages/BoneHolding';
import PlasterInstruments from './categories/Surgical_Instruments/Surgical_Instrument_Pages/PlasterInstruments';
import SuctionInstruments from './categories/Surgical_Instruments/Surgical_Instrument_Pages/SuctionInstruments';
import HospitalWares from './categories/Surgical_Instruments/Surgical_Instrument_Pages/HospitalWares';
import ScissorsWithTungston from './categories/Surgical_Instruments/Surgical_Instrument_Pages/ScissorsWithTungston';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>

        {/* HEADER MENU ROUTING STARTS HERE */}

        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* HEADER MENU ROUTING ENDS HERE */}

        {/* CATEGORIES ROUTING STARTS GOES HERE ---->  */}

        {/* DENTAL CATEGORY ROUTING STARTS HERE >>>>>>>  */}
        <Route path="/DentalInstruments" element={<DentalInstruments/>}/>
        <Route path="/ExtractingForceps" element={<ExtractingForceps/>}/>
        <Route path="/RootElevators" element={<RootElevators/>}/>
        <Route path="/FillingInstruments" element={<FillingInstruments/>}/>
        <Route path="/DentalProbes" element={<DentalProbes/>}/>
        <Route path="/PeriodontiaAndMallets" element={<PeriodontiaAndMallets/>}/>
        <Route path="/CurretsAndScalars" element={<CurretsAndScalars/>}/>
        <Route path="/ModelingAndMeasuringInstruments" element={<ModelingAndMeasuringInstruments/>}/>
        <Route path="/WaxAndPlasterKnives" element={<WaxAndPlasterKnives/>}/>
        <Route path="/ExplorersAndEndodonticInstruments" element={<ExplorersAndEndodonticInstruments/>}/>
        <Route path="/Excavators" element={<Excavators/>}/>
        <Route path="/HandlesForMouthMirrors" element={<HandlesForMouthMirrors/>}/>
        <Route path="/Spatulas" element={<Spatulas/>}/>
        <Route path="/NeedleHoldersAndSalivaEjectors" element={<NeedleHoldersAndSalivaEjectors/>}/>
        <Route path="/Syringes" element={<Syringes/>}/>
        <Route path="/DentalTweezers" element={<DentalTweezers/>}/>
        <Route path="/RubberDamClamps" element={<RubberDamClamps/>}/>
        <Route path="/CrownRazorsAndScissors" element={<CrownRazorsAndScissors/>}/>
        <Route path="/CopperRingRemover" element={<CopperRingRemover/>}/>
        <Route path="/BoneElevators" element={<BoneElevators/>}/>
        <Route path="/PliersForOrthotonoics" element={<PliersForOrthotonoics/>}/>
        <Route path="/ImpressionTrays" element={<ImpressionTrays/>}/>
        <Route path="/Articulators" element={<Articulators/>}/>
        <Route path="/Hollowares" element={<Hollowares/>}/>
        <Route path="/MatrixRetainersAndMatrixBands" element={<MatrixRetainersAndMatrixBands/>}/>
        <Route path="/Rongeurs" element={<Rongeurs/>}/>
        {/* DENTAL CATEGORY ROUTING ENDS HERE <<<<<<<<<<<  */}

         {/* SURGICAL CATEGORY ROUTING STARTS HERE >>>>>>>  */}
         <Route path="/SurgicalInstrument" element={<SurgicalInstrument/>}/>
         <Route path="/Diagnostic" element={<Diagnostic/>}/>
         <Route path="/Scalpels" element={<Scalpels/>}/>
         <Route path="/Scissors" element={<Scissors/>}/>
          <Route path="/DissectingAndTissue" element={<DissectingAndTissue/>}/>
          <Route path="/Sponge" element={<Sponge/>}/>
          <Route path="/VesselClips" element={<VesselClips/>}/>
          <Route path="/Ligature" element={<Ligature/>}/>
          <Route path="/NeedleHolders" element={<NeedleHolders/>}/>
          <Route path="/WoundRetractors" element={<WoundRetractors/>}/>
          <Route path="/Probes" element={<Probes/>}/>
          <Route path="/SelfRetainingRetractors" element={<SelfRetainingRetractors/>}/>
          <Route path="/AbdominalSurgery" element={<AbdominalSurgery/>}/>
          <Route path="/GallBladder" element={<GallBladder/>}/>
          <Route path="/GenitoUrinaryIntruments" element={<GenitoUrinaryIntruments/>}/>
          <Route path="/VaginalSpecula" element={<VaginalSpecula/>}/>
          <Route path="/UterineProbes" element={<UterineProbes/>}/>
          <Route path="/BiopsyInstruments" element={<BiopsyInstruments/>}/>
          <Route path="/Obstretrics" element={<Obstretrics/>}/>
          <Route path="/Cardiovascular" element={<Cardiovascular/>}/>
          <Route path="/BonePunches" element={<BonePunches/>}/>
          <Route path="/Elevators" element={<Elevators/>}/>
          <Route path="/Mallets" element={<Mallets/>}/>
          <Route path="/BoneHolding" element={<BoneHolding/>}/>
          <Route path="/PlasterInstruments" element={<PlasterInstruments/>}/>
          <Route path="/SuctionInstruments" element={<SuctionInstruments/>}/>
          <Route path="/HospitalWares" element={<HospitalWares/>}/>
          <Route path="/ScissorsWithTungston" element={<ScissorsWithTungston/>}/>

         {/* SURGICAL CATEGORY ROUTING ENDS HERE <<<<<<<<<  */}

        {/* <Route path="/about" component={}></Route> */}
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
