import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import empty from "../image/empty.jpg"

const ShopingCart = ({ setacart, products ,setAddProduct}) => {
  const [productCount, setProductCount] = useState(0);

  //  Throw the message product successfull
  const orderPlace = () => {
    toast("Product order successfull");
  };


  // remove product in a cart
 
 const removeItem = (id) => {
   const getId = products.filter((item) => {
     return item.id !== id
   });  

   setAddProduct(getId);
  //  countproduct()
 };


  // Total calculate the amount
  const TotalAmount = () => {
    let totalPrice = 0;

    for (const item of products) {
      totalPrice += item.price;
    }
    setProductCount(totalPrice);
  };

  useEffect(() => {
    TotalAmount();
  });



  return (
    <>
      <div className=" h-5/6 w-9/12  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 absolute top-20  z-10 	overflow-y-scroll">
        <div className="flex items-center justify-between ">
          <div className="p-3 sm:p-5 font-bold text-base sm:text-xl">
            Cart Items
          </div>
          <div
            className="w-10 h-10 mr-3 sm:mr-10  rounded-full hover:bg-black text-black hover:text-white  flex items-center justify-center cursor-pointer "
            onClick={() => setacart(false)}
          >
            <AiOutlineClose className=" text-center font-semibold text-2xl " />
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#1f242c]"></div>
        <div>
        {/* mapping the cart product */}
          {products.length > 0 ?  products.map((val, index) => {
            {/* console.log(val); */}
            return (
              <div className="flex  itmes-center justify-between pl-5" key={index}>
                <div className="flex flex-col sm:flex-row">
                  <img
                    className="rounded w-[7rem] md:w-[10rem] h-[100px] md:h-[150px] mt-10 ml-0 sm:ml-5"
                    src={val.images}
                    alt=""
                  />

                  {/* <h1 onChange={()=>setproductCount(index)}>{val.productCount}</h1> */}

                  <div className="items-center justify-center mt-2 sm:mt-10 ml-0 sm:ml-20">
                  <h1 className="font-semibold text-sm sm:text-lg w-[15rem]">
                      {val.category.name}
                    </h1>

                  <h1 className="font-semibold text-xs sm:text-sm w-[15rem]">
                      {val.title}
                    </h1>
                    <h1 className="mr-10 font-normal text-sm sm:text-lg text-[#38CC77] capitalize">
                      price: ₹ {val.price}
                    </h1>
                    
                  </div>
                </div>
                <div
                  className="mt-10 mr-0 sm:mr-10 pr-5 font-bold text-xl text-[#E21717] cursor-pointer"
                  onClick={() => {
                    removeItem(val.id)
                    // console.log(val.id)
                  }}
                >
                  <AiTwotoneDelete />
                </div>
              </div>
            );
          })
          :  <div className="h-auto flex flex-col items-center pt-10"> 
          <img className="w-[12rem]" src={empty} alt="" />
          <h1 className="ml-5 mt-5 text-xl capitalize">your cart is Empty.</h1>
           </div>
          }
        </div>
        <div className="w-full ">
        <div className="w-full h-0.5 bg-[#1f242c] mt-5"></div>
        <div className="flex items-center justify-center float-right">
          <h1 className="mr-10 text-sm md:text-lg ">
            Total Amount : <span className="text-sm md:text-xl text-[#38CC77]">{productCount}</span> 
          </h1>
          <button
            className="bg-black h-10  mt-5 mb-5 mr-3 sm:mr-10 text-white text-xs sm:text-sm pl-2 sm:pl-10 pr-2 sm:pr-10 pt-2 pb-2 border-2 hover:bg-white hover:text-black uppercase rounded-lg"
            onClick={orderPlace}
          >
            place order
          </button>
        </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ShopingCart;
