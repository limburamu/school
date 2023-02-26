import React from 'react'
import InstragramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalk from '@material-ui/icons/PhoneInTalk';
import LocationCity from '@material-ui/icons/LocationCity'
import '../style/FooterStyles.css';



const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <LocationCity />
            <p>Mechingar-13, Jhapa, Nepal</p>
          </div>
          <div className='phone'>
            <PhoneInTalk />
            <p>023-460224</p>
          </div>
          <div className='email'>
            <EmailIcon />
            <p>littleangles123@gmail.com</p>
          </div>
        </div>
        <div className='right'>
          <div className='social'>
            <InstragramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer