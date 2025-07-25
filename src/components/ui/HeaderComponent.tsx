import { useState } from "react"
import { FaTimes, FaBars, FaPhoneAlt} from "react-icons/fa"
import logo from "@assets/logo.jpg"
import { Link } from "react-router-dom"

const HeaderComponent = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="flex flex-col items-center w-full h-auto md:h-[100px] py-4 md:py-0">
            <section className="flex flex-col md:flex-row w-full md:w-11/12 lg:w-4/5 items-center justify-between h-full px-4 md:px-0">
                {/* Logo */}
                <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                    <Link to="/" className="flex items-center">
                        <img 
                            src={logo}
                            alt="Logo" 
                            className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] md:ml-10" 
                        />   
                    </Link>
                    
                    {/* Botón de menú móvil - Solo visible en móvil */}
                    <button className="text-gray-800 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes className="text-3xl"/> : <FaBars className="text-3xl" />}
                    </button>
                </div>
                
                {/* Navegación - Cambia a flex-col en móvil */}
                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center justify-center underline-offset-4 text-lg text-gray-800 font-semibold gap-4 md:gap-x-8`}>
                    <Link to="/" className="hover:underline py-2 md:py-0">Inicio</Link>
                    <Link to="/proceso" className="hover:underline py-2 md:py-0">Proceso</Link>
                    <Link to="/comunidad" className="hover:underline py-2 md:py-0 transition-all duration-200">Comunidad</Link>
                </nav>

                <a className="hidden md:flex">
                    <FaPhoneAlt className="text-3xl"/>
                </a>
            </section>
        </header>
    )
}

export default HeaderComponent