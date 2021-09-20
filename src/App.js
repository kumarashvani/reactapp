// import logo from './logo.svg';
import './App.css';
import { Menu } from './Navbar/Menu';
import { State } from './State/State';
import { About } from './About/About';
import { Home } from './Home/Home';
import React, { useState } from 'react'
import { Alert } from './Alert/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const togleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      // document.body.style.backgroundColor = '#fff'; //we can also use like this
      showAlert('Light mode has been enabled', "success");
    } else {
      setMode('dark');
      // document.body.style.backgroundColor = '#333';   //we can also use like this
      showAlert('Dark mode has been enabled', "success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  

  return (
    <>
    <Menu title="React App" aboutText = 'About Us' mode={mode} togleMode={togleMode}/>
    <Alert alert={alert}/>
    <Home/>
    <State mode={mode} showAlert={showAlert}/>
    <About mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
