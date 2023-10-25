
type Items = {
    title: string;
    imageUrl: string;
    size?: string;
    id: number;
    linkUrl: string;
}

const HomePageData: Items[] = [
    {
        title: 'hats',
        imageUrl: 'https://media.istockphoto.com/id/1358483276/photo/classic-cowboy-brown-felt-hat-with-strap-and-copper-closure.jpg?s=612x612&w=0&k=20&c=IcQy8ISff_GCoGbAYVy_-svOwp74vbZyT4MFTSBbdHc=',
        id: 1,
        linkUrl: 'shop/hats'

    },
    {
        title: 'jackets',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/01/29/19/55/fur-3117033_960_720.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://media.istockphoto.com/id/1357329192/photo/lifestyle-portrait-of-fashionable-woman-wearing-winter-or-spring-outfit-felt-hat-gray-wool.jpg?s=612x612&w=0&k=20&c=e8eNsDBNHsgph5g2kSOceAFeTjwgbHLuGGeeyhcgIR0=',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631_960_720.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
]

export default HomePageData;