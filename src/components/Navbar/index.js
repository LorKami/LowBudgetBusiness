import React from 'react'
import './Navbar.css'

import { FaTwitter, FaDiscord } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
        
        <div className='NavbarFixColor'>
        <div className='NavbarSection curved'>
      <div className='NavbarMonitor'>

        <div className='NavbarTitle'>
          <h2>Low Budget Business</h2>
        </div>

        <div className='NavbarSocials'>

          <div className='BtnSocials'>
          <a href='https://twitter.com/LBB_sol' target='_blank'><FaDiscord style={{ verticalAlign: 'middle' }} size='1.3rem'/> Join Discord</a>
          </div>

          <div className='BtnSocials'>
          <a href='https://twitter.com/LBB_sol' target='_blank'><FaTwitter style={{ verticalAlign: 'middle' }} size='1.3rem'/> LBB Twitter</a>
          </div>
        </div>

      </div>
    </div>
    </div>

    </div>
  )
}

export default Navbar