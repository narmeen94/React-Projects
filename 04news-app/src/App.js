

//by writing rcc, we can write the whole class below:

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route, Outlet} from "react-router-dom"
import "./App.css"
//import Dollarrate from './components/Dollarrate'




export default class App extends Component {
  mode = "light";

  constructor(){
    super();
    this.state ={
        mode: this.mode     

    }
}
toggleStyle = ()=>{
  if (this.state.mode ==="light"){
    this.setState({
      mode : "dark"
    })
    document.body.style.backgroundColor = "#092847";
  }
  else {
    this.setState({
      mode : "light"
    })
    
    document.body.style.backgroundColor = "white";
  }

  
  
}

  render() {

    
    return (
      <>
      
      
     
      <Navbar toggleStyle={this.toggleStyle} mode={this.state.mode}/>

      
      
      

      <Routes>
          <Route exact path= "/" element={<News mode={this.state.mode} key="general" pageSize={6} category='general'/>}/>
          <Route exact path="business" element={<News mode={this.state.mode} key="business" pageSize={6} category='business'/>} />
          <Route exact path="entertainment" element={<News mode={this.state.mode} key="entertainment" pageSize={6} category='entertainment'/>} />
          <Route exact path="science" element={<News mode={this.state.mode} key="science" pageSize={6} category='science'/>} />
          <Route exact path="sports" element={<News mode={this.state.mode} key="sports" pageSize={6} category='sports'/>} />
          <Route exact path="health" element={<News mode={this.state.mode} key="health" pageSize={6} category='health'/>} />
          <Route exact path="technology" element={<News mode={this.state.mode} key="technology" pageSize={6} category='technology'/>} />
      
          
        
      </Routes>
      
      <Outlet />

      

      
      

      </>
    )
  }
}
