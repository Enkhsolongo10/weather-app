// "use client"
// import { CiLocationOn } from "react-icons/ci";
// import { CiHome } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { CiUser } from "react-icons/ci";

// export const Card = ({
//   value, 
//   date, 
//   cityName, 
//   temperature, 
//   condition, 
//   shadow,
//   colors,
// }) => {
//   let statusStyle, color, conditionColor, col, icon;
//   let image = value === 'night' ? "/moon.png":'/sun.png'
//   if(value==="night "){
//       color="text-white bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937]"
//       statusStyle="text-white"
//       conditionColor="text-[#777CCE]"
//       icon="size-6"
//       shadow = "drop-shadow-[0_5px_25px_rgb(255,255,255,5)] rounded-full"
//     } else if(value ==="day"){
//         statusStyle='text-black'
//         colors="bg-white"
//         color="text-black"
//         conditionColor="text-[#FF8E27]"
//         icon="size-6"
//     }
//     const conditionText = condition.toLowerCase()

//   if (value === "night"){
 
//     if(conditionText.includes("rain")){
//       image ="/nightRain.png"
//     } else if (conditionText.includes("snow")){
//       image = "/nightSnow.png"
//     } else if (condition.includes("overcast") || conditionText.includes("cloud")){
//       image ="/nightClouds.png"
//     } else if (conditionText.includes("storm")){
//       image ="/nightStorm"
//     } else if (conditionText.includes("wind")){
//       image ="/nightWind.png"
//     }  else {
//       image ="/moon.png"}

//   }  else{  
//     if(conditionText.includes("rain")){
//       image ="/dayRain.png"
//     } else if (conditionText.includes("snow")){
//       image ="/daySnow.png"
//     } else if (condition.includes("overcast") || conditionText.includes("cloud")){
//       image ="/dayClouds.png"
//     } else if (conditionText.includes("storm")){
//       image ="/dayStorm"
//     } else if (conditionText.includes("wind")){
//       image = "/dayWind.png"
//     } else {image = "sun.png"}
//   }
//     return (
//       <div  className={`w-[50%] h-[828px] rounded-3xl  ${color}`}>
//         <div className="py-10 px-5 w-[100%] h-[504px] flex-col">
//             <div className="text-sm ml-[20px]">{date}</div> 
//             <div className="flex justify-around">
//               <h2 className={`text-5xl ml-[10px] font-extrabold my-2 ${color}`}>{cityName}</h2>
//               <CiLocationOn className={`${icon}`}/> 
//             </div>
//             <div className="flex justify-center">
//               <img className={`w-[16rem] h-[16rem] mx-7 my-10 ${shadow}`} src={image} alt="weather"/>
//             </div>
//             <div className={`text-9xl ml-[20px] font-extrabold ${statusStyle}`} >{Math.round(temperature)}°</div>
//             <div className={`${conditionColor} text-xl ml-[20px] mt-2 font-extrabold`}>{condition}</div> 
//             <div className="flex justify-between w-[318px] h-[32px] mt-[130px] ml-[30px] gap-2">
//                 <CiHome className={`${icon}`}/>
//                 <CiLocationOn className={`${icon}`}/>   
//                 <CiHeart className={`${icon}`}/>
//                 <CiUser className={`${icon}`}/>
//             </div>
//         </div>
//       </div>
//     );
//   };

"use client";
import { CiLocationOn } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export const Card = ({
  value,
  cityName,
  temperature,
  condition,
  color,
  icon,
  date,
  image,
  zindex,
  text,
  shadow,
}) => {
  if (value === "night") {
    text = "text-[#777CCE]";
    color =
      " bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#1F2937] mt-[180px] absolute ";
    icon = "text-white size-6";
    image = "/Moon.png";
    zindex = "z-40";
    shadow = "drop-shadow-[0_5px_25px_rgb(255,255,255,5)] rounded-full";
  } else if (value === "day") {
    color = "bg-white shadow-[#1F2937] relative ";
    icon = "text-black size-6";
    image = "/Sun.png";
    zindex = "z-50";
    text = "text-[#FF8E27]";
    shadow = "drop-shadow-[0_3px_25px_rgb(255,255,5)] rounded-full";
  }
  const conditionText = condition.toLowerCase();

  if (value === "night") {
    if (conditionText.includes("rain")) {
      image = "/nightRain.png";
    } else if (conditionText.includes("snow")) {
      image = "/nightSnow.png";
    } else if (
      condition.includes("overcast") ||
      conditionText.includes("cloud")
    ) {
      image = "/Clouds.png";
    } else if (conditionText.includes("storm")) {
      image = "/nightStorm";
    } else if (conditionText.includes("wind")) {
      image = "/nightWind.png";
    } else {
      image = "/Moon.png";
    }
  } else {
    if (conditionText.includes("rain")) {
      image = "/dayRain.png";
    } else if (conditionText.includes("snow")) {
      image = "/daySnow.png";
    } else if (
      condition.includes("overcast") ||
      conditionText.includes("cloud")
    ) {
      image = "/dayClouds.png";
    } else if (conditionText.includes("storm")) {
      image = "/dayStorm";
    } else if (conditionText.includes("wind")) {
      image = "/dayWind.png";
    } else {
      image = "Sun.png";
    }
  }
  return (
    <>
      <div
        className={`w-[45%] h-[828px] ${color} ${zindex} rounded-[2.25rem] mx-4 mt-32 ml-[250px] absolute `}
      >
        <div className="flex justify-around items-center">
          <div>
            <h3 className="mt-3">{date}</h3>
            <h1 className="text-3xl mt-2">{cityName}</h1>
          </div>

          <CiLocationOn className={`size-6 `} />
        </div>

        <div className="flex justify-center items-center mt-10">
          <img
            className={`w-[16rem] h-[16rem] ${shadow} `}
            src={image}
            alt="Sun Icon"
          />
        </div>
        <div className="mt-[4rem]">
          <div className="ml-[4rem]">
            <div className="text-[144px]  ">{Math.round(temperature)}°</div>
            <div className={`text-2xl font-bold ${text}`}>{condition}</div>
          </div>
          <div className="w-[24rem] h-[2rem] flex justify-around pt-[3rem] ml-[40px] gap-6">
            <CiHome className={`${icon}`} />
            <CiLocationOn className={`${icon}`} />
            <CiHeart className={`${icon}`} />
            <CiUser className={`${icon}`} />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
