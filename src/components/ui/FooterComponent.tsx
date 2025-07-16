const FooterComponent = () => {

    return (

        <footer className="bg-white text-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
                    <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Christian_cross.svg" 
                            className="h-16" alt="Medico para el alma Logo" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm uppercase font-bold">Páginas</h2>
                            <ul>
                                <li className="mb-4">
                                    <a href="http://localhost:5173/process" className="hover:underline">Proceso</a>
                                </li>
                                <li>
                                    <a href="http://localhost:5173/contact" className="hover:underline">Contacto</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm uppercase font-bold">Siguenos</h2>
                            <ul className="text-whitefont-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm uppercase font-bold">Aliados</h2>
                            <ul>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
            </div>
        </footer>

    )
}


export default FooterComponent