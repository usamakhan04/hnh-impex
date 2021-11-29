import './App.css';
import '../src/assets/css/styles.css'
import '../src/assets/css/320.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import '../src/assets/css/480.css'
import '../src/assets/css/768.css'
// import '../src/assets/css/flexslider.css'
// import '../src/assets/css/normalize.css'
// import '../src/assets/css/prettyPhoto.css'
import '../src/assets/css/skeleton.css'
// import '../src/assets/css/touchTouch.css'
// import '../src/assets/css/ui.css'
import About from './components/About';
import Home from './Home';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home /> }/>
          <Route path='/About' element={<About />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
