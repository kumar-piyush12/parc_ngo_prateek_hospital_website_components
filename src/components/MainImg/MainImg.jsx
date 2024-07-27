import React from 'react'
import { images } from '../../constants'

import './MainImg.css'

const MainImg = () => (
  <div className="app__main-img">
   <img src= {images.doc} alt="" className="doctor" />
  </div>
)

export default MainImg; 
