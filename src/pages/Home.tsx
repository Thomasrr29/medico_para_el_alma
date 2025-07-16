import { lazy, Suspense} from "react"
import { ItemsCarousel } from "../types/ItemsCarousel"
import {GiLion, GiBrain, GiProgression, GiSprout, GiTeacher, GiOpenBook} from "react-icons/gi"
import {FaHeart, FaUsers, FaLandmark } from "react-icons/fa"
import { MdSelfImprovement } from "react-icons/md"
import AutorityComponent from "../components/home/autority"
import PhraseComponent from "../components/ui/PhraseComponent"
import LoaderComponent from "../components/ui/LoaderComponent"

const CallToActionComponent = lazy(() => import("../components/home/CallToAction"))
const CommunityComponent = lazy(() => import("../components/home/statsSection"))
const HeroComponent = lazy(() => import("../components/home/Hero"))
const ItemsComponent = lazy(() => import("../components/home/Ethos"))
const PillarsComponent = lazy(() => import("../components/home/Pillars"))

const HomePage = () => {

    const items_first: ItemsCarousel[] = [
        { id: 1, text: 'Valentia', image: <GiLion size={48}/> },
        { id: 2, text: 'Psicología', image: <GiBrain size={48}/> },
        { id: 3, text: 'Amor', image: <FaHeart size={48}/> },
        { id: 4, text: 'Comunidad', image: <FaUsers size={48}/> },
        { id: 5, text: 'Desarrollo', image: <GiProgression size={48}/> },
        { id: 6, text: 'Esperanza', image: <GiSprout size={48}/> },
        { id: 7, text: 'Cultura', image: <FaLandmark size={48}/>},
        { id: 8, text: 'Retiros', image:  <MdSelfImprovement size={48}/>},
        { id: 9, text: 'Formación', image:  <GiTeacher size={48}/>},
        { id: 10, text: 'Conocimiento', image:  <GiOpenBook size={48}/>},
    ]

        
    return (

        <Suspense fallback={<LoaderComponent color="dorado-clasico"/>}>
            <HeroComponent/>
            <ItemsComponent itemsCarousel={items_first}/>
            <AutorityComponent/>
            <PillarsComponent/>
            <PhraseComponent phrase="Dios es nuestra guia, nuestro amor y bendición" background_color="marron-intenso"/>
            <CommunityComponent/>
            <CallToActionComponent/>
        </Suspense>  
    )
}

export default HomePage

