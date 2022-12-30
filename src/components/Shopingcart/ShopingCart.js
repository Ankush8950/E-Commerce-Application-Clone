import React, { useState,useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneDelete } from 'react-icons/ai';


const ShopingCart = ({setacart,products}) => {
  const [addtoCart,setAddTocart] = useState(products)
  const [productCount,setProductCount] = useState(0)
  // console.log(products)
        // setProductCount(products.length)
 
  const orderPlace = (ind) =>{
    // const pro = order.reduce((total, items) => {
    //   return total+items.id
    // })
    // setOrder(pro)

  }

  // console.log(addtoCart)
const removeItem = (index) =>{
  const getId = addtoCart.map((val)=>{
    return val.images !== index
  })   
  setAddTocart(getId)
  console.log(getId);

  // TotalAmount()
}


// 
  const TotalAmount = () =>{
    let totalPrice =0;

    for (const item of addtoCart) {
      totalPrice += item.price
    }
    setProductCount(totalPrice)
  }

useEffect(() => {
  TotalAmount()
})
  
  return (
    <>
      <div className=" h-3/4 w-2/3  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 absolute top-20  z-10 	overflow-y-scroll">
        <div className="flex items-center justify-between ">
          <div className="p-5 font-bold text-xl">Cart Items</div>
          <div className="w-10 h-10 mr-10  rounded-full hover:bg-black text-black hover:text-white  flex items-center justify-center cursor-pointer " onClick={()=>setacart(false)}>
            <AiOutlineClose className=" text-center font-semibold text-2xl "  />
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#1f242c]"></div>
        <div>
        {
          addtoCart.map((val, index) => {
          return (
              <div className="flex itmes-center justify-around " key={index}>
            <img
              className="rounded w-[10rem] h-[150px] mt-10 ml-5"
              src={val.images}
              alt=""
            />
            
            {/* <h1 onChange={()=>setproductCount(index)}>{val.productCount}</h1> */}

          <div className="items-center justify-center mt-10 ">
          <h1 className="mr-10 font-normal text-lg capitalize">price: ₹ {val.price}</h1>
            <h1 className="font-semibold text-sm w-[15rem]">{val.title}</h1>
          </div>
          <div className="mt-10 font-bold text-xl text-[#E21717] cursor-pointer" onClick={()=>removeItem(index)}><AiTwotoneDelete /></div> 
        </div>
          )
        })}
        </div>
        <div className="w-full h-0.5 bg-[#1f242c] mt-5"></div>
        <div className="flex items-center justify-center float-right">
        <h1 className="mr-10">Total Amount :  {productCount}  </h1>
         <button className="bg-black h-10  mt-5 mb-5 mr-10 text-white pl-10 pr-10 pt-2 pb-2 border-2 hover:bg-white hover:text-black uppercase rounded-lg" onClick={orderPlace}>place order</button>
         </div>
      </div>
    </>
  );
};

export default ShopingCart;
