import React from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'

const HeaderMain = () => {
    return (
        <div className='border-b border-gray-200 py-6'>

            <div className='container sm:flex justify-between items-center'>

                <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-black'>
                    <a href='/'>Next.js</a>
                </div>

                <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                    <input className='border-gray-200 border p-2 px-4 rounded-lg w-full' type="text" placeholder='Enter any products...' />

                    <FaSearch className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400' />
                </div>

                <div className='hidden lg:flex gap-4 text-gray-300 text-[26px]'>
                    <FaUser className='cursor-pointer' />

                    <div className='relative cursor-pointer'>
                        <FaHeart />
                        <div className='bg-red-500 rounded-full absolute top-0 right-0 w-[16px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                            0
                        </div>
                    </div>

                    <div className="relative cursor-pointer">
                        <FaShoppingCart />
                        <div className='bg-red-500 rounded-full absolute top-0 right-0 w-[16px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                            0
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeaderMain