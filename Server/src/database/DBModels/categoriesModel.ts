import { Schema, model } from "mongoose";

interface ItemsCategory{
    title: string;
    imageUrl: string;
    size?: string;
    id: number;
    linkUrl: string;
}

const itemsCategorySchema = new Schema<ItemsCategory>({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    size: String,
    id: {
        type: Number,
        required: true
    },
    linkUrl: {
        type: String,
        required: true
    }
})

const ItemsCategories  = model<ItemsCategory>("itemsCategory",itemsCategorySchema);
export default  ItemsCategories;