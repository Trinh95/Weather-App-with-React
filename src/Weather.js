import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function displayForecast(response) {
    setReady(true);
    setWeatherData({
      cityName: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
    });
  }

  function detectCity(props) {
    setCity(props.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c3b8d523aae85de22d68b39520fd6094`;
    axios.get(apiUrl).then(displayForecast);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="cityInput">
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter a city"
                className="form-control"
                onChange={detectCity}
              />
            </div>
            <div className="searchButton">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
            <div className="locationButton">
              <button className="btn btn-outline-success">📍</button>
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5d3b346f3e3af0daf6465f0d5ed890f4`;
    axios.get(apiUrl).then(displayForecast);
    return `Loading...`;
  }
}
