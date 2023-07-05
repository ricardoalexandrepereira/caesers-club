import React from 'react';
import { useState, useEffect } from 'react';
import {headerData} from "../data"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import Socials from "./Socials"
import {TiThMenuOutline} from "react-icons/ti"


const Header = () => {

  const {logo} = headerData

  const [isActive, setIsActive] = useState(false)

  const [navMobile, setNavMobile] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  });

  return(

  <header className={`${isActive 
  ? ' h-[100px] lg:h-[95px] shadow-lg' 
  : ' h-[120px] lg:h-[150px] shadow-lg'} fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>
    
    <div className='flex justify-between items-center h-full pl-[0px] pr-[60px]'>
      <a href="/">
        <img className='w-[160px] h-[90px]' src={logo} alt="logo" />
      </a>

      {/* nav - initially hidden - show on desktop */}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
      
      {/* nav menu btn - showing by default - hidden on desktop */}
        <div onClick={()=> setNavMobile(!navMobile)} className='xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-lg cursor-pointer'>
          <TiThMenuOutline className="text-3xl"/>
        </div>

      {/* nav mobile - showing by default - hidden on desktop */}
        <div className={`${navMobile ? 'max-h-full pt-20' : 'max-h-0 hidden'} ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'}"relative fixed bg-white mt-20 w-[100%] h-[100vh] left-0 -top-20 -z-10 transition duration-300`}>
          <NavMobile />
        </div>

        {/* social icons - initially hidden - show on desktop */}

        <div className='hidden xl:flex'>
          <Socials />
        </div>
    </div>
  </header>
  ) 
  
};

export default Header;
