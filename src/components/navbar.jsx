
import React from 'react';

const navbar = () => {
  return (
    <nav className="bg-[#023b6d] ">
      <div className="flex items-center">
        
        <img 
          src="/images/boot.png" 
          alt="Logo"
          className="h-[1.6rem] ml-2  w-auto" />
         <div className="flex-grow text-center  font-poppins text-white   font-bold ml-24">
          FlexStart
        </div>
        <button className="bg-custom-blue text-white py-2 font-apple px-5 text-xs font-bold    hover:bg-blue-700  transition duration-300">
  <h1 className='pl-7'> DOWNLOAD</h1> 
 </button>
          </div>
    </nav>
  );
};
export default navbar;
