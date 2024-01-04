
import './App.css'
import NavBar from './components/navBar/NavBar.jsx'
import Card from "./components/card/Card.jsx";
import CarouselComponent from "./components/carousel/CarouselComponent.jsx";
import {slidesData} from "../public/data.js";
function App() {
  return (
    <>
        <NavBar/>
        <Card/>
        <div className='sm:w-[80%] sm:m-auto sm:h-52 bg-grey-backgroud h-72 m-auto'>
            <CarouselComponent slides ={slidesData}/>
        </div>

    </>
  )
}

export default App
