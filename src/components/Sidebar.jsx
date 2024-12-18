import React from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { TbCrown } from "react-icons/tb";
import { AiFillPushpin } from "react-icons/ai";
import { TiSpiral } from "react-icons/ti";
import { PiCalendar } from "react-icons/pi";
import { FaPlus, FaRegCalendar } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { FiLock } from "react-icons/fi";
import { TbUsersPlus } from "react-icons/tb";


const Sidebar = () => {
  return (
    <div className='w-[16%] border border-black min-h-screen text-white backdrop-brightness-50 backdrop-blur-md flex flex-col justify-between py-1'>
      <div className='Top'>
        <div className='flex justify-between items-center p-3'>
          <div className='flex gap-x-2'>
            <p className='rounded-3xl w-12 border-wite text-white border-2 hover:text-indigo-400 hover:border-indigo-500 duration-200 flex justify-center items-center text-2xl cursor-pointer'>
              <MdOutlineSettings />
            </p>
            <div>
              <p className='text-slate-50 font-bold cursor-pointer'>Sachin</p>
              <p className='text-gray-400 cursor-pointer'>Free Plan</p>
            </div>
          </div>
          <div>
            <AiFillPushpin />
          </div>
        </div>

        {/* list items */}
        <div className=''>
          <ul>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-center items-center p-2 hover:cursor-pointer duration-300'>
              <p className='text-2xl'><TbCrown /></p>
              <p>Go Premium</p>
              <p className='border rounded-xl text-[11px] p-1 px-3 border-blue-600 text-blue-400 font-semibold'>Try It Free</p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-4 duration-300'>
              <p className='text-2xl'><TiSpiral /></p>
              <p>My day</p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-4 duration-300'>
              <p className='text-2xl'><PiCalendar /></p>
              <p>Next 7 day</p>
              <p className='border-blue-600 text-gray-400 font-semibold border rounded-full w-6 text-center bg-blue-600 '>4</p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-4 duration-300'>
              <p className='text-2xl'><TbNotes /></p>
              <p>All my tasks</p>
              <p className='border-blue-600 text-gray-400 font-semibold border rounded-full w-6 text-center bg-blue-600 '>4</p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-5 duration-300'>
              <p className='text-[18px]'><FaRegCalendar /></p>
              <p>My Calender</p>
              <p className='rounded-xl text-[11px] p-1 px-3 text-white font-semibold bg-blue-500'>Beta</p>
            </li>
          </ul>
        </div>

        {/* catagory */}
        <div className='mt-3'>
          <ul>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-between items-center p-2 w-full hover:cursor-pointer px-5 duration-300'>
              <div className='flex gap-x-3 items-center'>
                <p className='text-[18px] font-bold text-white'>My lists</p>
                <p className='text-[14px] mt-1'><FiLock />
                </p>
              </div>
              <p>
                <FaPlus />
              </p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-5 duration-300 '>
              <p className='text-[17px]'>Personal</p>
              <p className='text-gray-400 font-semibold rounded-full w-6 text-center bg-gray-600 '>4</p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-5 duration-300 '>
              <p className='text-[17px]'>Work</p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-5 duration-300 '>
              <p className='text-[17px]'>Grocery List</p>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className='mt-3'>
          <ul>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-between items-center p-2 w-full hover:cursor-pointer px-5 duration-300'>
              <div className='flex gap-x-3 items-center'>
                <p className='text-xl font-bold text-white'>Tags</p>
              </div>
              <p>
                <FaPlus />
              </p>
            </li>
            <li className='flex text-gray-400 gap-x-3 hover:bg-gray-800 justify-start items-center p-2 w-full hover:cursor-pointer px-5 duration-300 '>
              <p className='text-[17px] text-yellow-400'>#Priority</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className='Bottom pb-3'>
        <div className='p-1 rounded-full bg-gray-800 text-black flex justify-around items-center mr-16 ml-4 hover:bg-gray-700 hover:cursor-pointer duration-300 gap-x-1'>
          <p className='rounded-full bg-blue-500 border-gray-300 text-xl p-2 border'>
            <TbUsersPlus />
          </p>
          <p className='text-blue-500 text-[14px]'>Add shared space</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar