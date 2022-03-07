import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let Ctemp = props.Ctemp;
  let [unit, setUnit] = useState("C");

  function showFTemp(event) {
    event.preventDefault();
    setUnit("F");
  }

  function showCTemp(event) {
    event.preventDefault();
    setUnit("C");
  }

  if (unit === "C") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(Ctemp)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFTemp}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let Ftemp = (Ctemp * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(Ftemp)}</span>
        <span className="unit">
          <a href="/" onClick={showCTemp}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
