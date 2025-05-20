import { TestimonialsCarouselProperty } from "../../types/Testimonials";


const TestimonialsComponent: React.FC<TestimonialsCarouselProperty> = ({testimonials}) => {

    return (
        <div className="py-30 bg-orange-600">
            <section className="relative w-max-[800px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,white_15%,white_80%,transparent_100%)] ">
                <div className="w-[2600px] flex nowrap mx-auto pb-2 animate-right-move gap-6 text-center justify-center">
                    {
                        [...testimonials, ...testimonials].map((item) => (
                            <div key={item.id} 
                            className="w-[320px] h-[280px] flex flex-shrink-0 flex-col shadow-lg rounded-3xl bg-white" >
                                <div className="flex justify-center mb-4">
                                    <img className="w-[80px]" src={item.image} alt="" />
                                </div>
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="italic text-neutral-800 text-[14px] font-normal w-3/4 mx-auto">{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}


export default TestimonialsComponent; 