import React from "react";
import style from "./HomePage.module.css";
import HeroCard from "../../components/Cards/HeroSectionCard/HeroCard";
import { useGetHomeDataQuery} from "../../REDUX/API_Queries/E_CommerceAPI";

import LoadingSpinner from "../../components/LoadingSpinal/LoadingSpinner";
function HomePage(): JSX.Element {

  

  const { data, error,isLoading } = useGetHomeDataQuery("categories");
  

  return (
    <div
      className={`${style.homePageCont} container row g-2 gx-lg-3 overflow-hidden`}
    >
      {
        data?(
          data["categories"].map(
            ({ title, imageUrl, size, id, linkUrl }, index, arr) => {
              let styles: string =
                "col-lg-4 col-md-6 col-sm-6 col-6 ${style.large}";
              let last: string = "";
              if (size && index >= arr.length - 1) {
                styles = "col-lg-6 col-md-12 col-sm-12";
                last = "last";
              } else if (size) {
                styles = "col-lg-6 col-md-6 col-sm-6 col-6";
              }
          
              return (
                <HeroCard
                  title={title}
                  imageUrl={imageUrl}
                  key={id}
                  linkUrl={linkUrl}
                  styles={styles}
                  size={size}
                  last={last}
                />
              );
            }
          )
        ):(<LoadingSpinner/>)
      }
    </div>
  );
}

export default HomePage;



