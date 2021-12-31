import React from 'react'
import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Nav = () => {
  const counter = useSelector(state => state.counter.counter)

    return (
        <div className='bg-primary w-full h-14 z-50 sticky top-0'>
        <nav className='h-full px-2 flex justify-between items-center '>
          <Link className="w-24 flex items-center h-8 " to='/'>
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              className="w-full h-full object-contain mt-4"
              alt=""
              />
              </Link>
          
          <div className="flex-1 flex justify-center items-center h-8 ">
            <input type="text" className="w-full h-full" />
            <span className="bg-secondary h-full flex items-center px-2">
              <IoMdSearch className="text-2xl" />
            </span>
          </div>
          <div className="flex justify-between items-center text-white mx-4 ">
            <Link className="cursor-pointer mx-2" to='/login'>
              <div className="flex flex-col">
                <span className="text-xs font-thin">Hello Guest</span>
                <span className="font-semibold">Sign In</span>
              </div>
            </Link>
            <Link className="cursor-pointer mx-2" to='/order'>
              <div className="flex flex-col">
                <span className="text-xs font-thin">Return</span>
                <span className="font-semibold">& Orders</span>
              </div>
            </Link>
            <div className="flex flex-col mx-2">
              <span className="text-xs font-thin">Your</span>
              <span className="font-semibold">Prime</span>
            </div>
            <Link className=" flex items-center cursor-pointer mx-2" to='/checkout'>
              <div className="flex items-center ">
                <span className="px-2">
                  <MdOutlineShoppingBasket className="text-2xl" />
                </span>
                <span>{counter}</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    )
}

export default Nav
