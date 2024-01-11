import React from 'react'
import {BiChevronDown, BiMenu,BiSearch} from "react-icons/bi"

const NavbarLg = () => {
  return(
     <>
     <div className='w-full flex items-center gap-3  px-2 py-1 mx-2 pr-6 justify-between'>
       <div className=" w-2/3 flex items-center gap-3  px-3 py-1 rounded-md mx-4" >
        <div className=''>
            <img className='w-10 h-10' src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="" />
        </div>
       <div className=' w-full flex flex-row items-center  bg-white gap-3  px-3 py-1 rounded-md'> 
        <BiSearch />
        <input
          type="search"
          className=" border-none focus:outline-none bg-transparent"/>
          </div>
      </div>
      <div className=' w-1/3 flex justify-end items-end gap-2'>
        <div>
          <h2 className='text-gray-200 text-lg flex items-center hover:text-white cursor-pointer'>Gurgaon <BiChevronDown/> </h2>
        </div>
        <div className='w-16 h-8 bg-red-600 flex justify-center items-center text-white rounded-md text-sm flex-row cursor-pointer hover:text-black hover:bg-cyan-500' >
          <span>Sign In</span>
        </div>
        <div className="text-white text-3xl cursor-pointer">
          <BiMenu/>
        </div>

      </div>
     </div>
    </>
  )
}



const NavbarMd = () => {
  return(
     <>
      <div className=" w-full flex items-center gap-3  px-3 py-1 rounded-md mx-4" >
        <div className=''>
            <img className='w-10 h-10' src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="" />
        </div>
       <div className=' w-full flex flex-row items-center  bg-white gap-3  px-3 py-1 rounded-md'> 
        <BiSearch />
        <input
          type="search"
          className="w-full border-none focus:outline-none bg-transparent"/>
          </div>
      </div>
    </>
  )
}
const Navbarsm = () => {
  return (
    <div className=' flex items-center justify-between px-4 py-2.5 bg-gray-700'>
      <div>
        <h1 className='font-bold text-lg  text-white'>It All Starts Here!</h1>
        <span className='text-gray-400 text-xs flex items-center hover:text-white cursor-pointer'>Gurgaon <BiChevronDown/> </span>
    </div>
    <div className=' text-white'>
      <h1 className='text-lg'>Use App</h1>
    </div>
    </div>
  )
}


const NavbarComponents = () => {
  return (
    <div>
    <div className='md:hidden  bg-gray-700' >
      <Navbarsm/>
    </div>
    <div className='hidden md:flex lg:hidden  bg-gray-700'>
      <NavbarMd/>
    </div>
    <div className='hidden lg:flex  bg-gray-700'>
      <NavbarLg/>
    </div>
    </div>
  )
}

export default NavbarComponents;