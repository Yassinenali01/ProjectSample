import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
const SearchPopUp = (props) => {
    const { setUserState } = props;

    const handleClick = () => setUserState(false);
  return (


    <div className=' bg-black text-black absolute top-0 left-0  flex flex-col  h-screen w-full items-center'>
        <div className=''>
            <div className=''>
                
                
                <div className=' h-10 w-screen flex justify-center  mt-16 border-0  '>
                    <div onClick={handleClick}>
                        <BiArrowBack size={25} className='mt-2 mr-3 cursor-pointer' color='white'/>
                    </div>
                    
                    <input  type="text" placeholder='Search... ' className=' border-0  h-10 p-2 rounded-2xl   w-11/12'/>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default SearchPopUp
