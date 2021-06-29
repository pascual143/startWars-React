// Importando React
import React, { Component } from 'react'
// Importando componente a usar
import Card from '../Card/Card.js'

class Modal extends Component {
  render() {
    return (
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Card />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
									Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Exportando componente
export default Modal
