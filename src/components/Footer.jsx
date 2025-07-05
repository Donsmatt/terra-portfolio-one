import { FaCopyright } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Footer.css"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <FaCopyright className="footer-icon" />
        {year}
        <img src={logo} alt="DevHub" className="footer-logo" />
        inc. All rights reserved
    </footer>
  );
};

export default Footer;
