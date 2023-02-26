import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../style/AboutStyles.css'

const About = () => {
  return (
    <div className='dropdown'>
      <div className='dropdown-content'>
      <i class="fa fa-caret-down"></i>
        <Link to='/about'>Details</Link>
        <Link to='/about/achievement'>Achievement</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default About


// import React from 'react'
// import '../style/AboutStyles.css'
// import { Link } from 'react-router-dom'

// const About = () => {
//   return (
//     <div class="dropdown">
//       <button class="dropbtn">Drop
//         <i class="fa fa-caret-down"></i>
//       </button>
//       <div class="dropdown-content">
//         <a href="#">Details</a>
//         <a href="#">Achievement</a> 
//         <Link to='/about'>Details</Link>
//          <Link to='/about'>Achievement</Link>
//       </div>
//     </div>
//   )
// }

// export default About