import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home/>
      <Work />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) 
}

export default App;
