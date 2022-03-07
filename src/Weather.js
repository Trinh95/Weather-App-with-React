import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState({});

  function displayForecast(response) {
    setWeatherData({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelLike: response.data.main.feels_like,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      time: "Saturday 09:35",
    });
  }

  function detectCity(props) {
    setCity(props.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5d3b346f3e3af0daf6465f0d5ed890f4`;
    axios.get(apiUrl).then(displayForecast);
  }
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter a city"
            className="col-sm-6 form-control cityInput"
            onChange={detectCity}
          />
          <input
            type="submit"
            className="col-sm-1 btn btn-primary searchButton"
            value="Search"
          />
          <button className="col-sm-1 btn btn-outline-success locationButton text-center">
            📍
          </button>
        </div>
      </form>

      <h1>{city}</h1>
      <h5>{weatherData.time}</h5>

      <div className="row first-row align-items-center">
        <ul className="col-md-4 column-1 text-center">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="mainIcon"
          />
          <br />
          <strong className="description">{weatherData.description}</strong>
        </ul>
        <ul className="col-md-4 column-2 text-center">
          <li>
            <span className="temperature">{Math.round(weatherData.temp)}</span>
            <span className="unit">
              <a href="/" className="inactive">
                °C
              </a>
              |<a href="/">°F</a>
            </span>
          </li>
        </ul>
        <ul className="col-md-4 text-center column-3">
          <li>
            <strong>Feels like: </strong>
            {Math.round(weatherData.feelLike)}°C
          </li>
          <li>
            <strong>Humidity: </strong>
            {weatherData.humidity}%
          </li>
          <li>
            <strong>Wind: </strong>
            {Math.round(weatherData.wind)} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
