import React, {Component} from 'react';

import './wether-app.css';

export default class WetherApp extends Component{
  render(){

    const {temp, clouds, city, country, feels_like, sunset, error } = this.props

    return(
      <div className="wether-wrapper">
        { city &&
        <div>
          <p>Местоположение: {city}, {country}</p>
          <p>Температура: {temp}</p>
          <p>Чувствуется как: {feels_like}</p>
        </div>
        }
      </div>
    )
  }
}
