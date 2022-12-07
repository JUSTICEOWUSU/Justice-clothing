import style from "./ShopCategorized.module.css";
import StoreCard from "../../components/Cards/StoreCard/StoreCard";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopDataType, {
  ItemsTypes,
  Mens,
  Women,
  Hats,
  Jackets,
  Sneakers,
} from "../../DATA/ShopData";
import { useParams } from "react-router-dom";

let PageSize = 12;

//Functions controlling the visibility of the arrow icons
function checkPagination(
  allData: ItemsTypes[],
  someData: ItemsTypes[]
): boolean {
  return allData[allData.length - 1].name == someData[someData.length - 1].name;
}

function ShopCategorized(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();
  const navigate = useNavigate();
  const data: ShopDataType[] = [Mens, Women, Hats, Jackets, Sneakers];
  const { items, title } = data.filter(
    (data) => data.routeName === category
  )[0];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const respondToBackArrow = ():void => {
    if (currentPage === 1) {
      navigate("/shop");
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const respondToForwardArrow = ():void => {
    if (currentTableData.length === PageSize) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  return (
    <div className={style.Cont}>
      <h1 className={style.header}>{title}</h1>
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
        {!checkPagination(items, currentTableData) && (
          <IoArrowForwardOutline
            className={style.icon}
            onClick={respondToForwardArrow}
          />
        )}
      </span>
    </div>
  );
}

export default ShopCategorized;
