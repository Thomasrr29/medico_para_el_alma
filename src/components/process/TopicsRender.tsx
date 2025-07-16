const TopicsRender = () => {

    const topics = [
        {   
            id: 1,
            title: "Sanación Interior",
            image: "../src/assets/break.jpg",
            color: 'border-beige-suave text-beige-suave'
        },
        {
            id: 2,
            title: "Lectio Divina",
            image: "../src/assets/bible.jpg",
            color: 'border-beige-suave text-beige-suave'
        },
        {
            id: 3,
            title: "Apologetica",
            image: "../src/assets/bible.jpg",
            color: 'border-beige-suave text-beige-suave'
        },
        {
            id: 4,
            title: "Historia",
            image: "../src/assets/history.jpg",
            color: 'border-beige-suave text-beige-suave'
        }
    ]

    return (
        <section className="w-4/5 mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center items-center gap-10">

            {
                topics.map((topic, index) => (
                    <div key={topic.id} className={`flex flex-col justify-center 
                    items-center gap-6 cursor-pointer rounded-full 
                    ${topics[index].color}`}>
                        <img
                        className={`w-72 aspect-square object-cover 
                        border-8 rounded-full shadow-lg shadow-beige-suave`}
                        src={topic.image} alt="" />
                        <p className="font-bold text-2xl tracking-wider">{topic.title}</p>
                    </div>
                ))
            }

        </section>

        
        
    )



}


export default TopicsRender