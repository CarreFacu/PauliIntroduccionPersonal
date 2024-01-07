export default function AboutMe() {
    return (
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
            </div>
            <div className="xl:w-[250%]" >
                <img className="xl:w-[250%]" src="../../miFoto.jpg" alt="" />
            </div>
        </div>
    )
}
