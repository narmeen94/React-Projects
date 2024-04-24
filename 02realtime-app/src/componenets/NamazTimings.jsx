import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function NamazTimings() {
  const url =
    "http://api.aladhan.com/v1/timings/23-04-2024?latitude=24.860966&longitude=66.990501&method=2";
  const [time, setTime] = useState("Loading");
  const [Namaz, setNamaz] = useState([]);

  const getNamazTimings = async () => {
    let response = await axios.get(url);
    setTime(response.data.data.timings);
    console.log(time)
    setNamaz(Object.keys(response.data.data.timings));
    console.log(Namaz);
  };
  useEffect(() => {
    getNamazTimings();
  }, []);

  return (
    <>
      <h1>Namaz chart</h1>
      {Namaz.map((item) => {
        return (
          <>
            <p>{item}</p>
            <p>{time[item]}</p>
          </>
        );
      })}
    </>
  );
}

export default NamazTimings;
