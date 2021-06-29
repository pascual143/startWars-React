// Importando React
import React, { Component } from 'react'
// Importando componente a usar
import Logo from '../Logo/Logo.js'

/* Renderizado para mostrar los datos en la web */
class Header extends Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" align="center">
        <Logo/>
      </div>
    );
  }
}

// Exportando componente
export default Header