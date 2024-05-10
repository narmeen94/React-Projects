

//by writing rcc, we can write the whole class below:

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route, Outlet} from "react-router-dom"
//import { useState } from "react";



export default class App extends Component {
  render() {

    // const [mode, setMode] = useState("light");

    // const [modeText, setModeText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //   if (mode === "light") {
    //     setMode("dark");
       
    //     setModeText("Disable Dark Mode");

        
  
    //     document.body.style.backgroundColor = "#092847";
        
    //   } else {
    //     setMode("light");
    //     setModeText("Enable Dark Mode");
    //     document.body.style.backgroundColor = "white";
        
        
    //   }
    // };

    return (
      <>
      
      
      <div>
      <Navbar />
      </div>

      {/* <div>
      <News/>
      </div> */}

      <Routes>
          <Route exact path= "/" element={<News key="general"pageSize={6} category='general'/>}/>
          <Route exact path="business" element={<News key="business" pageSize={6} category='business'/>} />
          <Route exact path="entertainment" element={<News key="entertainment" pageSize={6} category='entertainment'/>} />
          <Route exact path="science" element={<News key="science" pageSize={6} category='science'/>} />
          <Route exact path="sports" element={<News key="sports" pageSize={6} category='sports'/>} />
          <Route exact path="health" element={<News key="health" pageSize={6} category='health'/>} />
          <Route exact path="technology" element={<News key="technology" pageSize={6} category='technology'/>} />
      
          
        
      </Routes>
      
      <Outlet />

      
      

      </>
    )
  }
}
