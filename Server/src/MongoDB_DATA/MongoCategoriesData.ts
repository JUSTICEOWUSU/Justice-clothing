import HomePageData from "../database/DATA/HeroSectionData";
import CategoryItems from "../database/DBModels/categoriesModel";

const loadCategoryData = async () => {
    const checkCategoryDataExistence = await CategoryItems.findOne({
        title: HomePageData[0].title
    }, { _id: 0});


    if (!checkCategoryDataExistence) {

        // DATA LOADING STARTED
        HomePageData.map( async item => {
            const newCategoryItem = new CategoryItems(item);

            // SAVING DATA
            try {
                await newCategoryItem.save()
                console.log('HOMEPAGE DATA saved successfully');
            } catch (error) {
                console.log('Error saving HOMEPAGE DATA user:', error);
            }    
        });
    } else {
        return console.log("HOMEPAGE DATA HAS ALREADY BEEN LOADED");
    }

    return console.log("ALL HOMEPAGE DATA HAS BEEN LOADED SUCCESSFULLY");
}

export default loadCategoryData;