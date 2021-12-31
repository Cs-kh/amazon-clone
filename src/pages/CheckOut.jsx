import React from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { counterAction } from "../store";
import {FaStar} from 'react-icons/fa'
import CurrencyFormat from 'react-currency-format';
import {Link} from 'react-router-dom'
const CheckOut = () => {
  const items =  useSelector(state => state.counter.items)
  const totalPrice =  (items) => items?.reduce((amount,item) => item.price + amount , 0)
  const dispatch = useDispatch();
  console.log(items);
  const removeItemHandler = (id) => {
      console.log(id);
dispatch(counterAction.decrement(id))
  }
  return (
    <div className="bg-main h-screen ">
      <Nav />
      <div className=" ">
        <div className="content flex bg-white w-full h-auto ">
          <div className="one flex-1 m-5">
            <div className="">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
              />
              <h3 className="pt-4 font-semibold text-xl">Hello,</h3>
              <h2 className="px-4 pt-4 pb-2 font-bold text-2xl border-b-2 border-gray-400">
                Your shopping Basket
              </h2>
            </div>
            {items.length !== 0 ? items.map((item,index) => (
                <div key={index}  className="card my-4">
                <div  className="flex m-6 ">
                  <div  className="w-28 mr-6">
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
          <div className="two m-4">
            <CurrencyFormat
            renderText={(value) => (
              <>
              
            <div className="bg-gray-100 p-4 flex flex-col border-2 border-gray-200 ">
              <h1>
                Subtotal ({items.length} items): <span>{value}</span>
              </h1>
              <p>This order contains a gift</p>
              <Link to='/payment'>
              <Button title="Proceed to Checkout" width="w-80" />
              </Link>
            </div>
              </>
            )}
            decimalScale={2}
            value={totalPrice(items)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
