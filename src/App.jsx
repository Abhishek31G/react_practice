import { useState } from 'react';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({msg : message,
        type : type})

        setTimeout(()=>{
          setAlert(null);
        },2000);
  }

  const changeTheme = ()=>{
    if(mode==='light' || mode==='dark' || mode==='yellow'){
      setMode('red')
      document.body.style.backgroundColor = "#FF0000";
      showAlert("Red mode has been enabled", "success");
      document.title = "TextUtils- Red Mode";
    }else if(mode==='light' || mode==='dark' || mode==='red'){
        setMode('yellow')
        document.body.style.backgroundColor = "yellow";
        showAlert("Yellow mode has been enabled", "success"); 
        document.title = "TextUtils- Yellow Mode";
    }
  }

  const toggleMode = ()=>{
    if(mode==='light'|| mode==='yellow' || mode==='red'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode";
      // setInterval(function(){
      //   document.title = "TextUtils- Dark Mode"
      // },1500);

      // setInterval(function(){
      //   document.title = "TextUtils is Amazing!"
      // },2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  }
  return (
    <>         
      <Router>                          
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} changeTheme={changeTheme}/>
      <Alert alert={alert}/> 
      <div className="container my-3">
        
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter text to analyze..." mode={mode}/>}>
            
          </Route>
        </Routes>

      </div>
      </Router>
    </>
  );
}

export default App
