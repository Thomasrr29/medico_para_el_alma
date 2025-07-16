const QuestionsComponent = () => {

    interface QuestionsProps {
        id: string,
        question: string,
        answer: string 
    } 

    const questionsComponent: QuestionsProps[] = [
        {
          "id": "1",
          "question": "¿Qué tipo de retiros ofrecen?",
          "answer": "Ofrecemos diversos retiros espirituales enfocados en la sanación interior, el acercamiento a Dios y el crecimiento espiritual. Contamos con retiros de fin de semana, jornadas de un día, y encuentros temáticos según las necesidades de los participantes."
        },
        {
          "id": "2",
          "question": "¿Es necesario tener experiencia previa para participar en sus retiros?",
          "answer": "No, nuestros retiros están abiertos a personas en diferentes etapas de su camino espiritual. Ya sea que estés comenzando tu acercamiento a Dios o busques profundizar tu fe, tenemos espacios para todos."
        },
        {
          "id": "3",
          "question": "¿Quiénes dirigen los retiros?",
          "answer": "Nuestros retiros son dirigidos por un equipo de laicos comprometidos y sacerdotes con experiencia en acompañamiento espiritual y formación católica, todos con una sólida preparación en espiritualidad y sanación interior."
        },
        {
          "id": "4",
          "question": "¿Cuánto duran los retiros?",
          "answer": "La duración varía según el tipo de retiro. Generalmente ofrecemos retiros de fin de semana (de viernes a domingo), jornadas de un día (sábado o domingo completo) y encuentros semanales de formación (2-3 horas)."
        },
        {
          "id": "5",
          "question": "¿Dónde se realizan los retiros?",
          "answer": "Realizamos nuestros retiros en casas de retiro adaptadas para proporcionar un ambiente de recogimiento, oración y tranquilidad, generalmente en zonas alejadas del ruido de la ciudad para facilitar el encuentro con Dios."
        },
        {
          "id": "6",
          "question": "¿Qué debo llevar a un retiro?",
          "answer": "Recomendamos traer ropa cómoda, Biblia, cuaderno para anotaciones, artículos de higiene personal, y cualquier medicamento que necesites. Proporcionamos todos los materiales específicos para las actividades del retiro."
        },
        {
          "id": "7",
          "question": "¿Tienen costos los retiros?",
          "answer": "Solicitamos una contribución para cubrir gastos de alojamiento, alimentación y materiales. Sin embargo, contamos con opciones de becas y apoyo para quienes tienen dificultades económicas, ya que deseamos que todos puedan participar."
        },
        {
          "id": "8",
          "question": "¿Qué es la sanación interior desde la perspectiva católica?",
          "answer": "La sanación interior es un proceso espiritual mediante el cual, con la gracia de Dios, sanamos heridas emocionales y espirituales del pasado que afectan nuestra relación con Dios, con nosotros mismos y con los demás. Se fundamenta en la fe, la oración, los sacramentos y el acompañamiento espiritual."
        },
        {
          "id": "9",
          "question": "¿Puedo participar si estoy pasando por un momento difícil?",
          "answer": "Absolutamente. Nuestros retiros son especialmente valiosos en momentos de crisis o dificultad, pues ofrecen un espacio de paz, discernimiento y encuentro con Dios. Contamos con acompañantes espirituales preparados para escuchar y orientar."
        },
        {
          "id": "10",
          "question": "¿Ofrecen acompañamiento espiritual después del retiro?",
          "answer": "Sí, consideramos que el retiro es el inicio de un camino. Ofrecemos acompañamiento posterior a través de grupos de oración, dirección espiritual personalizada y comunidades de vida que se reúnen regularmente."
        },
        {
          "id": "11",
          "question": "¿Pueden organizarse retiros para grupos específicos (jóvenes, matrimonios, etc.)?",
          "answer": "Sí, contamos con retiros diseñados para necesidades específicas: jóvenes, matrimonios, adultos mayores, personas en duelo, y otros. También podemos organizar retiros personalizados para parroquias o grupos que lo soliciten."
        },
        {
          "id": "12",
          "question": "¿Es necesario confesarse durante el retiro?",
          "answer": "Ofrecemos el sacramento de la Reconciliación como parte importante del proceso de sanación interior, pero siempre es voluntario. Creemos que es una gracia especial para experimentar el perdón y la misericordia de Dios."
        },
        {
          "id": "13",
          "question": "¿Cómo puedo prepararme espiritualmente antes de asistir?",
          "answer": "Recomendamos una actitud de apertura al Espíritu Santo, oración personal en los días previos, y si es posible, participar en la Eucaristía. También sugerimos reflexionar sobre las áreas de tu vida en las que buscas sanación o crecimiento espiritual."
        }
      ]

    return ( 
        <section className="bg-dorado-clasico py-20">
            <div className="flow-root w-3/4 lg:w-1/2 mx-auto shadow-sm p-8 rounded-xl mb-10 bg-white">
                <h2 className="text-center text-2xl md:text-4xl font-semibold w-1/2 mx-auto mb-20 text-neutral-900">Preguntas y Respuestas</h2>
                <div className="w-full my-4 flex flex-col divide-y divide-gray-200">
                        {
                            questionsComponent.map((question) => (

                                <details className="group py-4 [&_summary::-webkit-details-marker]:hidden"
                                key={question.id}>
                                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                                        <h2 className="text-lg font-medium text-black">{question.question}</h2>

                                        <svg
                                            className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <p className="pt-4 text-gray-900">
                                    {question.answer}
                                    </p>
                                </details>

                            ))
                        }
                        
                </div>
            </div>

        </section>
       
    )
}

export default QuestionsComponent