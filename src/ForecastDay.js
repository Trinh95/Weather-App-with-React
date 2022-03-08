import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  let maxTemp = props.data.temp.max;
  let minTemp = props.data.temp.min;
  let weatherIcon = props.data.weather[0].icon;
  let date = new Date(props.data.dt * 1000);
  let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
  let day = days[date.getDay()];
  return (
    <div className="ForecastDay">
      <div className="col text-center">
        <div className="weekday">{day}</div>
        <WeatherIcon code={weatherIcon} className="weather-icon" /> <br />
        <span className="max-temp">{Math.round(maxTemp)}°</span> |{" "}
        <span className="min-temp">{Math.round(minTemp)}°</span>
      </div>
    </div>
  );
}
