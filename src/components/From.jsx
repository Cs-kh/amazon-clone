import React from "react";
import { Link } from "react-router-dom";
const From = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center flex-col">
        {/* img */}
        <Link className="w-24 flex items-center h-8 my-6 " to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            className="w-full h-full object-contain mt-4"
            alt=""
          />
        </Link>
        {/* end of img */}
        <div className="border-2 border-neutral-200  mt-4 p-5 rounded-md">
          <h1 className="font-semibold text-3xl">Sign in</h1>
          <form className="mt-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold ">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="mt-2 w-72 h-9 border-2 border-zinc-900"
              />
            </div>
            <div className=" flex flex-col mt-3">
              <label htmlFor="password" className="font-semibold ">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 w-72 h-9 border-2 border-zinc-900"
              />
            </div>
            <div className="mt-4 w-72">
              <button type="submit" className="bg-button block w-full p-1 text-sm">
                Sign in
              </button>
            </div>
          </form>
          <div className="w-72 my-2">
            <p className="text-xs text-center">
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use
              & Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
          </div>
          <div className="w-72">
              <button type="submit" className="w-full p-2 bg-f text-sm text-black">Create Your Amazon Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
