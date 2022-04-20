import './App.css';
import React from 'react';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import YearData from './components/YearData';
import Data from './components/Data';

function App() {
  return (
    <>
    <Navigation/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<YearData/>} exact></Route>
      <Route path="/main" element={<Data/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
