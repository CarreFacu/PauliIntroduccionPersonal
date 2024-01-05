import { FaWhatsapp, FaInstagram  } from "react-icons/fa"
export default function Footer() {
    return (
        <div className="bg-green-background h-32 mt-20 flex flex-col sm:flex sm:flex-row justify-between sm:px-52 text-2xl">
            <div className="m-auto">
                <h4>Contacto</h4>
                <h5>asdasdasdasd@gmail.com</h5>
            </div>
            <div className="flex gap-32 text-4xl m-auto">
                <a href="https://www.instagram.com/tu_usuario_de_instagram" target="_blank">
                    <FaInstagram />
                 
                </a>
                <a href="https://api.whatsapp.com/send?phone=TU_NUMERO_DE_TELEFONO" target="_blank">
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    )
}
