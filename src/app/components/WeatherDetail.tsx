import React from 'react'
import { RiEyeLine } from "react-icons/ri";
import { TbDroplet, TbSunrise, TbSunset } from "react-icons/tb";
import { MdAir } from "react-icons/md";
import { ImMeter2 } from "react-icons/im";

export interface WeatherDetailProps {
  visibility: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetail(props: WeatherDetailProps) {
  const {
    visibility = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hPa",
    sunrise = "6.20",
    sunset = "18:48"
  } = props;

  return (
    <>
      <SingleWeatherDetail
        icon={<RiEyeLine />}
        information="Visibility"
        value={props.visibility}
      />
      <SingleWeatherDetail
        icon={<TbDroplet />}
        information="Humidity"
        value={props.humidity}
      />
      <SingleWeatherDetail
        icon={<MdAir />}
        information="Wind speed"
        value={props.windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter2 />}
        information="Air pressure"
        value={props.airPressure}
      />
      <SingleWeatherDetail
        icon={<TbSunrise />}
        information="Sunrise"
        value={props.sunrise}
      />
      <SingleWeatherDetail
        icon={<TbSunset />}
        information="Sunset"
        value={props.sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps){
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  )
}