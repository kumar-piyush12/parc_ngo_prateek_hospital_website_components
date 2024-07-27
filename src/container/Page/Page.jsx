import React from 'react'

import './Page.css'
import { images } from '../../constants'
import { data } from '../../constants/'
import Expln from '../../components/Expln/Expln'
import IcoHeading from '../../components/IcoHeading/IcoHeading.jsx'
import MainImg from '../../components/MainImg/MainImg'
const Page = () => (
  <div className='app__page'>
    <div className='row1'>
      <div className='ogyna'>
        {data.ogyna.map((ogyna) => (
          <IcoHeading head={ogyna.head} logo={ogyna.logo} />
        ))}
        {data.uro.map((ogyna) => (
        <Expln expln={ogyna.expln} />          
        ))}        

      </div>

      <div className='ortho'>
        {data.ortho.map((ortho) => (
          <IcoHeading head={ortho.head} logo={ortho.logo} />
        ))}
        {data.ortho.map((ortho) => (
        <Expln expln={ortho.expln} />          
        ))}      
      </div>
    </div>

    <div className='main-img'>
      <MainImg className='doctor-img' />
    </div>

    <div className='row2'>
      <div className='uro'>
        {data.uro.map((uro) => (
          <IcoHeading head={uro.head} logo={uro.logo} />
        ))}
        {data.uro.map((uro) => (
        <Expln expln={uro.expln} />          
        ))}      
      </div>

      <div className='gastro'>
        {data.gastro.map((gastro) => (
          <IcoHeading head={gastro.head} logo={gastro.logo} />
        ))}
        {data.gastro.map((gastro) => (
        <Expln expln={gastro.expln} />          
        ))}   
      </div>
    </div>
  </div>
)

export default Page;
