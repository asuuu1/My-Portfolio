import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';
import { MobileMenu } from './Components/MobileMenu';
import { Home } from './Components/Sections/Home';
import { About } from './Components/Sections/About';
import { Projects } from './Components/Sections/Projects';
import { Contact } from './Components/Sections/Contact';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState (false)
  const [menuOpen, setMenuOpen] = useState (false)

  return (
  <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
      <div 
        className={`min-h-screen transition-opacity duration-700 
        ${isLoaded ? "opacity-100" : "opacity-0"}
        bg-black text-gray-100`} 
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      </>
  );
}

export default App
