//import logo from './logo.svg';
import './index.css';
import Navbar from "./componenets/Navbar";
import Textform from "./componenets/Textform";
import About from './componenets/About';
import React, { useState } from "react";
import Alert from "./componenets/Alert";
import { Routes, Route, Outlet} from "react-router-dom";

// switch has been removed from react-router-dom, so i used routes instead.


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

      document.body.style.backgroundColor = "#eaa0a2";
      document.getElementById("lowerDiv").style.color = "white";
      document.getElementById("upperDiv").style.color = "white";
    } else {
      setColor("white");
      setpinkText("Enable Pink Theme");
      document.body.style.backgroundColor = "white";
      document.getElementById("lowerDiv").style.color = "black";
      document.getElementById("upperDiv").style.color = "black";
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

      //this code below flashes in the title bar of the website "waow, it's dark. Do you like dark?"

      // setInterval(() => {
      //   document.title="waow, it's dark";
        
      // }, 2000);
      // setInterval(() => {
      //   document.title="do you like dark?";
        
      // }, 1500);
      

      document.body.style.backgroundColor = "#092847";
      showAlert("Dark mode enabled!", "success");
    } else {
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled!", "success");
      
    }
  };

  const toggleColor = (mode) => {
    if (mode === "primary") {
      
      document.body.style.backgroundColor = "blue";
      
    } 
    else if (mode === "warning"){
      document.body.style.backgroundColor = "yellow";

    }
    else if (mode === "danger"){
      document.body.style.backgroundColor = "red";
      
      
    }
    else if (mode === "success"){
      document.body.style.backgroundColor = "green";
    }
    else if (mode === "dark"){
      document.body.style.backgroundColor = "black";
    }
  }

  return (
    <>
      <Navbar
        className="navBar"
        title="Text Analyzer"
        tab1="About"
        mode={mode}
        toggleStyle={toggleStyle}
        modeText={modeText}
        color={color}
        pinkStyle={pinkStyle}
        pinkText={pinkText}
        toggleColor={toggleColor}
      />

      <Alert alert={alert} />
      
      <Routes>
          <Route path= "/"element={<Textform showAlert={showAlert} color={color} pinkStyle={pinkStyle} heading="Enter your text here:" mode={mode} />}></Route>
        
          <Route path="contact" element={<Textform showAlert={showAlert} color={color} pinkStyle={pinkStyle} heading="Enter your text here:" mode={mode} />} />
          <Route path="about" element={<About mode={mode}/>} />
      
          
        
      </Routes>
      
      <Outlet />
    </>
  );
}

export default App;
