import { ItemsCarouselProperty } from "../../types/ItemsCarousel"


const ItemsComponent: React.FC<ItemsCarouselProperty> = ({itemsCarousel}) => {

    return (
        <div className="py-30">
            <section className="relative w-max-[800px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,white_15%,white_80%,transparent_100%)]">
                <div className="w-[2600px] flex nowrap mx-auto pb-2 animate-right-move gap-5">
                    {
                        [...itemsCarousel, ...itemsCarousel].map((item) => (
                            <div key={item.id} 
                            className="w-[340px] h-[200px] flex flex-shrink-0 flex-col items-center justify-center 
                            rounded-lg shadow-sm gap-6">
                                <div>
                                    {item.image}
                                </div>
                                <h2 className="text-lg font-semibold m-0 p-0">{item.text}</h2>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}


export default ItemsComponent; 