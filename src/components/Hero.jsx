import React from 'react'

const Hero = () => {
  return (
    <div className="font-bold mt-36 fixed text-[#012970]" style={{ marginTop: '146px', marginLeft: '70px' }}>

          <h1 className="font-nunito text-5xl space-y-2">
            <div>We offer modern</div>
            <div>solutions for growing</div>
            <div>your business</div>
          </h1>
          <h2 className="text-[#777575] font-normal  text-xl mt-2.5">
            We are team of talented designers making websites with <br />  Bootstrap
          </h2>
          <button className="flex items-center space-x-2 text-base font-medium tracking-wide font-nunito bg-[#4154f1] py-3 mt-9 px-11 rounded-md group transform transition-all duration-300 hover:bg-blue-700">
      <span className='text-white '>Get Started</span>
      
      <span className="transform text-white transition-all duration-300 group-hover:translate-x-2">
      🡢
      </span>
    </button>
    <button class="px-3 py-2 font-medium text-base flex items-center space-x-2">
  <img src="images/play.png" alt="Logo" className="w-8 -mt-16 ml-52 h-8"/>
  <span className='-mt-16 font-bold text-[#444444]'>Watch Video</span>
     </button>


          <img 
          src="images/hero-img.png" 
          alt="Hero" 
          className="w-100 h-auto -mt-96 animate-up-down "
          style={{ marginLeft: '570px' }} 
        />
          
        </div>
    
  )
}

export default Hero
