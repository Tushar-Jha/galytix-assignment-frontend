import './App.css';
import React from 'react';
function App() {
  const [countries,setCountries]=React.useState([]);

  const [weather,setWeather]=React.useState({});

  const getCountries = async () =>{
    const res= await fetch("https://countriesnow.space/api/v0.1/countries");
    const data =await res.json();
    setCountries(data.data);
  }

  React.useEffect(()=>{
    getCountries();
  },[])

  const handleClick = async(city) =>{
    const apiKey="6ac8ceb444c7b2245255cdd69c56c70a";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey
    const weather=await fetch(url);
    const data=await weather.json();
    console.log(data.main)
    setWeather(data.main)
  }

  return (
    <div className="App">
      <div className='x'>
      <h1>Countries</h1>
      <ul>
        {countries.map((c)=>{
          return (<li className='list-item' >
            <div onClick={()=>{handleClick(c.cities[0]);}}>{c.country}</div>
          </li>)
        })}
      </ul>
      </div>
      <div className='x'>
        <h3>Temperature: {weather.temp}</h3>
        <h3>Pressure: {weather.pressure}</h3>
        <h3>Humidity: {weather.humidity}</h3>
      </div>
      
    </div>
  );
}

export default App;
