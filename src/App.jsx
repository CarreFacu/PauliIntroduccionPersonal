
import NavBar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';


import MainContent from './components/Pages/MainContent.jsx';
import AboutMe from './components/Pages/AboutMe.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
