
export interface ItemsCarousel {
    id: number,
    text: string, 
    image: React.ReactNode | string
}


export interface ItemsCarouselProperty {
    itemsCarousel: ItemsCarousel[]
}