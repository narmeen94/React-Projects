//import logo from './logo.svg';
//import './App.css';
import Navbar from "./componenets/Navbar";
import Textform from "./componenets/Textform";
//import About from './componenets/About';
import React, { useState } from "react";
import Alert from "./componenets/Alert";

function App() {
  //my-10 in the container my-3 is margin y axis in bootstrap container class.

  const [mode, setMode] = useState("light");

  const [modeText, setModeText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  const [color, setColor] = useState("white");
  
  const [pinkText, setpinkText] = useState("Enable Pink Theme");

  const pinkStyle = () => {
    if (color === "white") {
      setColor("#eaa0a2");
      setpinkText("Disable Pink Theme ");
      //setTextColor("magenta")
      document.body.style.backgroundColor = "#eaa0a2";
      document.getElementById("lowerDiv").style.color = "white"
      document.getElementById("upperDiv").style.color = "white"
      
    } else {
      setColor("white");
      setpinkText("Enable Pink Theme");
      document.body.style.backgroundColor = "white";
      document.getElementById("lowerDiv").style.color = "black"
      document.getElementById("upperDiv").style.color = "black"
    
    }
  };

  //creating a methof so we can set setAlert
  const showAlert = (message, type) => {
    //creating an object in setalert so we can use it in multiple places.
    setAlert({
      msg: message,
      type: type,
    });
    //after 2 seconds, the alert will automatically vanish so we add a set Timeout:
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleStyle = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode enabled!", "success");
      setModeText("Disable Dark Mode");

      document.body.style.backgroundColor = "#092847";
      showAlert("Dark mode enabled!", "success");
    } else {
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled!", "success");
    }
  };
  return (
    <>
      <Navbar
        className="navBar"
        title="Text Analyzer"
        tab1="About Me"
        mode={mode}
        toggleStyle={toggleStyle}
        modeText={modeText}
        color={color}
        pinkStyle={pinkStyle}
        pinkText={pinkText}
      />
      ;
      <Alert alert={alert} />
      {/* <div className="container my-10"> */}
      {/* passing the showAlert method in textForm as props so that we can use it inside the different utilities methods */}
      <Textform
       // textColor={textColor}
        showAlert={showAlert}
        color={color}
        pinkStyle={pinkStyle}
        heading="Enter your text here:"
        mode={mode}
        
      />
      {/* <About/> */}
      {/* </div> */}
    </>
  );
}

export default App;
