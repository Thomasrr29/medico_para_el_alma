function RenderButtons({activeIndex, numButtons, handleChange} : { activeIndex: number, numButtons: number; handleChange: (index: string) => void} ){

    const change = (e: React.MouseEvent<HTMLButtonElement>) => { 
        handleChange(e.currentTarget.name)
    }

    return (
        <div className="flex justify-center items-center gap-4">
            {
                Array.from({length: numButtons}, (_, i) => (
                    <button
                        key={i}
                        onClick={change} 
                        name={(i + 1).toString()}
                        className={`w-4 h-4 bg-beige-suave 
                        rounded-full cursor-pointer ${activeIndex == (i + 1) && 'bg-marron-intenso'}`}>
                    </button>
                ))
            }
        </div>
    ) 
}

export default RenderButtons
