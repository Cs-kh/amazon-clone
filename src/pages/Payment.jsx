import React from "react";

import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { counterAction } from "../store";
import {FaStar} from 'react-icons/fa'

import {Link} from 'react-router-dom'
const Payment = () => {
    const items =  useSelector(state => state.counter.items)
    //const totalPrice =  (items) => items?.reduce((amount,item) => item.price + amount , 0)
    const dispatch = useDispatch();
    console.log(items);
    const removeItemHandler = (id) => {
        console.log(id);
  dispatch(counterAction.decrement(id))
    }
  return (
    <div className="bg-main h-screen overflow-x-hidden">
      <Nav />
      <div className="text-center my-6 ">
        <h1 className="text-3xl font-medium">
          Checkout (
          <Link to="/checkout" className="text-sky-900">
            {" "}
            <span>0</span> itmes
          </Link>{" "}
          )
        </h1>
      </div>
      <div className="bg-white w-screen p-8 ">
        <div className="  border-b-2 pb-8 container ">
            <div className="w-96 flex  ">
          <h1 className="mr-14 text-2xl font-medium">Delivery Address</h1>
          <p className="w-32 block">123 React Lane Los Angeles, CA</p>
          </div>
        </div>
        <div className="border-b-2 pb-8 my-6">
        <div className=" flex  ">
          <h1 className="mr-8 w-96 text-2xl font-medium">Review items and delivery</h1>
          <div className="flex flex-col flex-1 flex-wrap ">
          {items.length !== 0 ? items.map((item,index) => (
                <div key={index}  className="card my-4 ">
                <div  className="flex ">
                  <div  className="w-24 mr-4">
                    <img
                      src={item.img}
                      alt=""
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="flex flex-col content-start">
                    <h1>
                      {item.title}
                    </h1>
                 
                    <p>
                      <span>$</span>
                      {item.price}
                    </p>
                    <div className="flex ">
                {Array(item.rating).fill().map((_,index) => (
                    <p>{<FaStar className="text-yellow-300"/>}</p>
                ))}
                
            </div>
            <div className="mt-4 ">
  
            <button className="bg-button px-2 border-2 border-gray-100" onClick={() => removeItemHandler(item.id)}>Remove from Basket</button>
            </div>
                  </div>
                </div>
              </div> 
            )): ''}
            </div>
          </div>
        </div>
        <div className="pb-8 my-6">
            <div className=" flex">
                <h1 className="mr-14 text-2xl font-medium">Payment Method</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
