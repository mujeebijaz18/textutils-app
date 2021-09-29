import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('light');

  const [modeText, setModeText] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setColor('dark');
      document.body.style.backgroundColor = '#444';
      showAlert('Dark mode is Enabled', 'success');
      setModeText('Light Mode');
    } else {
      setMode('light');
      setColor('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is Enabled', 'success');
      setModeText('Dark Mode');
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Text Utils" mode={mode} color={color} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
