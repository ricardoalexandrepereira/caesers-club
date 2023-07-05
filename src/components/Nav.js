import React from 'react';
import { navData } from "../data"
import {Link} from "react-scroll"

const Nav = () => {

  const { items } = navData; 

  return <nav>
          <ul className='flex gap-x-[58px] h-[30px]'>
            {items.map((item,index)=>(
                <li className='link flex hover:border-b-2 hover:border-dark transition duration-300' key={index}>
                 <Link className='h-[25px] cursor-pointer' spy={true} to={`${item.href}`} smooth={true}>
                  <p>{item.name}</p> 
                 </Link>
                  
                </li>
            ))}
          </ul>
        </nav>;
};

export default Nav;
