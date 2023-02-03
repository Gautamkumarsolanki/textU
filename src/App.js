import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';

function App() {
  const [mode, setMode] = useState('light')
  const [message, setMessage] = useState(null);
  const dataTransfer = (feature) => {
    setMessage({
      type: 'success',
      message: feature
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      setMessage({
        message: 'Dark Mode Enabled Successfully!!',
        type: 'success'
      })
      setInterval(() => {
        document.title = "Virus Found"
      }, 2000);
      setInterval(() => {
        document.title = "Please Update"
      }, 1500);
      document.title = "TextUtils-Dark Mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setMessage({
        message: 'Light Mode Enabled Successfully',
        type: 'success'
      })
      document.title = "TextUtils-Light Mode"
    }
    console.log("Mode switched")
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Routes> */}
          {/* <Route path='/' element={ */}
          <Index mode={mode} data={message} dataTransfer={dataTransfer} />
          {/* }/> */}
          {/* <Route path='/about' element={<About/>}/> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
