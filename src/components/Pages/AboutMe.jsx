export default function AboutMe() {
    return (
        <>
        <div className="flex flex-col mt-8 w-[95%] m-auto gap-10 sm:gap-10 sm:m-auto xl:w-[60%] sm:mt-10 xl:flex-row">
            <div>
                <h2 className="text-titles text-2xl mb-10">MI HISTORIA Y LO QUE HAGO</h2>
                <h3 className="text-subtitle mb-5 text-xl">¡Hola!</h3>
                <p>En el lienzo de la naturaleza, una extensa llanura se despliega en un sinfín de verde serenidad.

                    El tapiz de hierba se extiende con una suavidad inigualable, acariciando el horizonte con sus tonos esmeralda.
                    A medida que la mirada se adentra, la distancia difumina sus límites en una danza sutil con la neblina matutina.

                    Detrás de este escenario, emerge un bosque misterioso, una silueta enigmática que se desvela entre velos de bruma.
                    Los árboles al fondo se recortan con delicadeza, sus formas se entrelazan con la neblina como guardianes de secretos antiguos.
                    Es un cuadro de tranquilidad y misterio, donde el verde y la niebla entrelazan una sinfonía que invita a soñar y explorar lo desconocido.
                </p>
                <p className="mt-4 text-gray-500">
                    En el ámbito deportivo, la kinesiología desempeña un papel crucial en la prevención de lesiones y el desarrollo de programas de entrenamiento personalizados. Los kinesiólogos trabajan en colaboración con atletas para optimizar su rendimiento, corrigiendo desequilibrios musculares, mejorando la postura y diseñando ejercicios específicos para fortalecer áreas débiles.
                </p>
                <h3 className="text-4xl text-subtitle mt-4 m-auto">Me gusta lo que hago,</h3>
                <h3 className="text-4xl text-subtitle mt-2  m-auto"> hago lo que me gusta</h3>
            </div>
            <div className="xl:w-[250%]" >
                <img className="xl:w-[250%]" src="../../miFoto.jpg" alt="" />
            </div>
        </div>

        <div className="flex flex-col mt-8 w-[95%] m-auto gap-10 sm:gap-10 sm:m-auto xl:w-[100%] sm:mt-10 xl:flex-row bg-gray-500 p-56 xl:h-full">
            <div className="xl:w-[150%]" >
                <img className="xl:w-[150%]" src="../../miFoto.jpg" alt="" />
            </div>
            <div>
                <h2 className="text-titles text-2xl mb-10 mt-4">TE CUENTO MÁS SOBRE MI</h2>
                <p className="w-[90%] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris in lacinia tincidunt, velit ligula consectetur libero, eget fringilla tortor ante sed elit. Curabitur ut ullamcorper mauris. Sed cursus, elit eu accumsan blandit</p>
                <p className="w-[90%] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris in lacinia tincidunt, velit ligula consectetur libero, eget fringilla tortor ante sed elit. Curabitur ut ullamcorper mauris. Sed cursus, elit eu accumsan blandit</p>
                <p className="w-[90%] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris in lacinia tincidunt, velit ligula consectetur libero, eget fringilla tortor ante sed elit. Curabitur ut ullamcorper mauris. Sed cursus, elit eu accumsan blandit</p>
                <p className="w-[90%] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris in lacinia tincidunt, velit ligula consectetur libero, eget fringilla tortor ante sed elit. Curabitur ut ullamcorper mauris. Sed cursus, elit eu accumsan blandit</p>
                <p className="w-[90%] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris in lacinia tincidunt, velit ligula consectetur libero, eget fringilla tortor ante sed elit. Curabitur ut ullamcorper mauris. Sed cursus, elit eu accumsan blandit</p>
                <p className="mt-4 text-white">
                    En el ámbito deportivo, la kinesiología desempeña un papel crucial en la prevención de lesiones y el desarrollo de programas de entrenamiento personalizados. Los kinesiólogos trabajan en colaboración con atletas para optimizar su rendimiento, corrigiendo desequilibrios musculares, mejorando la postura y diseñando ejercicios específicos para fortalecer áreas débiles.
                </p>
            </div>
        </div>
        </>
    )
}
