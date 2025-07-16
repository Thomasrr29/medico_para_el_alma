type PhraseProperties = {
    phrase: string,
    background_color: string,
    text_color?: string
}

const PhraseComponent = ({phrase, background_color, text_color = "white"}: PhraseProperties)   => {
    return (

        <div className={`flex justify-center items-center bg-${background_color} text-${text_color} py-12`}>

            <div className="w-4/5 mx-auto text-center">
                <span className="font-light text-lg md:text-xl text-white">{phrase}</span>
            </div>

        </div>

    )
}

export default PhraseComponent