import React from 'react'
import { RiFilter3Fill } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineViewKanban } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";
import { FaHeadset } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";



const Header = () => {
  return (
    <div className='p-4 w-full flex justify-between'>
      <div className='left '>
        <div className='bg-black text-white rounded-full w-[450px] flex justify-around p-2 items-center'>
          <div className='flex items-center gap-x-2 text-xl font-bold'>
            <p className='text-2xl'> <BiSpreadsheet /></p>
            <p>All my tasks</p>
          </div>
          <div className='h-7 w-[1px] bg-gray-500'></div>

          <div className='flex items-center gap-x-2 text-gray-400 text-[17px] cursor-pointer hover:text-blue-500 duration-300'>
            <p><LuArrowUpDown /></p>
            <p>View</p>
          </div>
          <div className='h-7 w-[1px] bg-gray-500'></div>

          <div className='flex items-center gap-x-2 text-gray-400 text-[17px] cursor-pointer hover:text-blue-500 duration-300'>
            <p className='text-xl'><RiFilter3Fill />
            </p>
            <p>Filter</p>
          </div>
          <div className='h-7 w-[1px] bg-gray-500'></div>

          <div className='gap-x-2 text-gray-400 flex items-center text-xl cursor-pointer hover:text-blue-500 duration-300'>
            <p><HiDotsHorizontal />
            </p>
          </div>
        </div>
      </div>


      {/* right */}
      <div className='right'>
        <div className='bg-black text-white rounded-full flex justify-around p-2 items-center gap-x-4 px-4'>
          <div className='flex items-center gap-x-2 text-gray-400 text-[17px] cursor-pointer hover:text-blue-500 duration-300'>
            <TfiReload />
          </div>
          <div className='h-7 w-[1px] bg-gray-500'></div>

          <div className='flex items-center gap-x-2 text-gray-400 text-[17px] cursor-pointer hover:text-blue-500 duration-300'>
            <FaHeadset />
          </div>
          <div className='h-7 w-[1px] bg-gray-500'></div>

          <div className='flex items-center gap-x-2 text-gray-400 text-[17px] cursor-pointer hover:text-blue-500 duration-300'>
            <FaRegSquare />
          </div>
          <div className='h-7 w-[1px] bg-gray-500'></div>

          <div className='gap-x-2 text-gray-400 flex items-center text-xl cursor-pointer hover:text-blue-500 duration-300'>
            <FiSearch />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header