import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../style/GalleryStyles.css';


const Gallery = () => {
  return (
    <div className='drop'>
      <div className='drop-content gallery-content'>
        <i className='fa-fa-caret-down'>
          <Link to='/gallery'>Galleries</Link>
          <Link to='/gallery/video'>Video</Link>
        </i>
      </div>
      <Outlet />
    </div>
  )
}

export default Gallery