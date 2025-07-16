import HeroComponentProcess from "../components/process/heroComponent"
import QuestionsComponent from "../components/process/Questions"
import TopicsComponent from "../components/process/Topics"
import TutorsComponent from "../components/process/Tutors"
import { TestimonialsCarousel } from "../types/Testimonials"
import VerticalTimeline from "../components/process/Timeline"
import TestimonialsComponent from "../components/process/Testimonials"

const ProcessPage = () => {

    const testimonials_data: TestimonialsCarousel[] = [
        {
          "id": 1,
          "name": "María García",
          "text": "Encontré sanación para heridas del pasado que ni siquiera sabía que tenía. El acompañamiento espiritual me ayudó a reconectar con mi fe de manera profunda y auténtica.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
        },
        {
          "id": 2,
          "name": "Carlos Martínez",
          "text": "Las enseñanzas sobre el perdón fueron clave para sanar relaciones familiares que creía irreparables. Ahora vivo con gratitud cada día.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
        },
        {
          "id": 3,
          "name": "Ana Rodríguez",
          "text": "El retiro de sanación interior cambió mi vida. Me liberé de la ansiedad que me atormentaba por años. Siento que he vuelto a nacer espiritualmente.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light"
        },
        {
          "id": 4,
          "name": "Javier López",
          "text": "La meditación de las Escrituras me ha dado herramientas para enfrentar los desafíos con una nueva perspectiva. He encontrado paz en medio del caos diario.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        },
        {
          "id": 5,
          "name": "Lucía Fernández",
          "text": "Los momentos de adoración son especiales; siento una paz indescriptible. El apoyo durante mi enfermedad fue fundamental para mi recuperación física y espiritual.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Round&hairColor=BlondeGolden&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Pink&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Pale"
        },
        {
          "id": 6,
          "name": "Pedro Sánchez",
          "text": "Llegué en un momento de crisis profunda. La acogida sincera me ayudó a redescubrir el valor de la fe. El servicio a los demás ha dado un nuevo sentido a mi vida.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Side&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Brown"
        },
        {
          "id": 7,
          "name": "Isabel Moreno",
          "text": "El acompañamiento espiritual en momentos de duelo fue una bendición. Los talleres de oración han transformado mi manera de relacionarme con Dios y con los demás.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Kurt&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Bat&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=DarkBrown"
        },
        {
          "id": 8,
          "name": "Miguel Torres",
          "text": "Participar en las misiones cambió mi perspectiva sobre el servicio. Las enseñanzas sobre la misericordia divina me han permitido perdonarme a mí mismo y empezar de nuevo.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned"
        },
        {
          "id": 9,
          "name": "Elena Gutiérrez",
          "text": "La oración comunitaria y los retiros espirituales me dieron fuerzas cuando más lo necesitaba. Ahora vivo mi fe con alegría y entusiasmo renovados cada día.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=Blank&clotheType=Overall&clotheColor=Blue03&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light"
        },
        {
          "id": 10,
          "name": "Roberto Díaz",
          "text": "Las enseñanzas sobre el amor incondicional y el perdón sanaron profundamente nuestro matrimonio. La fe compartida puede transformar incluso las situaciones más difíciles.",
          "image": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Black"
        }
    ]
    

    return ( 
        <>
            <HeroComponentProcess/>
            <TopicsComponent/>
            <VerticalTimeline/>
            <TestimonialsComponent testimonials={testimonials_data}/>
            <TutorsComponent/>
            <QuestionsComponent/>
        </>
    )
}

export default ProcessPage 