import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert = (message, type)=>
  {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode =()=>{
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enable","success");
      document.title = "My App Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enable","success");
      document.title = "My App Light Mode";
    }
  }
  return (
  <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About></About>}>
            
          </Route>
        
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
            
          </Route>
    </Routes>
      
    </div>
    </BrowserRouter>
   
  </>
  );
}

export default App;
