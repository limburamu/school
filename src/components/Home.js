import React from 'react'
import SchoolImg from '../assets/school.jpg';
import '../style/HomeStyles.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='background'>
        <img className='school' src={SchoolImg} alt='backgroundImg' /> 
      </div>
      <div className='headerContainer'>
        <h1>Welcome</h1>
      </div>
    </div>
  )
}

export default Home