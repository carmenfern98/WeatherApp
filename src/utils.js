import React from "react";

export const getFiveDayForecast= (forecast) => {
  if(!forecast || !forecast.list) return [];

  const dailyData={};
  forecast.list.forEach((item)=>{
    const date = new Date(item.dt * 1000).toLocaleDateString("en-US");

  //get midday data point
  const hour = new Date(item.dt * 1000).getHours();
    if (!dailyData[date] ||Math.abs(hour-12) < Math.abs (dailyData[date].hour -12)){
      dailyData[date] = {
        dt: item.dt,
        temp: Math.round(item.main.temp),
        temp_max: Math.round (item.main.temp_max),
        temp_min: Math.round(item.main.temp_min),
        hour,
        weather: item.weather[0].description
      };
    }
    });

  return Object.entries(dailyData)
  .slice(0,5)
  .map(([date,data]) => ({date, ...data}));
};
