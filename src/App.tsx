import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sec1 from './Components/HomePage/Sec1/Sec1';
import Sec2 from './Components/HomePage/Sec2/Sec2';
import Sec3 from './Components/HomePage/Sec3/Sec3';

function App() {

 
  return (
    <div>
      <Header/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
    </div>
  );
}

export default App;
