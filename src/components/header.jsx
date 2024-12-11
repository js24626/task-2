import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [listingDropdownOpen, setListingDropdownOpen] = useState(false);

  return (
    <header className="  p-[1.65rem] fixed ">
      <div className="flex items-center  justify-between ">
        <img 
          src="/images/logo.png" 
          alt="Logo"
          className="h-[1.65rem] ml-11 w-auto"
        />
        <div className="font-nunito ml-2 text-[30px] font-bold text-[#012970]">FlexStart</div>

        <div className="text-[0.95rem]  font-poppins font-medium  text-[#012970] ml-3  flex items-center space-x-6 ">
          <Link to="/" className="text-[#4154f1] ">Home</Link>
          <Link to="/about" className=" hover:text-blue-500">About</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link>
          <Link to="/team" className="hover:text-blue-500">Team</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>

          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)} 
          >
            <button className="text-[0.95rem] font-poppins hover:text-blue-500 text-[#012970] space-x-5 flex ">
              Dropdown
              
              <span className={`ml-1 ${dropdownOpen ? '' : ''} transition-transform`}>
                &#9660; 
              </span>
            </button>

            
            {dropdownOpen && (
              <div className="absolute  bg-white border border-gray-300 rounded-md shadow-lg">
                <Link to="/option1" className="block px-4 py-2 text-gray-800">Option 1</Link>
                <Link to="/option2" className="block px-4 py-2 text-gray-800">Option 2</Link>
                <Link to="/option3" className="block px-4 py-2 text-gray-800">Option 3</Link>
              </div>
            )}
          </div>

         
          <div 
            className="relative space-x-5"
            onMouseEnter={() => setListingDropdownOpen(true)}
            onMouseLeave={() => setListingDropdownOpen(false)} 
          >
            <button className="text-[0.95rem] hover:text-blue-500 space-x-5 font-poppins text-[#012970] flex items-center">
              Listing Dropdown
              <span className={`ml-1 ${listingDropdownOpen ? '' : ''} transition-transform`}>
                &#9660; 
              </span>
            </button>

            
            {listingDropdownOpen && (
              <div className="absolute   bg-white border border-gray-300 rounded-md shadow-lg">
                <Link to="/option1" className="block px-4 py-2 text-gray-800">Option 1</Link>
                <Link to="/option2" className="block px-4 py-2 text-gray-800">Option 2</Link>
                <Link to="/option3" className="block px-4 py-2 text-gray-800">Option 3</Link>
                
              </div>
            )}
          </div>

         
          <div className="space-x-8 ">
            <Link to="/contact" className="text-[0.95rem] text-[#012970]">Contact</Link>
            <Link to="/get-started" className="bg-[#4154f1] text-white py-[0.59rem] px-6 font-poppins rounded-md " >Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
