import React from 'react';
import {navData} from "../data"
import Socials from './Socials';
import {Link} from "react-scroll"

const NavMobile = () => {

const {items} = navData;



  return(
    <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
      <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
      {items.map((item, index)=>(
        <li className='text-2xl font-primary' key={index}>
          <Link className='cursor-pointer'  spy={true} to={`${item.href}`} smooth={true}>
          <p>{item.name}</p> 
          </Link>
        </li>
      ))}
      </ul>
        <div className='text-2xl'>
          <Socials />
        </div>
      
    </nav>
    ) 
};

export default NavMobile;
