import React from "react";
import style from "./ShopPage.module.css";
import { InfiniteCarousel } from "../../components/SearchOutput/SearchOutput";

import ShopSection from "./ShopPageSections/ShopSection";
import { useGetStoreDataQuery } from "../../REDUX/API_Queries/E_CommerceAPI";
import LoadingSpinner from "../../components/LoadingSpinal/LoadingSpinner";

function ShopPage(): JSX.Element {
  const { data } = useGetStoreDataQuery("shopData");
  return (
    <div className={`container mx-auto ${style.shopPageCont}`}>
      {data ? (
        <>
          <ShopSection {...data["categories"][2]} limit={4} />
          <ShopSection {...data["categories"][4]} limit={4} />
          <ShopSection {...data["categories"][1]} limit={4} />
          <ShopSection {...data["categories"][3]} limit={4} />
          <ShopSection {...data["categories"][0]} limit={4} />
          <InfiniteCarousel />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default ShopPage;
