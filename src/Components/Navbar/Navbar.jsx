import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'


function Navbar() {
  const[mobileMenu, setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu?'':'hide_mobile_menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Program</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}className="btn">Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
