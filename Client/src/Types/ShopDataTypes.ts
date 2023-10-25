export interface ItemsTypes{
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