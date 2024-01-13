import 'animate.css';
export default function Services() {
    return (
        <>
            <div className=" flex flex-col justify-center gap-x-48 mt-10 xl:flex-row ">
                    <h2 className=" text-center text-titles text-3xl xl:w-[30%] items-center flex animate__animated animate__backInLeft">
                        TPA: qué es, para quién y cuáles son sus beneficios. Acá te contamos todo.
                    </h2>
                <div className="w-72 m-auto mt-4 xl:m-0 animate__animated animate__backInRight" >
                    <img className="w-72" src="../../../3-Terapia-Postural-Activa.jpg" alt="" />
                </div>
            </div>
            <div className="m-auto w-[85%] xl:w-[70%] text-xl mt-12 text-gray-600 gap-y-3 animate__animated animate__zoomIn">
                <p className="mt-4">
                    ¿Qué es la Terapia Postural Activa?<br />
                </p>
                <p className="mt-4">
                    Es una técnica terapéutica gimnástica que tiene como objetivo rehabilitar y educar la postura global e integral de las personas. Trabaja sobre las cadenas posturales reeducándolas y entrenándolas.<br /></p>
                <p className="mt-4">
                    ¿Para quién va dirigido?<br />
                </p>
                <p className="mt-4">
                    Está destinado a todos aquellos que busquen entrenar, tonificar la musculatura y mejorar su postura. Es adaptable, a las circunstancias físicas, edad y capacidad del alumno.<br />
                </p>
                <p className="mt-4">
                    ¿Cuáles son sus beneficios?
                </p>
                <p className="mt-4">
                    🔸 Cambios y ajustes en los vicios posturales.<br />
                    🔹 Elongación y tonificación del cuerpo.<br />
                    🔸 Previene lesiones.<br />
                    🔹 Aprendizaje y conciencia postural.<br />
                    🔸 Mejora la calidad de vida.<br />
                </p>
                <p className="mt-4">
                    ¿Por qué elegir TPA entre todas las propuestas y nuevas formas de entrenamiento/rehabilitación?
                </p>
                <p className="mt-4">
                    Porque el terapista, es un profesional con respaldo institucional, habilitado en el campo de la salud, del movimiento y la rehabilitación (base en Kinesiología y Fisioterapia); capacitado para transmitir TPA con fines gimnásticos, educativos y preventivos.
                </p>
                <p className="mt-4">
                    La misma está a cargo la Lic Carreño Paula, la cual está Diplomada en TPA.
                </p>

            </div>
        </>
    )
}
