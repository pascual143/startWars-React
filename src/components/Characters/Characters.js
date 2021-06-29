// Import React
import React, { Component } from 'react'
// Import component to use
import './Characters.css'
// Import images to use
import img1 from './../../img/luke.jpg'
import img2 from './../../img/c3po.jpg'
import img3 from './../../img/r2d2.jpg'
import img4 from './../../img/darth-vader.jpg'
import img5 from './../../img/leia.jpg'
import img10 from './../../img/obi.jpg'
import img13 from './../../img/chewacca.jpg'
import img14 from './../../img/solo.png'
import img19 from './../../img/yoda.jpg'
import img21 from './../../img/boba-fett.jpg'
import img67 from './../../img/sith.jpg'
import img69 from './../../img/stormtrooper.jpg'
import Modal from '../modal/Modal.js'



/* Render to show the data */
class Characters extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={1} type="button">
            <img
              src={img1}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image1"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={2} type="button">
            <img
              src={img2}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image2"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={3} type="button">
            <img
              src={img3}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image3"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={4} type="button">
            <img
              src={img4}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image4"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={5} type="button">
            <img
              src={img5}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image5"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={10} type="button">
            <img
              src={img10}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image10"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={13} type="button">
            <img
              src={img13}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image13"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={14} type="button">
            <img
              src={img14}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image14"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={19} type="button">
            <img
              src={img19}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image19"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={21} type="button">
            <img
              src={img21}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image21"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={67} type="button">
            <img
              src={img67}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image67"
            />
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <button value={69} type="button">
            <img
              src={img69}
              className="img-responsive"
              data-toggle="modal"
              data-target="#myModal"
              alt="image69"
            />
          </button>
        </div>
        <Modal />
      </div>
    )
  }
}

// Export component
export default Characters
