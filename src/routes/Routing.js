import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Achievement from '../subcomponents/Achievement'
import Details from '../subcomponents/Details'
import Contact from '../components/Contact'
import Service from '../components/Service'
import Gallery from '../components/Gallery'
import Galleries from '../subcomponents/Galleries'
import Video from '../subcomponents/Video'


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} >
          <Route path='/about' element={<Details />} />
          <Route path='/about/achievement' element={<Achievement />} />
          </Route>

          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/gallery' element={<Gallery />} >
            <Route path='/gallery' element={<Galleries />} />
            <Route path='/gallery/video' element={<Video />} />
            </Route>
     </Routes>
  )
}

export default Routing