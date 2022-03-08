import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1 className="text-uppercase">{props.data.cityName}</h1>
      <h5>
        <FormatedDate />
      </h5>
      <div className="row first-row align-items-center">
        <ul className="col-md-4 column-1 text-center">
          <WeatherIcon
            code={props.data.icon}
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
            <span className="temperature">{Math.round(props.data.temp)}</span>
            <span className="unit float-left">°C </span>
          </li>
        </ul>
        <ul className="col-md-4 float-left column-3">
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
