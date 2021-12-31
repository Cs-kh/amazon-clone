import React from "react";

import HomeCard from "../components/HomeCard";
import Nav from "../components/Nav";
const products= [
  {
    id:1,
    title:'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
    price:100,
    rating:3,
    img:'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
  },
  {
    id:2,
    title:'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
    price:150,
    rating:2,
    img:'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
  },
  {
    id:3,
    title:'Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor',
    price:300,
    rating:5,
    img:'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
  },
  {
    id:4,
    title:'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
    price:250,
    rating:1,
    img:'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
  },
  {
    id:5,
    title:'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
    price:350,
    rating:2,
    img:'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
  },
  {
    id:6,
    title:'Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440',
    price:700,
    rating:5,
    img:'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
  }
]
const Home = () => {
  return (
    <>
      {/* ------------Nav -------------- */}
     <Nav/>
      {/* ----------End of Nav----------- */}
      {/* -----------Main Header----------- */}
      {/* -----------------End of Main Header---------- */}
      <div className="content">
      <div className="-mb-36 h-fit">
        <img className="mx-auto main_header "
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="flex ">
      <HomeCard width='max-w-48' imgWidth='w-32' key={products[0].id} id={products[0].id} img={products[0].img} title={products[0].title} price={products[0].price} rating={products[0].rating}/>
      <HomeCard width='max-w-48' imgWidth='w-32' key={products[1].id} id={products[1].id}   img={products[1].img} title={products[1].title} price={products[1].price} rating={products[1].rating}/>
      </div>
      <div className="flex ">
      <HomeCard width='max-w-48' imgWidth='w-32' key={products[2].id} id={products[2].id} img={products[2].img} title={products[2].title} price={products[2].price} rating={products[2].rating}/>
      <HomeCard width='max-w-48' imgWidth='w-32' key={products[3].id} id={products[3].id} img={products[3].img} title={products[3].title} price={products[3].price} rating={products[3].rating}/>
      <HomeCard width='max-w-48' imgWidth='w-32' key={products[4].id} id={products[4].id} img={products[4].img} title={products[4].title} price={products[4].price} rating={products[4].rating}/>
      </div>
      <div className="flex ">
      <HomeCard widthCard='w-screen'  width='w-full' center='items-center' key={products[5].id} id={products[5].id} img={products[5].img} title={products[5].title} price={products[5].price} rating={products[5].rating}/>
      </div>
      </div>
    </>
    
  );
};

export default Home;
