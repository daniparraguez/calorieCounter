import React from 'react'
import PropTypes from 'prop-types'

const DatosUser = ({ user }) => (
  <div className="container-fluid">
    <h2>Ingesta diaria de calorías</h2>
    <div>
    <label > { user !==undefined && user.calorias!==undefined ? user.calorias : 'No calorias'}</label>
    </div>
    <h2>Recomendadas para ti</h2>  
  </div>
  
)

export default DatosUser;