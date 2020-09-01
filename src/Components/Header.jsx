import React, {useState} from 'react';
import './header.css'
import { Link } from 'react-router-dom';

function Header(props) {

    const [menuStatus, setMenuStatus] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const handleMenuToggle = (e) => {
        if(menuStatus === false && showMenu === false) {
            setMenuStatus(true)
            setShowMenu(true)
         } else {
            setMenuStatus(false)
            setShowMenu(false)
         }
    }

    return (
      <div className="App">
        <nav>
        <Link to="/" className='nav-link'><div className="main-initials">WB</div></Link>
            <ul className='nav-desktop'>
                <Link to="/posts" className='nav-link'><li>All Posts</li></Link>
                <Link to="/about" className='nav-link'><li>About</li></Link>
                <Link to="/contact" className='nav-link'><li>Contact</li></Link>
            </ul>
            <div className={`hamburger-btn ${menuStatus ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <div className="hamburger-patty"></div>
            </div>
        </nav>

        <div >
        <ul className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
                <Link to="/posts" className='nav-link-mobile' onClick={handleMenuToggle}><li>All Posts</li></Link>
                <Link to="/about" className='nav-link-mobile' onClick={handleMenuToggle}><li>About</li></Link>
                <Link to="/contact" className='nav-link-mobile' onClick={handleMenuToggle}><li>Contact</li></Link>
            </ul>
            </div>
      </div>
    );
  }
  
  export default Header;