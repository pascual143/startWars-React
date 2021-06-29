import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Header from './components/Header/Header.js'
import Characters from './components/Characters/Characters.js'
import Modal from './components/modal/Modal.js'
import Footer from './components/Footer/Footer.js'



const containerHeader = document.getElementById('head')
const container = document.getElementById('contenedor')
const containerModal = document.getElementById('modal')
const containerFooter = document.getElementById('footer')

render(<Header/>, containerHeader)
render(<Characters/>, container)
render(<Modal/>, containerModal)
render(<Footer/>, containerFooter)




