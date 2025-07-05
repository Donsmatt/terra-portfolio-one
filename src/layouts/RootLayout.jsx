import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/RootLayout.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
