import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import {useEffect, useState} from "react";
// eslint-disable-next-line react/prop-types
export default function CarouselComponent({slides}) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const handleNext = () => {
        // eslint-disable-next-line react/prop-types
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        // eslint-disable-next-line react/prop-types
        setCurrentTextIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Cambia el número 5000 por el intervalo de tiempo en milisegundos que desees (por ejemplo, 5000 para 5 segundos).

        return () => clearInterval(interval);
    }, [currentTextIndex]);
    return (
        <div className="overflow-hidden relative sm:h-52 h-[428px] py-7 sm:py-0">
            <div className="flex sm:h-52  items-center w-[80%] m-auto justify-center">
                {/* eslint-disable-next-line react/prop-types */}
                <p className="text-center">{slides[currentTextIndex].text}</p>
            </div>
            <div className="absolute top-0 h-full w-full justify-between items-center flex px-10 text-black invisible sm:visible">
                <button onClick={handlePrev} className="text-black">
                    <SlArrowLeft/>
                </button>
                <button onClick={handleNext} className="text-black">
                    <SlArrowRight/>
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {/* eslint-disable-next-line react/prop-types */}
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 mx-1 bg-gray-500 rounded-full ${
                            index === currentTextIndex ? 'bg-white' : ''
                        }`}
                    ></div>
                ))}
            </div>
        </div>
        // <div className="overflow-hidden relative h-52">
        //     <div className="h-52 items-center w-[80%] m-auto justify-center">
        //         {/* eslint-disable-next-line react/prop-types */}
        //         {slides.map((s)=>{
        //             // eslint-disable-next-line react/jsx-key
        //             return <h3>{s.text}</h3>
        //         })}
        //     </div>
        //      <div className='absolute top-0 h-full w-full justify-between items-center flex px-10 text-black '>
        //          <button >
        //              <SlArrowLeft/>
        //          </button>
        //          <button>
        //              <SlArrowRight/>
        //          </button>
        //      </div>
        // </div>
        // <div className="overflow-hidden relative h-52 bg-grey-backgroud w-[80%] m-auto">
        //     <div className={`flex  transition ease-out duration-500`} style={{transform: `translateX(${current*100}%)`}}>
        //         {/* eslint-disable-next-line react/prop-types */}
        //         {slides.map((slide) =>{
        //             return(
        //                 <div className="w-[60%]" key={slide.id}>
        //                     <h2>{slide.text}</h2>
        //                 </div>
        //             )
        //         })}
        //     </div>

        // </div>

    );
}