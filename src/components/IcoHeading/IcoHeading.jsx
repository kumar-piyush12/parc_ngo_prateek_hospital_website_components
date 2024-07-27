import React from 'react'

import './IcoHeading.css'

const IcoHeading = ({ logo, head }) => (
  <div className='app__ico-heading'>
   <div className="app__ico-heading-logo">
    <img className='logo' src={logo} alt="" />
   </div>
   <h1>{head}</h1>
  </div>
)

export default IcoHeading;
