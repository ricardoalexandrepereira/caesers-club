import React from 'react';
import {footerData} from "../data"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const staggerContainer = {
  hidden:{},
  show:{
    transition:{
      staggerChildren:0.3,
      delayChildren:0.2,
    }
  }
}

const Footer = () => {
  return <footer className='py-10 flex justify-center items-center bg-dark '>
          <div className="container mx-auto">
            <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.1}}
            className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14 xl:px-8'>
              
              {/* about */}
              <motion.div 
               variants={fadeIn('up')}
              className='flex-1 flex flex-col gap-y-6'>
                <div className='font-primary text-xl uppercase tracking-[0.08em] '>{footerData.about.title}</div>
                {/* <div className='leading-relaxed text-yellow-200'>{footerData.about.subtitle}</div> */}
                <div className='flex flex-col gap-y-4 font-semibold text-[#dbdbdb]'>
                  {/* address */}
                  <div className='flex items-center gap-x-[10px]'>
                    <div>{footerData.about.address.icon}</div>
                    <div>{footerData.about.address.name}</div>
                  </div>
                  {/* phone */}
                  <div className='flex items-center gap-x-[10px]'>
                    <div>{footerData.about.phone.icon}</div>
                    <div>{footerData.about.phone.number}</div>
                  </div>
                  {/* email */}
                  {/* <div className='flex items-center gap-x-[10px]'>
                    <div>{footerData.about.email.icon}</div>
                    <div>{footerData.about.email.address}</div>
                  </div> */}
                </div>
              </motion.div>
              
              {/* links */}
              <motion.div 
              variants={fadeIn('up')}
              className='flex-1 flex flex-col xl:items-center'>
                <div>
                  <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>{footerData.links.title}</div>
                  <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                    {footerData.links.items.map((item, index)=>{

                      return <li key={index}>
                          <a className='hover:text-white transition' href={item.href}>{item.name}</a>
                        </li>
})}
                  </ul>
                </div>
              </motion.div>

              {/* program */}
              <motion.div 
              variants={fadeIn('up')}
              className='flex-1'>
                <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>{footerData.program.title}</div>
                <ul className='flex flex-col gap-y-4 text-yellow-200'>
                  {footerData.program.items.map((item,index)=>(
                   <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </motion.div>

              {/* newsletter */}
             {/*  <motion.div 
              variants={fadeIn('up')}
              className='flex-1'>
                <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>{footerData.newsletter.title}</div>
                <div className='leading-relexed mb-9 text-[#dbdbdb]'>{footerData.newsletter.subtitle}</div>
                  <form className='flex justify-between items-start border-b border-[#b6b6b6]'>
                  <input className='outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2' placeholder={footerData.newsletter.form.placeholder} type="text" />
                  <button className='text-2xl cursor-pointer' type='submit'>{footerData.newsletter.form.icon}</button>
                  </form> 
              </motion.div> */}
            </motion.div>
          </div>
        </footer>;
};

export default Footer;
