import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode =()=>{
    if(mode === 'light'){
      document.body.style.backgroundColor='black';
      setMode('dark')
    }else{
      document.body.style.backgroundColor='white';
      setMode('light')
    }
  }
  return (
   <>
    <Navbar title="TextUtils1" about="AboutText" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      {/* <About></About> */}
      <TextForm heading="Enter the text to analyze" mode={mode} />
    </div>
   </>
  );
}

export default App;
