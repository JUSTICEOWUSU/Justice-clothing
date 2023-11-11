import style from "./ShopCategorized.module.css";
import StoreCard from "../../components/Cards/StoreCard/StoreCard";
import { useGetStoreDataQuery } from "../../REDUX/API_Queries/E_CommerceAPI";
import LoadingSpinner from "../../components/LoadingSpinal/LoadingSpinner";
import { StoreItems } from "../../REDUX/API_Queries/API_DataTypes";

import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import { useMemo, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ItemsTypes } from "../../Types/ShopDataTypes";
import { useParams } from "react-router-dom";

let PageSize = 16;

//Functions controlling the visibility of the arrow icons
function checkPagination(
  allData: ItemsTypes[],
  someData: ItemsTypes[],
) {
  
    return (
      allData[allData.length - 1]["name"] == someData[someData.length - 1].name
    );

}

// MAIN FUNCTIONAL COMPONENT
function ShopCategorized(): JSX.Element {
   const { data } =  useGetStoreDataQuery("shopData");

  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();
  const navigate = useNavigate();

  let MainUsedItemsData: ItemsTypes[] = [];
  let MainTitle: string = "";
  if (data) {
    const { items, title } = data["categories"].filter(
      (data) => data.routeName === category
    )[0];
    MainUsedItemsData = items;
    MainTitle = title;
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
          return  MainUsedItemsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,data]);


  const respondToBackArrow = (): void => {
    if (currentPage === 1) {
      navigate("/shop");
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const respondToForwardArrow = (): void => {
    if (currentTableData && currentTableData.length === PageSize) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      {data && currentTableData.length ? (
        <div className={style.Cont}>
          <h1 className={style.header}>{MainTitle}</h1>
          <div className={`container row overflow-hidden m-auto gx-4`}>
            {currentTableData.map(({ price, imageUrl, id, name }) => {
              return (
                <StoreCard
                  name={name}
                  price={price}
                  width={"col-lg-3 col-md-4 col-6"}
                  id={id}
                  cartCard={"categorizedCard"}
                  imageUrl={imageUrl}
                  key={id}
                />
              );
            })}
          </div>
          <span className={style.iconsCont}>
            <IoArrowBackOutline
              className={style.icon}
              onClick={respondToBackArrow}
            />
            {!checkPagination(MainUsedItemsData, currentTableData) && (
              <IoArrowForwardOutline
                className={style.icon}
                onClick={respondToForwardArrow}
              />
            )}
          </span>
        </div>
      ) : (
        <LoadingSpinner/>
      )}
    </>
  );
}

export default ShopCategorized;
