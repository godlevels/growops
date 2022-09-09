import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import FeaturesTwo from './components/pages/featurestwo/FeaturesTwo';
import About from './components/pages/about/About';
import Download from './components/pages/download/Download';
import Blog from './components/pages/blog/Blog';
import Footer from './components/footer/Footer';



function App() { 
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Services path='services' />
        <FeaturesTwo path='services'/>
        <About path='aboutus'/>
        <Download path='aboutus'/>
        <Blog path='blog'/>
        <Footer path='contactus'/>
      </BrowserRouter>
  );
}

export default App;
