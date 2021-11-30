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



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/DentalInstruments" element={<DentalInstruments/>}/>
        {/* <Route path="/about" component={}></Route> */}
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
