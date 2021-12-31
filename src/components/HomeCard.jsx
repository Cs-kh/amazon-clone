import React from "react";
import Button from "./Button";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/index";

const HomeCard = (props) => {
 
  const dispatch = useDispatch();
  const infoHandler = () => {
   dispatch(counterAction.increment({
     id:props.id,
     title:props.title,
     price:props.price,
     rating:props.rating,
     img:props.img
   }))
   
  };
  return (
    <div  className={`flex content-evenly items-center ${props.widthCard}`}>
      <div 
        className={`bg-white h-fit p-4 ${props.width} z-30 mx-6 mb-8 flex flex-col ${props.center} `}
      >
        <div key={props.id}>
          <p>{props.title}</p>
          <p>
            <span>$</span>
            {props.price}
          </p>
          <div className="flex ">
            {Array(props.rating)
              .fill()
              .map((_, index) => (
                <p>{<FaStar className="text-yellow-300" />}</p>
              ))}
          </div>
        </div>
        <div className="w-full  h-56 flex items-center justify-center">
          <img
            src={`${props.img}`}
            alt=""
            className={`  object-contain ${props.imgWidth}`}
          />
        </div>
        <Button cardInfoHandler={infoHandler} title="Add to Basket" />
      </div>
    </div>
  );
};

export default HomeCard;
