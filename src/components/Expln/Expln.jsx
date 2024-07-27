import React from 'react'

import './Expln.css';

const Expln = ( {expln} ) => (
  <div className='app__expln'>
    <div className='app__expln-para'>
      <p className='para'>
        {expln}
      </p>
    </div>
    <div className='app__expln-read-more'>
      <a href='#'>Read More</a>
    </div>
  </div>
)

export default Expln;