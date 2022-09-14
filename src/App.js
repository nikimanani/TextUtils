
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtil-Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtil is an amazing app";
      // }, 2000)
      // setInterval(() => {
      //   document.title = "Install textUtil app";
      // }, 1500)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtil-Light Mode"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" About="About Me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to Change in Any Case" mode={mode} />
      </div>
    </>

  );
}

export default App;
