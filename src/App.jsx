
import NavBar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';


import MainContent from './components/Pages/MainContent.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainContent />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
