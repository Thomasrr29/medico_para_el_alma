import { FaLongArrowAltRight } from "react-icons/fa";

const ContactPage = () => {

    return  (
        <div className="w-full flex flex-col justify-center items-center h-screen p-4 text-center 
        bg-[url('https://cdn.sixtyandme.com/wp-content/uploads/2014/12/Living-Alone-or-in-a-Community-Whats-Best-After-60.jpg')] 
        border border-gray-200 shadow-xs sm:p-8 gap-6 bg-white py-2 px-4 rounded-xl">
                <h1 className="mb-4 text-4xl font-extrabold leading-none 
                tracking-tight text-neutral-950 md:text-5xl lg:text-6xl
                text-shadow-md text-shadow-white">We invest in the world’s potential</h1>
                <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <a href="#" className="flex items-center justify-center px-5 py-3 
                font-medium text-xl text-center text-white bg-neutral-950 rounded-lg 
                hover:bg-neutral-800 focus:ring-4 focus:ring-blue-300 
                gap-4 inset-shadow-sm inset-shadow-white/70 duration-500">
                    Unete a la comunidad
                    <FaLongArrowAltRight className="text-4xl" />
                </a>
        </div>
    )
}

export default ContactPage