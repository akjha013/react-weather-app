import React, { useState } from 'react'
import '../styles/Weather.css'
import WeatherDetails from './WeatherDetails';

const API_KEY = process.env.REACT_APP_API_KEY;

const createAPIUrl = query =>
`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;



function Weather(){

    const [isValidCityName,setIsValidCityName] = useState(true);
    
    const [searchQuery, setSearchQuery] = useState('');

    const [weatherData, setWeatherData] = useState({
        ktemp: null,
        humidity: null,
        desc: null,
        city: null,
        icon: null
    });


    function validateCityName(cityName){
        let regex= /^[a-zA-Z ]*$/;
        return regex.test(cityName);
        
    }
       


    function updateSearchQuery(e) {
        

        const cityName = e.target.value;
        
        //setSearchQuery(cityName);
        function isValidCityName(){
            if(validateCityName(cityName))
                return true
            else
                return false
        }

        if(isValidCityName() || cityName==='')
        {
            
            setIsValidCityName(true);
        }
        else
        {
            setIsValidCityName(false);
        }

        setSearchQuery(cityName);    
    }

    




    const convertToCelsius = temp =>
    (temp - 273.15).toFixed(0);

    async function getWeatherData() {
       
    
        const response = await fetch(createAPIUrl(searchQuery));
    
        if (!response.ok) {
          return;
        }
    
        const { main, weather, name } = await response.json();
    
        setWeatherData({
        ktemp: convertToCelsius(main.temp),
        humidity: main.humidity,
        desc: weather[0].description,
        city: name,
        icon: weather[0].id
        });
      }
        
        

    return (
        <div className="weather-con container grey darken-4 z-depth-4">
            <h2 className="center white-text">Weather App</h2>
            <div className="container">
            <div className="section">
            
            {/* <input className="white-text lighten-5" placeholder="Enter Zip Code here" maxLength='6' id="zipCode" type="text" onChange={updateSearchQuery}/> */}
            <input className="white-text lighten-5" placeholder="Enter City Name Here"  id="cityName" type="text" onChange={updateSearchQuery}/>
            <i id="search-ico" className="animate__animated animate__bounce right animate__slow material-icons" onClick={getWeatherData} >search</i>

            
            
            </div>
            
            <p className="center orange-text lighten-4">{isValidCityName ? '' : 'Invalid city name'}</p>
            </div>
            <div className="weather-info container section">
                

                {weatherData.ktemp ? (
          <WeatherDetails data={weatherData} />
        ) : (
            <p className="center white-text">No weather to display
                        <i className="material-icons animatedIcon">wb_sunny</i></p>
        )}
            </div>
        </div>
    )
}

export default Weather;
