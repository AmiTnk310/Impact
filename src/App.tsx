import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/Homepage';
import Sec2 from './Components/HomePage/Sec2';
import Sec3 from './Components/HomePage/Sec3';

function App() {

 
  return (
    <div>
      <Header/>
      <HomePage/>
      <Sec2/>
      <Sec3/>
    </div>
  );
}

export default App;
