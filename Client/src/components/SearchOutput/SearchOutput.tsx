import React from "react";
import style from "./SearchOutput.module.css";
import { useGetStoreDataQuery } from "../../REDUX/API_Queries/E_CommerceAPI";
import LoadingSpinner from "../LoadingSpinal/LoadingSpinner";
import { FaOpencart } from "react-icons/fa";


export interface ItemsTypes {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}


 
function shuffleData(arr:ItemsTypes[],quantity:number){
  if(arr.length<=quantity){
    return arr;
  }

const shuffledArray = [...arr]

  for (let i = shuffledArray.length - 1; i > 0 ; i--){
    let j: number = Math.floor(Math.random() * (i + 1));
     [shuffledArray[i],shuffledArray[j]] = [shuffledArray[j],shuffledArray[i]]
  }

  return shuffledArray.slice(0,quantity);
}



export function ContinousCaurosel(): JSX.Element{
  const SearchData: ItemsTypes[] = [];

  const { data, isLoading } = useGetStoreDataQuery("shopData");
  if (data) {
    SearchData.push(...data["categories"][0].items);
    SearchData.push(...data["categories"][1].items);
    SearchData.push(...data["categories"][2].items);
    SearchData.push(...data["categories"][3].items);
  }

  const finalShuffled: ItemsTypes[] = shuffleData(SearchData, 7);
  return (
    <div className={`${style.EmptyCont} ${style.CustomEmptyCont}`}>
      <span className={`${style.CTitle}`}>peaple also search for:</span>
      {data && (
        <div className={`${style.ItemsToScroll}`}>
          <div className={`${style.GenCont}`}>
            <div className={`${style.ItemsToScrollCont}`}>
              {finalShuffled.map((item) => {
                return (
                  <div className={`${style.scrollItem}`}>
                    <p className={`${style.scrollItemTitle}`}>{`${item.name}`}</p>
                    <div className={`${style.blendCover}`}></div>
                    <img
                      src={`${item.imageUrl}`}
                      alt="clothing"
                      className={`${style.scrollImg}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${style.GenCont}`}>
            <div className={`${style.ItemsToScrollCont}`}>
              {finalShuffled.map((item) => {
                return (
                  <div className={`${style.scrollItem}`}>
                    <p className={`${style.scrollItemTitle}`}>{`${item.name}`}</p>
                    <div className={`${style.blendCover}`}></div>
                    <img
                      src={`${item.imageUrl}`}
                      alt="clothing"
                      className={`${style.scrollImg}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



function SearchOutput(): JSX.Element {
  const SearchData: ItemsTypes[] = [];

  const { data, isLoading } = useGetStoreDataQuery("shopData");
  if (data) {
    SearchData.push(...data["categories"][0].items);
    SearchData.push(...data["categories"][1].items);
    SearchData.push(...data["categories"][2].items);
    SearchData.push(...data["categories"][3].items);
  }

 const finalShuffled: ItemsTypes[] = shuffleData(SearchData, 7);


  return (
    <div className={`${style.containerDiv} container-fluid`}>
      {isLoading && <LoadingSpinner />}
      {
        data && SearchData.length !== 0
          ? SearchData.filter((items) => items.name.includes("jackethjhj")).map(
              (item) => (
                <div className={`row  ${style.productCont} `} key={item.name}>
                  <span className={`${style.imgSpan} col-lg-7 col-12`}>
                    <span className={`${style.smallScreen}`}>{item.name}</span>
                    <img
                      src={`${item.imageUrl}`}
                      alt="clothings"
                      className={`${style.img}`}
                    />
                  </span>
                  <div className={`${style.descriptionCont} col-lg-5 col-12`}>
                    <span className={`${style.title}`}>{item.name}</span>
                    <div className={`${style.description}`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus ut est consequatur animi, placeat omnis possimus
                      sapiente! Rem quam ab at dolore. Deserunt est ducimus
                      perferendis reiciendis possimus obcaecati alias .
                    </div>
                  </div>
                </div>
              )
            )
          : ""
        /**/
      }

      {data &&
      SearchData.filter((items) => items.name.includes("jacketyui")).length ===
        0 ? (
        <div className={`${style.EmptyCont}`}>
          <span className={`${style.EmptyMessage}`}>
            <p>Not available yet</p>
            <FaOpencart className={`${style.cart}`} />
          </span>

          {/* <div className={`${style.ItemsToScroll}`}>
            <div className={`${style.GenCont}`}>
              <div className={`${style.ItemsToScrollCont}`}>
                {finalShuffled.map((item) => {
                  return (
                    <div className={`${style.scrollItem}`}>
                      <p className={`${style.scrollItemTitle}`}>
                        {`${item.name}`}
                      </p>
                      <div className={`${style.blendCover}`}></div>
                      <img
                        src={`${item.imageUrl}`}
                        alt="clothing"
                        className={`${style.scrollImg}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`${style.GenCont}`}>
              <div className={`${style.ItemsToScrollCont}`}>
                {finalShuffled.map((item) => {
                  return (
                    <div className={`${style.scrollItem}`}>
                      <p className={`${style.scrollItemTitle}`}>
                        {`${item.name}`}
                      </p>
                      <div className={`${style.blendCover}`}></div>
                      <img
                        src={`${item.imageUrl}`}
                        alt="clothing"
                        className={`${style.scrollImg}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            </div>
             */}
        </div>
      ) : (
        ""
      )}

      <ContinousCaurosel/>
    </div>
  );
}

export default SearchOutput;
