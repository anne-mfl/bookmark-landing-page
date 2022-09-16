// import { useState } from 'react';
import './App.css';
import Download from './components/Download';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';


function App() {
  // const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="font-rubik">
      {/* <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/> */}
      <Navbar />
      <Home />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
