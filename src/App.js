/** @jsxImportSource @emotion/react*/
import {css, ThemeProvider,keyframes } from '@emotion/react';
import {useState, useEffect, useCallback} from 'react';
import './App.css';
import { chooseWeatherImage } from './WeatherDisplay';
import { chooseForecastImage } from './WeatherDisplay';
import { getFiveDayForecast } from './utils';
import { useMemo } from 'react';
import { theme, HeadText, CityText, CardText, CardWrapper, ButtonStyleA, PageWrapper, ButtonContainer, InputContainer, InputStyle, ImageContainer, ResizedImage, TitleBox, SpinnerImage, LoadingContainer} from './styles';
import sunny from './Images/sunnyday.png';
import rainy from './Images/rainyday.png';
import umbrella from './Images/umbrella-580061_1280.png'




function App() {
  const [city, setCity]= useState('');
  const[weatherData, setWeatherData]= useState(null);
  const [loading, setLoading]=useState(false);
  const[error, setError]=useState(null);
  const[forecast, setForecast]=useState(null);
  const [unit, setUnit]= useState('metric');
  const [isSubmitted, setIsSubmitted]= useState(false);
  const [isDarkMode, setIsDarkMode]= useState('light');
  
  const apiKey='7192a1e295f4ffed224ee81c88e50340';

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
    }
    const handleSearch= () =>{setIsSubmitted(true)}
  
  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode === 'light' ? 'dark' :'light');
  }

    useEffect(()=>{
      if(city){
        setIsSubmitted(false);
      }
    }, [city]);

  useEffect(()=> {if(!city || !isSubmitted) return;
setLoading(true);
setError(null);
//Get coordinates of city
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
.then((response)=>response.json())
.then((data)=>{
  console.log("Geo API response:", data);
 
  if(data.length>0){
    const {lat, lon} = data[0];
    console.log("First item in data:", data[0]);  
//fetch weather data and forecast data
Promise.all([
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`).then((res)=>res.json()),
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`).then((res)=>res.json()),
])
.then(([weatherData, forecast])=>{
  setWeatherData(weatherData);
  setForecast(forecast);
  setLoading(false);
})
.catch((err)=>{
  setError('Failed to fetch weather or forecast data');
  setLoading(false);
});
  }
  else{
    setError('City not found');
    setLoading(false);
  }
})
.catch(()=>{
  setError('Failed to fetch city data');
  setLoading(false);
});
}, [ unit, isSubmitted]);




const formatDate= (timestamp) =>{
  const date = new Date(timestamp * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate()

  return`${month}/${day}`;
}
const fiveDayForecast = forecast ? getFiveDayForecast(forecast) : [];


  return <ThemeProvider theme={theme[isDarkMode]}>
    <PageWrapper>
    <main 
      css={(theme)=>({
        background: theme.colors.primary,
      })}>
        <ButtonContainer>
        <ButtonStyleA onClick={toggleUnit}>Switch to {unit === 'metric' ? 'imperial' : 'metric'}</ButtonStyleA>
        </ButtonContainer>
        <ButtonContainer>
        <ButtonStyleA onClick={toggleDarkMode}>Switch to {isDarkMode === 'light' ? 'dark' : 'light'} mode</ButtonStyleA>
        </ButtonContainer>
        <TitleBox>
      <HeadText>Weather Forecast</HeadText>
        </TitleBox>
        <InputContainer>
        <InputStyle type='text' placeholder='Enter a city' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <ButtonStyleA onClick={handleSearch}>Submit</ButtonStyleA>
        </InputContainer>
        {loading && (
          <LoadingContainer>
            <CardText>Loading...</CardText>
            <SpinnerImage src={umbrella}/>
          </LoadingContainer>
        )}
        {error &&<p>{error}</p>}

        {weatherData && fiveDayForecast.length>=5 ? (
          <div>
            <CardWrapper>
            <CityText>Weather in {weatherData.name}</CityText>
            <CardText>
            <p>{weatherData.weather[0].description}</p>
            <img src={chooseWeatherImage(weatherData)}/>
            <p>Today's Temperature: {Math.round(weatherData.main.temp)}{unit=== 'metric' ? '°C': '°F'}</p>
            <p>Wind Speed: {weatherData.wind.speed} meter/sec</p>
            <p>Humidity: {weatherData.main.humidity}% </p>
            </CardText>
            </CardWrapper>
            
              
        {fiveDayForecast.map((day, index)=>(
            <CardWrapper key={index}>
              <CardText>
                <p>
                {index === 0? "Tomorrow's Temperature: " : `${formatDate(day.dt)}: `}{""}
                {Math.round(day.temp)}{unit=== 'metric' ? '°C': '°F'}
                </p>
                <img src = {chooseForecastImage(day)} alt={`Weather on ${formatDate(day.dt)}`} />
              </CardText>
            </CardWrapper>
        ))}
  
           
    </div>
   
  ) : null}
</main>
</PageWrapper>
  </ThemeProvider>
}
export default App;