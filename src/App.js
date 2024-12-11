import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router";

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode =()=>{
    if(mode === 'light'){
      document.body.style.backgroundColor='black';
      setMode('dark');
      showAlert('Dark Mode Enabled','success')
    }else{
      document.body.style.backgroundColor='white';
      setMode('light')
      showAlert('Light Mode Enabled','success')
    }
  }

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  return (
   <>
   <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}></Alert>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}></Route>
      </Routes>
      {/* <About></About> */}
      {/* <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> */}
    </div>
   </Router>
   </>
  );
}

export default App;
