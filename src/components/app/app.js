import React, {Component} from 'react';
import styled from 'styled-components';

import AppHeader from '../app-header';
import AppForm from '../app-form';
import WetherApp from '../wether-app';
import './app.css';

const ApiKey = '844495c5d39ccb59ebd1ae986f0e1793';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component{

  state = {
    temp: undefined,
    clouds: undefined,
    city: undefined, 
    country: undefined,
    feels_like: undefined,
    sunset: undefined,
    error: undefined 
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`);
    const data = await api_url.json();

    console.log(data);

    let sunset = data.sys.sunset;
    let date = new Date();
    date.setTime(sunset);
    let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


    if(city){
      this.setState({
      temp: data.main.temp,
      clouds: data.clouds.all,
      city: data.name,
      country: data.sys.country,
      feels_like: data.main.feels_like,
      sunset: sunset_date,
      error: '',
    });
    }else{
      alert('Введите город');
    }
  }

  render(){
    const {temp, clouds, city, country, feels_like, sunset, error } = this.state
    return (
      <AppBlock>
        <div className="form-wrapper">
        <AppHeader></AppHeader>
        <AppForm
          gettingWeather = {this.gettingWeather}/>
        <WetherApp
          temp={temp}
          clouds={clouds}
          city={city}
          country={country}
          feels_like={feels_like}
          sunset={sunset} 
          error = {error}/>
        </div>
      </AppBlock>
    )
  }
}