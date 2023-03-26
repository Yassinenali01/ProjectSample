import React from 'react';
import LogoWhite from '../assets/LogoWhite.png';
import {FaBars, FaTimes, FaSearch, } from 'react-icons/fa'
import { useState } from 'react';
import Menu from './Menu';
import SearchPopUp from './SearchPopUp';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiShoppingBag} from 'react-icons/bi';
import Home from './Home';



const NavBar = (props) => {
    const {setPage} = props;

    const [nav, setNav] = useState(false)
    const [search, setSearch] = useState(false)

  return (
    <div className='  h-16 w-full flex bg-black justify-between text-white  items-center px-6 '>
        

        <div className=' '>
            <img src={LogoWhite}  style={{width : '130px'}}/>
        </div>

        <ul className='hidden md:flex  items-center content-center ' >
            <li className='px-3 cursor-pointer '> Men </li>
            <li className='px-3 cursor-pointer'> Women </li>
            <li className='px-3 cursor-pointer'> Sale </li>
            <li className='px-3 cursor-pointer'> Brands </li>

        </ul>

        <ul className='flex justify-center cursor-pointer '> 
            <div className='flex'>
                <input type='text'  size='25'  placeholder='Search...' className=' hidden  md:flex w-42  text-black p-2 h-8 mt-1'/>
                <div className='md:hidden'>
                    <div className={!nav ? "" : "hidden"}  onClick={ () => setSearch(!search) }  >
                        {search ? "" : <FaSearch size={22} color='white'  />} 
                        
                    </div>

                    <div className={search ? "": "hidden"} >
                        <SearchPopUp  setUserState={setSearch} /> 
                    </div>
                </div>
            </div>

            <li className=' hidden md:flex p-2'> <BsFillPersonFill size={25}/>  </li>
            <li className='hidden md:flex p-2'> <BiShoppingBag  size={25} color='white'  /> </li>
        </ul>

        <div className=' flex md:hidden '>
            <div onClick={() => setNav(!nav)} className='cursor-pointer  items-center justify-center bg-center self-center text-center place-items-center'> 
                { nav ? <FaTimes size={25} className='flex ml-auto'/> : <FaBars size={25}/>}
            </div>
            <div className={ nav ? setPage('menu') : setPage('home') } >
                 
            </div>
            
            
        </div>

    </div>
  )
}

export default NavBar
