import React, {useRef} from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {sublinks, openSubmenu, closeSubmenu, openSidebar} = useGlobalContext();
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo'></img>
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link,index) => <li key={index}><button className='link-btn' onMouseOver={(e)=> openSubmenu(e.currentTarget.textContent, e.currentTarget.getBoundingClientRect().left)} onMouseOut={closeSubmenu}>{link.page}</button></li>)}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar
