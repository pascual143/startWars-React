/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// Import React
import React, { Component } from 'react'
// import Proptypes
import PropTypes from 'prop-types'

// import styles
import './Card.css'

// Handle Errors function, checking the api
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}


/* Saving id who identify each id*/
const id = 1

/* build id url to show information */
const api_url_characters = `https://swapi.dev/api/people/${id}/`

const api_url_films = 'https://swapi.dev/api/films/'

/* Create component*/
class Card extends Component {
  constructor(props) {
    super(props)
    this.state = { // State to add api data
      characters: [],
      films: []
    }
    this.fetchData = this.fetchData.bind(this) // Binding the function fetchData to this state
    this.fetchDataFilms = this.fetchDataFilms.bind(this) // Binding the function fetchData to this state
  }


  fetchData(){ // Call to api function characters
    fetch(api_url_characters)
      .then(handleErrors)
      .then(data => (data.json()))
      .then(results => {
        const api_data = results
        this.setState({
          characters: api_data
        })
      })
      .then(response => console.log('ok') ) //handle errors
      .catch(error => console.log(error) ) //handle errors
  }

  fetchDataFilms(){ 
    fetch(api_url_films)
      .then(handleErrors)
      .then(data => (data.json()))
      .then(results => {
        const api_data = results
        this.setState({
          films: api_data.results // <-- access the results array
        })
      })
      .then(response => console.log('ok') ) //handle errors
      .catch(error => console.log(error) ) //handle errors
  }


  componentDidMount() { // Life circle to call the function
    this.fetchData()
    this.fetchDataFilms()
  }

  render() { // Rendering the component
    const {characters} = this.state // Bring the data of the character to the data to show them
    const {films} = this.state

    return(
      <div className="font">
        <h2>{characters.name}</h2>
        <p>Height: {characters.height}</p>
        <p>mass: {characters.mass}</p>
        <p>Hair color: {characters.hair_color}</p>
        <p>Eyes color: {characters.eye_color}</p>
        <p>Born in {characters.birth_year}</p>
        <p>Gender: {characters.gender}</p>
        <ul>
          {films.map((film) => {
            return (  
              <li key={film.title}><u>{film.title}</u>
                <p className="span">Created at: {film.created}</p></li>
            )
          }
          )}
        </ul>
      </div>
    )
  }
}

//Checking types with Proptypes
Card.propTypes = {
  name: PropTypes.string,
  height: PropTypes.number,
  mass: PropTypes.number,
  hair_color: PropTypes.string,
  eye_color: PropTypes.string,
  birth_year: PropTypes.number,
  gender: PropTypes.string,
  title: PropTypes.string,
  created: PropTypes.string,
  fetchDataFilms: PropTypes.func,
  fetchData: PropTypes.func,
  handleErrors: PropTypes.func
}

// Export component
export default Card