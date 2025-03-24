import React from 'react';
import weatherImagesDay from './WeatherImages';
import App from './App';
import { getFiveDayForecast } from './utils';

const thunderstormDescriptions=[
    'thunderstorm with light rain',
    'thunderstorm with rain',
    'thunderstorm with heavy rain',
    'light thunderstorm',
    'thunderstorm',
    'heavy thunderstorm',
    'ragged thunderstorm',
    'thunderstorm with light drizzle',
    'thunderstorm with drizzle',
    'thunderstorm with heavy drizzle'
    
]
const drizzleDescriptions=[
    'light intensity drizzle',
    'drizzle',
    'heavy intensity drizzle',
    'light intensity drizzle rain',
    'drizzle rain',
    'heavy intensity drizzle rain',
    'shower rain and drizzle',
    'heavy shower rain and drizzle',
    'shower drizzle',
    'light intensity shower rain',
    'shower rain',
    'heavy intensity shower rain',
    'ragged shower rain'
]
const rainDescriptions=[
    'light rain',
    'moderate rain',
    'heavy intensity rain',
    'very heavy rain',
    'extreme rain'
] 
const snowDescriptions=[
    'freezing rain',
    'light snow',
    'snow',
    'heavy snow',
    'sleet',
    'light shower sleet',
    'shower sleet',
    'light rain and snow',
    'rain and snow',
    'light shower snow',
    'shower snow',
    'heavy shower snow'
]
const mistDescriptions=[
    'mist',
    'smoke',
    'haze',
    'sand/dust whirls',
    'fog',
    'sand',
    'dust',
    'volcanic ash',
    'squalls',
    'tornado'
]
const clearSkyDescriptions=[
    'clear sky'
]
const fewCloudsDescriptions=[
    'few clouds'
]
const scatteredCloudsDescriptions=[
    'scattered clouds'
]
const brokenCloudsDescriptions=[
    'broken clouds',
    'overcast clouds'
]
export const chooseWeatherImage=(weatherData)=>{
    if(!weatherData || !weatherData.weather || !weatherData.weather[0]){
        return null;
    }
    const description=weatherData.weather[0].description.toLowerCase();
    if(thunderstormDescriptions.includes(description)){
        return weatherImagesDay.Thunderstorm;
    }
    else if(drizzleDescriptions.includes(description))
    {return weatherImagesDay.showerRain}
    else if(rainDescriptions.includes(description)){
        return weatherImagesDay.Rain
    }
    else if(snowDescriptions.includes(description)){
        return weatherImagesDay.Snow
    }
    else if(mistDescriptions.includes(description)){
        return weatherImagesDay.Mist
    }
    else if(clearSkyDescriptions.includes(description)){
        return weatherImagesDay.clearSky
    }
    else if(fewCloudsDescriptions.includes(description)){
        return weatherImagesDay.fewClouds
    }
    else if(scatteredCloudsDescriptions.includes(description)){
        return weatherImagesDay.scatteredClouds
    }
    else if(brokenCloudsDescriptions.includes(description)){
        return weatherImagesDay.brokenClouds
    }
    else{return null}
}

export const chooseForecastImage=(forecast)=> {
    console.log(`Today's forecast is ${JSON.stringify(forecast)}`);
    const description = forecast.weather;
    if(thunderstormDescriptions.includes(description)){
        return weatherImagesDay.Thunderstorm;
    }
    else if(drizzleDescriptions.includes(description))
    {return weatherImagesDay.showerRain}
    else if(rainDescriptions.includes(description)){
        return weatherImagesDay.Rain
    }
    else if(snowDescriptions.includes(description)){
        return weatherImagesDay.Snow
    }
    else if(mistDescriptions.includes(description)){
        return weatherImagesDay.Mist
    }
    else if(clearSkyDescriptions.includes(description)){
        return weatherImagesDay.clearSky
    }
    else if(fewCloudsDescriptions.includes(description)){
        return weatherImagesDay.fewClouds
    }
    else if(scatteredCloudsDescriptions.includes(description)){
        return weatherImagesDay.scatteredClouds
    }
    else if(brokenCloudsDescriptions.includes(description)){
        return weatherImagesDay.brokenClouds
    }
    else{return null}
}


