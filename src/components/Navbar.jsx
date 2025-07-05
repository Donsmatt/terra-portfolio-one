import Button from "./Button";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar container">
      <Link to="/">
        <img src={logo} alt="DevHub" />
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      <div className={`navbar__items ${menuOpen ? "open" : ""}`}>
        <ul className="navbar__list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
        <div className="btn-container">
          <NavLink to="contact">
            <Button label="Contact us" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
