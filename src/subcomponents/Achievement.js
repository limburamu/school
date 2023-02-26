import React from 'react'
import Path from '../assets/buses.jpg'
import '../style/AchievementStyles.css'


const Achievement = () => {
  return (
    <div className='main'>
      <div className='image'>
        <img src={Path} className='path' />
      </div>
      <div className='achievementContainer'>
      <h1>Achievement</h1>
      <p>This school has been able to produce some the renowned doctors, engineers and bankers.</p>
      </div>
    </div>
  )
}

export default Achievement