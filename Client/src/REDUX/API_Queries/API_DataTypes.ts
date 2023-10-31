
export type HomeItems = {
    categories:[
        {
            title: string;
            imageUrl: string;
            size ?: string;
            id: number;
            linkUrl: string;
        }
    ]
}


interface ItemsTypes{
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

interface ShopDataType {
    id: number;
    title: string;
    routeName: string;
    items:ItemsTypes[];
    limit?:number;
}

export type StoreItems = {
    categories:ShopDataType[]
}

export type IsAuthenticated = {
    token:string,
    isAuthenticated:boolean
}
