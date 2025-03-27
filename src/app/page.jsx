"use client"
import { SearchInput } from "./componant/SearchInput.jsx"; 
import { Card } from "./componant/Card.jsx";
import { useEffect, useState } from "react"; 

const API_KEY = '28f9714a181c403299b75845241312';

export default function Home() {
  const [search, setSearch] = useState(''); 
  const [city, setCity] = useState("ulaanbaatar"); 
  const [dayWeather, setDayWeather] = useState({
   dayTemperature:0,
   dayCondition:'',
   nightTemperature:0,
   nightCondition:'',
   date: ''
  });  

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };
  const onPressEnter = (e) => {

    console.log(e.keycode)
    if (e.code.includes('Enter')) {
      console.log("enter daragdlaa")
      setCity(search);
    }
  }
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    ).then((response) => response.json())
    .then((data) => {
      console.log(data)
      setDayWeather({
        dayTemperature: data.forecast.forecastday[0]?.day.maxtemp_c,
        dayCondition: data.forecast.forecastday[0].day.condition.text,
        nightTemperature: data.forecast.forecastday[0].day.mintemp_c,
        nightCondition: data.forecast.forecastday[0].hour[20].condition.text,
        date: data.forecast.forecastday[0].date,
      });
    });
  }, [city]); 

  return (
    <div className="flex w-full h-screen justify-center">
      <div className="w-[40%] h-screen bg-[#F3F4F6] text-black flex flex-col-reverse items-center jusrify-center pb-[200px]">
        <Card 
        value="day" 
        temperature={dayWeather.dayTemperature} 
        condition={dayWeather.dayCondition} 
        date={dayWeather.date} 
        cityName={city} 
        /> 
        <SearchInput 
        search={search} 
        onChangeText={onChangeText} 
        onPressEnter={onPressEnter} 
        />
      </div> 

      <div className="w-[40%] h-screen bg-[#0F141E] flex flex-col-reverse items-center jusrify-center  pb-[200px]">
        <Card 
        value="night"  
        temperature={dayWeather.nightTemperature} 
        condition={dayWeather.nightCondition} 
        date={dayWeather.date} 
        cityName={city} 
        />
      </div>
    </div> 
  );
};



