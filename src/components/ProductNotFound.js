import React from 'react'
import { MdScreenSearchDesktop } from 'react-icons/md';

const ProductNotFound = () => {
  return (
    <div className='w-full h-full  flex flex-col items-center justify-center p-10'>
        <MdScreenSearchDesktop className='font-bold text-5xl text-[#2827CC]' />
        <h1 className='font-medium text-xl mt-5'>Sorry, no results found!</h1>
        <p className='font-medium text-sm mt-3'>Please check the spelling or try searching for something else</p>
    </div>
  )
}

export default ProductNotFound