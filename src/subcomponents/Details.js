import React from 'react'
import Ground from '../assets/bus.jpg';
import '../style/DetailsStyles.css';


const Details = () => {
  return (
    <div className='detail'>
      <div className='wallpaper'>
        <img src={Ground} className='ground' />
      </div>
      <div className='detailContainer'>
        <h1>LABS</h1>
        <p>
          LABS was established on 1994 (2051 BS) as a small school with small number of students
          by founder Mr.Chandra Kumar Karki. It has come a long way starting from rented house with
          less number of students, to having its own building and nearly 1300 students studying from 
          standard pre-nursery to grade X and is one of the renowned school in its locality. 
        </p>
      </div>
    </div>
  )
}

export default Details