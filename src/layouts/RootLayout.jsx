import "../styles/RootLayout.css"
import logo from '../assets/logo.png'

const RootLayout = ({ children }) => {
  return (
    <div className="root-layout">
      <header className="header">
      <div className="container nav-wrapper">
        <div className="logo">
                    <img src={logo} alt="Logo" />
                  </div>

        {/* Hamburger – visible on ≤768 px */}
        <button
          className={`hamburger ${open ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'open' : ''}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <a href="#contact" className="cta-btn">
            Contact me
          </a>
        </nav>
      </div>
    </header>

      <main>{children}</main>

      <footer>
        {/* Replace this with your actual Footer component */}
        <div className="copyright">
      &copy;&nbsp;{new Date().getFullYear()} DEVWHO. All rights reserved.
    </div>
      </footer>
    </div>
  );
};

export default RootLayout;
