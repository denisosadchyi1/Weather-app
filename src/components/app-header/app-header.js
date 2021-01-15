import React, {Component} from 'react';

import './app-header.css';

export default class AppHeader extends Component{
  render(){
    return(
      <div className="header-info">
        <h2>Узнайте погоду в вашем городе</h2>
        {/* <p>Узнайте погоду в вашем городе</p> */}
      </div>
    )
  }
}
