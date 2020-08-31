import React, {useState} from 'react'
import '../styles/weather-icons.css'
import '../styles/weatherPic.css'


function WeatherDetails({ data: { ktemp, humidity, city, desc, icon } }) {


    let str=icon;
    console.log(str);
    let clname="wi wi-owm-"+str;
    console.log(clname);
    return (
   
      
        <div id="weather-wrapper" className="section">
      
            <div className="row">
                <div className="col s12 white-text">
                    <h1 id="tempDisplay" className="center animate__animated animate__fadeInDown animate__delay-1s animate__slower">{ktemp}<span >&deg;C</span></h1>
                  
                    <p className="center"></p>
                </div>
                <div className="col s4 white-text">
                    <h5 className="center">City</h5>
                    <p className="center">{city}</p>
                </div>
                <div className="col s4 white-text">
                    <h5 className="center">Humidity</h5>
                    <p className="center">{humidity}%</p>
                </div>
                <div className="col s4 white-text">
                    <h5 className="center">Outside</h5>
                    <p className="center">{desc}</p>
                </div>
                
                
            </div>
            <div className="backIcon">
            <i className={clname} ></i>
                </div>
        </div>
    );
      
   
  }
  
  export default WeatherDetails;