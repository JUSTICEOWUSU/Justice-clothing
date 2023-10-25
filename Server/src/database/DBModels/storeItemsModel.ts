import { Schema, model } from "mongoose";

interface ItemsTypes{
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

interface ShopDataType{
    id: number;
    title: string;
    routeName: string;
    items: ItemsTypes[];
}

// Individual Item Model
const ItemModel = new Schema<ItemsTypes>({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

// Main StoreItems Model
const storeItemModel = new Schema<ShopDataType>({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    routeName: {
        type: String,
        required: true
    },

    items: {
        type: [ItemModel]
    },
})

const storeItems = model("StoreItem", storeItemModel)
export default storeItems
