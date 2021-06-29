// Import React
import React, { Component } from 'react'
// Import css
import './Footer.css'
//import whalar logo
import whalarLogo from './../../img/whalar.svg'


/* Render to show the data */
class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <p>
          <img
            src={whalarLogo}
            className="img-fluid"
            data-toggle="modal"
            data-target="#myModal"
            alt="image3"
          />Whalar @ Copyright</p>
      </div>
    )
  }
}

// Export component
export default Footer