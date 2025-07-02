import "../styles/RootLayout.css"

const RootLayout = ({ children }) => {
  return (
    <div className="root-layout">
      <header>
        {/* Replace this with your actual Navbar component */}
        Navbar Component here...
      </header>

      <main>{children}</main>

      <footer>
        {/* Replace this with your actual Footer component */}
        Footer component here...
      </footer>
    </div>
  );
};

export default RootLayout;
