import React from 'react'
import Front from '../assets/newar.jpg';
import '../style/ContactStyles.css';

const Contact = () => {
  return (
    <div className='wrap'>
      <div className='subWrap'>
        <img src={Front} className='front' />
      </div>
    </div>
  )
}

export default Contact