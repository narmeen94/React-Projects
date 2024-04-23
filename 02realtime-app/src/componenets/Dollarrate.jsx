import axios from "axios";
import React from "react";
import { useState } from "react";
import "./DollarRate.css"
import { useEffect } from "react";

function Dollarrate() {
  //const [first,setfirst]=useState(value) -------- first:state variable,
  //setfirst: the function to set the "first" ,
  //value:initial value assigned to "first"
  const [dollar, setDollar] = useState("Loading");
  const apiKey = "91b4c2a6714f4bbf893f08bdbd9facdc";
  const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

  const getPkr = async () => {
      let response = await axios.get(url); //let isliye use kia hai , kyon k var se agar 2 times humne same variable define krdia
      
      //to wo error nhi dega, but ;let will give. so common practice= use let or const. not var.
      console.log(response.data.rates.PKR)
      //console.log(response["data"]["rates"]["PKR"])
      setDollar(response.data.rates.PKR);
      
      // data:{asr:12:00,duhr:12}
      // const [asr,setasr]=useState("Press button tto view")
      // setasr(response.data.asr)
      // setasr(response.data.duhr)
      
    };
    useEffect(()=>{
        getPkr();
    },[])

  return (
      <>
    <div className="container">
      <p className="first">Dollar rate in Pakistan today</p>
      <p id="second">Rate: {dollar}</p>
      {/* <button onClick={getPkr}>See Rate</button> */}
      {/* <button onClick= {() =>(setDollar(dollar+1))}> add here</button>
        <p>{dollar}</p> */}
    </div>
      </>
  );
}

export default Dollarrate;
