import { BiPhone } from "react-icons/bi"

const PhoneIconComponent = () => {

    return (
        <a 
        className="fixed bottom-4 right-4 bg-beige-suave
        p-3 rounded-full hover:bg-amber-500 duration-2000 hover:scale-110" 
        href="https://www.youtube.com/">
            <BiPhone size={44} color=""/>
        </a>
    )
}


export default PhoneIconComponent