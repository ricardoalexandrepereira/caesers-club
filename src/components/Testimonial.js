import React from 'react';
import {testimonialData} from "../data"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const Testimonial = () => {
  return <motion.section 
          variants={fadeIn('right')}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          className='py-[30px] lg:pb-[160px] lg:pt-0' >
          <div className="container mx-auto">
            <Swiper>
              {testimonialData.map((slide, index)=>(

                 <SwiperSlide key={index}>
                      <div className='max-w-[1000px] mx-auto flex flex-col items-center lg:flex-row lg:items-center gap-x-[38px] cursor-pointer'> 
                        
                        {/* quoteIMG */}
                        <div className='w-[154px] h-[109px] mb-12 lg:mb-40'>
                          <img src={slide.quoteImg} alt="quoteImg" />
                        </div>

                          {/* message, name, ocupation */}
                        <div className='flex-1 lg:mt-[54px]'>
                            {/* message */}
                            <div className='text-2xl lg:text-[26px] leading-normal mb-6 lg:mb-12'>{slide.message}</div>
                          
                          <div className='flex items-center text-xl bg-yellow-300 lg:text-2xl font-primary'>
                            {/* name */}
                            <div className='font-semibold pl-10'>{slide.name}</div>
                            <span className='mx-4'>|</span>
                         
                            {/* ocupation */}
                            <div className='font-light'>{slide.occupation}</div>
                          </div>
                          
                        </div>

                      </div>
                 </SwiperSlide>
             ))}
            </Swiper>
          </div>
        </motion.section>;
};

export default Testimonial;
