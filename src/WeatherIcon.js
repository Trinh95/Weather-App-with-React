import React from "react";
import n01 from "./icons/n01.svg";
import n02 from "./icons/n02.svg";
import n03 from "./icons/n03.svg";
import n04 from "./icons/n04.svg";
import n09 from "./icons/n09.svg";
import n10 from "./icons/n10.svg";
import n11 from "./icons/n11.svg";
import n13 from "./icons/n13.svg";
import n50 from "./icons/n50.svg";
import d01 from "./icons/d01.svg";
import d02 from "./icons/d02.svg";
import d03 from "./icons/d03.svg";
import d04 from "./icons/d04.svg";
import d09 from "./icons/d09.svg";
import d10 from "./icons/d10.svg";
import d11 from "./icons/d11.svg";
import d13 from "./icons/d13.svg";
import d50 from "./icons/d50.svg";
import "./Weather.css";

export default function WeatherIcon(props) {
  if (props.code === "01n") {
    return <img src={n01} alt={props.alt} className={props.className} />;
  }
  if (props.code === "01d") {
    return <img src={d01} alt={props.alt} className={props.className} />;
  }
  if (props.code === "02n") {
    return <img src={n02} alt={props.alt} className={props.className} />;
  }
  if (props.code === "02d") {
    return <img src={d02} alt={props.alt} className={props.className} />;
  }
  if (props.code === "03n") {
    return <img src={n03} alt={props.alt} className={props.className} />;
  }
  if (props.code === "03d") {
    return <img src={d03} alt={props.alt} className={props.className} />;
  }
  if (props.code === "04n") {
    return <img src={n04} alt={props.alt} className={props.className} />;
  }
  if (props.code === "04d") {
    return <img src={d04} alt={props.alt} className={props.className} />;
  }
  if (props.code === "04n") {
    return <img src={n04} alt={props.alt} className={props.className} />;
  }
  if (props.code === "04d") {
    return <img src={d04} alt={props.alt} className={props.className} />;
  }
  if (props.code === "09n") {
    return <img src={n09} alt={props.alt} className={props.className} />;
  }
  if (props.code === "09d") {
    return <img src={d09} alt={props.alt} className={props.className} />;
  }
  if (props.code === "10n") {
    return <img src={n10} alt={props.alt} className={props.className} />;
  }
  if (props.code === "10d") {
    return <img src={d10} alt={props.alt} className={props.className} />;
  }
  if (props.code === "11n") {
    return <img src={n11} alt={props.alt} className={props.className} />;
  }
  if (props.code === "11d") {
    return <img src={d11} alt={props.alt} className={props.className} />;
  }
  if (props.code === "13n") {
    return <img src={n13} alt={props.alt} className={props.className} />;
  }
  if (props.code === "13d") {
    return <img src={d13} alt={props.alt} className={props.className} />;
  }
  if (props.code === "50n") {
    return <img src={n50} alt={props.alt} className={props.className} />;
  }
  if (props.code === "50d") {
    return <img src={d50} alt={props.alt} className={props.className} />;
  } else {
    return null;
  }
}
