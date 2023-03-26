import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import moroccoIcon from '../assets/moroccoIcon.png';



const Menu = () => { 
  return (
    <div className=' md:hidden'>
        
        <div className='  text-black   flex flex-col text-xl absolute top-0 left-0 h-screen w-11/12 '>
            <ul className=' justify-between border-y-2 mt-16 py-3 font-bold cursor-pointer'>
                <li className = "ml-4 p-3 flex  "> MEN  <HiArrowNarrowRight  className = "  ml-auto mt-1  "/> </li>
                <li className = "ml-4 p-3 flex "> WOMEN <HiArrowNarrowRight className = "ml-auto mt-1 "/>  </li>
                <li className = "ml-4 p-3 flex "> SALE  <HiArrowNarrowRight className = "ml-auto mt-1  "/> </li>
                <li className = "ml-4 p-3 flex " > BRANDS <HiArrowNarrowRight className = "ml-auto mt-1 "/>  </li>
            </ul>
            <ul className=' text-lg py-3 border-b-2 cursor-pointer'>
                <li className = "ml-4 p-3 flex  "> My Account  <HiArrowNarrowRight  className = "  ml-auto mt-1  "/></li>
                <li className = "ml-4 p-3 flex  "> My Bag <HiArrowNarrowRight  className = "  ml-auto mt-1  "/></li>
                <li className = "ml-4 p-3 flex  "> Contact US  <HiArrowNarrowRight  className = "  ml-auto mt-1  "/></li>
                <li className = "ml-4 p-3 flex  "> Our Location  <HiArrowNarrowRight  className = "  ml-auto mt-1  "/></li>
                 
            </ul>

            <ul className=' flex justify-center border-b'>
                <li className=' p-2 flex '> Morocco <img  src={moroccoIcon} style={{width : '20px', height:'20px'}} className="flex mt-1.5 ml-1" /> </li>
                <li className=' p-2 '> English </li>
            </ul>


        </div> 
      
    </div> 
  )
}

export default Menu
