"use client"


import { CiLocationOn } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export const Card = ({value, date, cityName, temperature, condition}) => {
    let statusStyle,   color,  conditionColor, colors, icon;
  let image = value === 'night' ? "/moon.png":'/sun.png'
  if(value==="night "){
      colors="bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937]"
      statusStyle="text-white"
      color="text-white"
      conditionColor="text-[#777CCE]"
      icon="size-6"
    } else if(value ==="day"){
        statusStyle='text-black'
        colors="bg-white"
        color="text-black"
        conditionColor="text-[#FF8E27]"
        icon="size-6"
    }
    const conditionText = condition.toLowerCase()
 
  if (value === "night"){
 
    if(conditionText.includes("rain")){
      image ="/nightRain.png"
    } else if (conditionText.includes("snow")){
      image = "/nightSnow.png"
    } else if (condition.includes("overcast") || conditionText.includes("cloud")){
      image ="/nightClouds.png"
    } else if (conditionText.includes("storm")){
      image ="/nightStorm"
    } else if (conditionText.includes("wind")){
      image ="/nightWind.png"
    }  else {
      image ="/moon.png"}
 
  }  else{
    if(conditionText.includes("rain")){
      image ="/dayRain.png"
    } else if (conditionText.includes("snow")){
      image ="/daySnow.png"
    } else if (condition.includes("overcast") || conditionText.includes("cloud")){
      image ="/dayClouds.png"
    } else if (conditionText.includes("storm")){
      image ="/dayStorm"
    } else if (conditionText.includes("wind")){
      image = "/dayWind.png"
    } else {image = "sun.png"}
  }
    return (
      <div  className={`w-[50%] h-[828px] rounded-3xl  ${colors}`}>
        <div className="py-10 px-5 w-[100%] h-[504px] flex-col">
            <div className="text-sm ml-[20px]">{date}</div> 
            <div className="flex justify-around">
              <h2 className={`text-5xl ml-[10px] font-extrabold my-2 ${color}`}>{cityName}</h2>
              <CiLocationOn className={`${icon}`}/> 
            </div>
            <div className="flex justify-center">
              <img className="w-[16rem] h-[16rem] mx-7 my-10" src={image} alt="weather"/>
            </div>
            <div className={`text-9xl ml-[20px] font-extrabold ${statusStyle}`} >{Math.round(temperature)}°</div>
            <div className={`${conditionColor} text-xl ml-[20px] mt-2 font-extrabold`}>{condition}</div> 
            <div className="flex justify-between w-[318px] h-[32px] mt-[130px] ml-[30px] gap-2">
                <CiHome className={`${icon}`}/>
                <CiLocationOn className={`${icon}`}/>    
                <CiHeart className={`${icon}`}/>
                <CiUser className={`${icon}`}/>
            </div>
        </div>
      </div>
    );
  }; 
