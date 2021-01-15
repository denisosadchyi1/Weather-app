import React, {Component} from 'react';

import './app-form.css';

export default class AppForm extends Component{
  render(){
    return(
      <form onSubmit={this.props.gettingWeather}>
        <input className="form-input" type="text" name="city"placeholder="Веддите вваш город"/>
        <button className="form-btn" type="submit">Получить погоду</button>
      </form>
    )
  }
}
