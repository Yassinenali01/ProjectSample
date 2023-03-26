import React from 'react';
import NavBar from './NavBar';



const Home = (props) => {
  const { setNavState } = props;
  
  return (
    <div>
       
        <div className='border border-spacing-8 p-14'>
          <div className='justify-center flex items-center flex-col p-'>
            <h1 className='font-bold  text-4xl mt-10 p-6'> L'A9ri3a is brought to you Online </h1>
            {/* <div className=' text-2xl justify-center '> */}
              <p className=' text-2xl text-red-600 font-bold '> Shop From The Comfort Of Your Home</p>
              <p> With Trusted And Best Vendors In The Bigget Market Of Casablanca</p>
            {/* </div> */}
            <div className='border-2 rounded-lg '>
              <button className='rounded-lg  font-bold px-4 py-1 hover:bg-black hover:text-white'>Shop</button>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Home
