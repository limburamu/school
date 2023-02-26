import React from 'react'
import First from '../assets/bus.jpg';
import Second from '../assets/newar.jpg';
import Third from '../assets/prize1.jpg';
import Fourth from '../assets/cultural.jpg';


const Galleries = () => {
  return (
    <div className='cover'>
      <div className='first'>
        <img className='a' src={First} />
        <img className='b' src={Second} />
        <img className='c' src={Third} />
        <img className='d' src={Fourth} />
      </div>
    </div>
  )
}

export default Galleries