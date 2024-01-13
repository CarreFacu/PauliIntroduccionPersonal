import Card from "../card/Card.jsx";
import CarouselComponent from "../carousel/CarouselComponent.jsx";
import {slidesData} from "../../../public/data.js";
export default function MainContent() {
    return (
        <div>
            <Card />
            <div className='sm:w-[80%] sm:m-auto sm:h-52 bg-grey-background h-[428px] m-auto z-10'>
                <CarouselComponent slides={slidesData} />
            </div>
        </div>
    )
}
