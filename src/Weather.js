import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function displayWeather(response) {
    setReady(true);
    setWeatherData({
      cityName: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
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

  function getApiUrl() {
    let apiKey = "5d3b346f3e3af0daf6465f0d5ed890f4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getApiUrl();
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "5d3b346f3e3af0daf6465f0d5ed890f4";
    let apiUrlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrlPosition).then(displayWeather);
  }

  function searchCity() {
    navigator.geolocation.getCurrentPosition(showPosition);
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
              <button className="btn btn-outline-success" onClick={searchCity}>
                📍
              </button>
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
        <div className="WeatherForecast">
          <WeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
        </div>
      </div>
    );
  } else {
    getApiUrl();
    return `Loading...`;
  }
}
