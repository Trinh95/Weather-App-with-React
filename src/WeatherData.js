import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div class="props.data">
      <h1 class="text-uppercase">{props.data.cityName}</h1>
      <h5>
        <FormatedDate />
      </h5>
      <div className="row first-row align-items-center">
        <ul className="col-md-4 column-1 text-center">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="mainIcon"
          />
          <br />
          <strong className="description text-capitalize">
            {props.data.description}
          </strong>
        </ul>
        <ul className="col-md-4 column-2 text-center">
          <li>
            <WeatherTemperature Ctemp={props.data.temp} />
          </li>
        </ul>
        <ul className="col-md-4 text-center column-3">
          <li>
            <strong>Feels like: </strong>
            {Math.round(props.data.feelLike)}°C
          </li>
          <li>
            <strong>Humidity: </strong>
            {props.data.humidity}%
          </li>
          <li>
            <strong>Wind: </strong>
            {Math.round(props.data.wind)} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
