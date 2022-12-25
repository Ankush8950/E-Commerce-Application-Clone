import React, { useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import ShopingCart from './Shopingcart/ShopingCart';


const Navbar = () => {
  const [cart,setCart] = useState(false)
  return (
    <>
    <div className="flex h-20 w-full items-center justify-between pl-20 pr-20 bg-[#1f242c] text-white">
        <div>
            <h1 className='cursor-pointer font-medium text-lg hover:text-xl'>Home</h1>
        </div>
        <div className='flex items-center justify-center cursor-pointer relative' onClick={()=>setCart(true)}>
           <h1 className='font-normal text-lg capitalize'>cart</h1>
            <FaCartArrowDown className='ml-3 text-xl' />
            <h1 className='absolute right-[-10px] bottom-[10px]'>5</h1>
        </div>
    </div>

    {
      cart ? <ShopingCart setacart = {setCart}/> : ""
    }
    </>
  )
}

export default Navbar