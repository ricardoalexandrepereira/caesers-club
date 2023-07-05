import React, {useState} from 'react';

import {interviewData} from "../data"
import ModalVideo from "react-modal-video"
import "../modalVideo.scss";
import {fadeIn} from "../variants"
import {motion} from "framer-motion"

const Interview = () => {

  const [isOpen, setIsOpen] = useState(false)

  return <motion.section 
          id='interview'
          variants={fadeIn('down')}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.2}}
          className='bg-slate-500 section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]'>
            <div className="container mx-auto h-full relative">
              <motion.div 
              variants={fadeIn('right')}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className='absolute w-[400px] h-[400px] right-[1%] -bottom-[20%] bg-star bg-no-repeat bg-cover bg-center'></motion.div>
                <div className='flex flex-col justify-center h-full'>
                  <div className='flex flex-col items-start max-w-[880px] lg:pl-[50px]'>
                    <motion.h3 
                    variants={fadeIn('up')}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    className='text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8'>{interviewData.title}</motion.h3>
                    
                    <motion.div
                    variants={fadeIn('right')}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
                    >
                      
                      <div onClick={()=> setIsOpen(true)} className='flex text-white items-center gap-x-4 cursor-pointer hover:opacity-80 transition'>
                      
                      {/* <div className='w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'>
                       
                        <div className='bg-white w-full h-full rounded-full flex justify-center items-center'>
                         <div className='pl-1'>{interviewData.btnIcon}</div> 
                        </div>
                      </div> */}
                      
                       {/*  <div className='font-primary uppercase'>{interviewData.btnText}</div> */}
                      </div>
                    </motion.div>
                    {/* modal */}
                    <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId='_l1mqYQuNf8' onClose={()=> setIsOpen(false)} />
                  </div>
                </div>
            </div>
        </motion.section>;
};

export default Interview;
