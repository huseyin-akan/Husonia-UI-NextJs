import "./Navbar.css";
import reactLogo from '../../../assets/react.svg';
import { Link } from "react-router-dom";

export interface NavbarProps {
  title: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <div className="hus-navbar">
      <div className="hus-navbar-left">
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <span className="hus-neon">Husoka</span>
      </div>
      
      {/* <FontAwesomeIcon className="hus-navbar-menu-icon" icon={faBars} /> */}
      <nav className="navbar">
        <a href='/' className='hus-navbar-item active'>
          Home
        </a>
        <a href='/' className='hus-navbar-item'>
          Blog
        </a>
        <a href='/utilities' className='hus-navbar-item'>
          Utilities
        </a>
        <a href='/' className='hus-navbar-item'>
          About Me
        </a>
        <a href='/' className='hus-navbar-item'>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;