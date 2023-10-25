import { Mens, Women, Sneakers, Hats, Jackets } from "../database/DATA/ShopData";
import storeItems from "../database/DBModels/storeItemsModel";

const toBeLoadedData = [Mens, Women, Sneakers, Hats, Jackets];

const loadStoreData = async () => {
    const checkStoreDataExistence = await storeItems.findOne({
        title: Mens.title
    }, { _id: 0,"items._id":0});


    if (!checkStoreDataExistence) {

        // DATA LOADING STARTED
        toBeLoadedData.map(item => {
            const newStoreItem = new storeItems(item);

            newStoreItem.save((error) => {
                if (error) {
                    console.log('Error saving the user:', error);
                } else {
                    console.log('User saved successfully');
                }
            });
        });
    } else {
        return console.log("DATA HAS ALREADY BEEN LOADED");
    }

    return console.log("ALL DATA HAS BEEN LOADED SUCCESSFULLY");
}

export default loadStoreData;