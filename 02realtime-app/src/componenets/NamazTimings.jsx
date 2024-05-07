import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./NamazTimings.css"

function NamazTimings() {
  //for date:

  const today = Date.now();

  //the UK format gives date of the format: dd/mm/yyy

  const currentDate = new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);
  //the API requires the format dd-mm-yyyy:
  const formattedDate = `${currentDate.charAt(0)}${currentDate.charAt(
    1
  )}-${currentDate.charAt(3)}${currentDate.charAt(4)}-${currentDate.charAt(
    6
  )}${currentDate.charAt(7)}${currentDate.charAt(8)}${currentDate.charAt(9)}`;

  console.log(`this is the date: ${formattedDate}`);

  //latitutes and longitudes set for karachi:

  const url = `http://api.aladhan.com/v1/timings/${formattedDate}?latitude=24.860966&longitude=66.990501&method=2`;
  const [time, setTime] = useState("Loading");
  //const [Namaz, setNamaz] = useState([]);
  const namazArray=["Fajr","Dhuhr","Asr","Maghrib","Isha"];

  const getNamazTimings = async () => {
    let response = await axios.get(url);
    setTime(response.data.data.timings);
    
    //setNamaz(Object.keys(response.data.data.timings));
    //console.log(Namaz);
  };
  useEffect(() => {
    getNamazTimings();
  }, []);

  

  return (
    <>
      <h1 id="namazHeading">Namaz Timings Today</h1>
      <div className="namazContainer">
      
      {namazArray.map((namaz)=>{
        return (
        <>
        
             <p className="namaz">   {namaz} : {time[namaz]   }</p>
             <p className="dots">...</p>
        </>

        )

      })}
      
      {/* {Namaz.map((item) => {
        return (
          <>
            <p>{item}:{time[item]} </p>
            {/* <p>{time[item]}</p> */}
     </div>
    </>
  )
      
    
  
}

export default NamazTimings;
