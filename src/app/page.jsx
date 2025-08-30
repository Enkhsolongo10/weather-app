"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Manrope } from "next/font/google";
import { SearchInput } from "./_components/SearchInput";
import { Card } from "./_components/Card";
import { WhiteCircle } from "./_components/WhiteCircle";
import { CityList } from "./_components/citySuggestion";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Shanghai");
  const [statusDay, setStatusDay] = useState(null);
  const [statusNight, setStatusNight] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [refreshing, setRefreshing] = useState("");
  const [count, setCount] = useState(9);

  const API_KEY = `6f9cc5eb8a37493783a72448241312`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setWeatherData(data);
        changeStatusDay(data);
        changeStatusNight(data);

        console.log("tatsan tsag agaariin data:", data);
        console.log("odoogiin hot:", city);
      } catch (error) {
        console.log("aldaa garlaa:", error);
      }
    };
    fetchWeather();
  }, [city]);

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      setCity(search);
      changeStatusDay();
      changeStatusNight();
    }
  };

  const changeStatusDay = (weatherData) => {
    console.log(weatherData?.current?.condition?.text);
    if (
      weatherData?.current?.condition?.text
        .toLowerCase()
        .includes("overcast") ||
      weatherData?.current?.condition?.text.toLowerCase().includes("cloud")
    ) {
      console.log("it's cloudy");
    } else if (
      weatherData?.current?.condition?.text.toLowerCase().includes("shower") ||
      weatherData?.current?.condition?.text.toLowerCase().includes("rain")
    ) {
      setStatusDay("./img/rainy.png");
      console.log("it's raining");
    } else {
      setStatusDay("./img/sunny.png");
      console.log("it's sunny");
    }
  };
  
  const changeStatusNight = (weatherData) => {
    console.log(
      weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
    );
    if (
      weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
        .toLowerCase()
        .includes("mist") ||
      weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
        .toLowerCase()
        .includes("cloud") ||
      weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
        .toLowerCase()
        .includes("overcast")
    ) {
      setStatusNight("./img/moon-cloudy.png");
      console.log("it's cloudy");
    } else if (
      weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
        .toLowerCase()
        .includes("shower") ||
      weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
        .toLowerCase()
        .includes("rain")
    ) {
      setStatusNight("./img/moon-cloudy-rainy.png");
      console.log("it's raining");
    } else {
      setStatusNight("./img/moon.png");
      console.log("night has a clear sky");
    }
  };
  console.log("the search:", search, "the city:", city);

  return (
    <div
      className={`flex w-[auto] h-[1200px] justify-content-center relative ${manrope.className}`}
    >
      <div className="w-[50%] h-[1200px] bg-white relative mx-auto">
        {weatherData && (
          <>
            <Card
              justify={`mx-auto`}
              date={weatherData?.current?.last_updated}
              theCity={weatherData?.location?.name}
              theCountry={weatherData?.location?.country}
              color="white"
              from="from-slate-200"
              to="to-white"
              textColor="text-black"
              temp={weatherData?.current?.temp_c}
              feelsLike={weatherData?.current?.feelslike_c}
              isTrue={true}
              status={statusDay}
              description={weatherData?.current?.condition?.text}
              count={count}
              refreshing={refreshing}
            />
          </>
        )}
        <div className="fixed mx-auto mt-10px lg:mr-3 mt-5 lg:absolute lg:top-10 lg:left-10 z-30">
          <SearchInput
            search={search}
            onChangeText={onChangeText}
            onPressEnter={onPressEnter}
            setCity={setCity}
          />
          <CityList search={search} setCity={setCity} />
        </div>
      </div>

      <div className="w-[50%] h-[1200px] bg-[#0f141e] relative rounded-3xl hidden lg:block">
        {weatherData && (
          <>
            <Card
              count={count}
              date={weatherData?.current?.last_updated}
              theCity={weatherData?.location?.name}
              theCountry={weatherData?.location?.country}
              color="black"
              from="from-[#1f2937]"
              to="to-[#111827]"
              textColor="text-white"
              temp={weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}
              status={statusNight}
              border={`rounded-3xl`}
              description={
                weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
              }
              refreshing={refreshing}
              // disappear={`lg:hidden]`}
            />
            <WhiteCircle size="w-[1340px] h-[1340px]" />
            <WhiteCircle size="w-[940px] h-[940px]" />
            <WhiteCircle size="w-[340px] h-[340px]" />
            <WhiteCircle
              size="w-[140px] h-[140px]"
              color="bg-white"
              logo={true}
            />
          </>
        )}
      </div>

      {/* <WhiteCircle size="340px" /> */}
    </div>
  );
}
