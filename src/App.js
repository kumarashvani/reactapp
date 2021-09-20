// import logo from './logo.svg';
import './App.css';
import { Menu } from './Navbar/Menu';
import { State } from './State/State';
import { About } from './About/About';
import { Home } from './Home/Home';
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light')

  const togleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      // document.body.style.backgroundColor = '#fff'; //we can also use like this
    } else {
      setMode('dark');
      // document.body.style.backgroundColor = '#333';   //we can also use like this
    }
  }

  return (
    <>
    <Menu title="React App" aboutText = 'About Us' mode={mode} togleMode={togleMode}/>
    <Home/>
    <State mode={mode}/>
    <About mode={mode}/>
    </>
  );
}

export default App;
