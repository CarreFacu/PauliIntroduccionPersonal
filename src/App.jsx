
import NavBar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';


import MainContent from './components/Pages/MainContent.jsx';
import AboutMe from './components/Pages/AboutMe.jsx';
import Services from "./components/Pages/Services.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
