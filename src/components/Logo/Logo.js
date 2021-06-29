// Import React
import React, { Component } from 'react'
// Import component to use
import logo from './../../img/logo-actual-star-wars.jpg'
import './Logo.css'

/* Render to show the data */
class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="img-responsive" alt="logo"/>
        <p></p>
      </div>
    )
  }
}

// Export component
export default Logo