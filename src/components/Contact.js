import React from 'react';
import {contactData} from "../data"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"
import contactImg from "../img/contact/contactImg1.png"


const Contact = () => {
  return <section className='section' id='contact'>
              <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:px-[50px] gap-y-16'>
                  {/* text */}
                  <motion.div 
                  variants={fadeIn('right')}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once:false, amount:0.7}}
                  className='flex-1'>
                    {/* title */}
                    <h2 className='h2 max-w-[500px]'>{contactData.title}</h2>
                    <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
                      {contactData.info.map((item, index)=>(
                          <div key={index}>
                            <div className='font-primary uppercase font-medium text-xl mb-3'>{item.title}</div>
                            <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{item.subtitle}</div>
                            <div className='flex flex-col gap-y-3 mb-8'>
                            
                            <div className='flex items-center gap-[10px]'>
                                <div>{item.address.icon}</div>
                                <div className='font-medium'>{item.address.name}</div>
                              </div>
                              
                              <div className='flex items-center gap-[10px]'>
                                <div>{item.phone.icon}</div>
                                <div className='font-medium'>{item.phone.number}</div>
                              </div>
                              
                              {/* <div className='flex items-center gap-[10px]'>
                                <div>{item.email.icon}</div>
                                <div className='font-medium'>{item.email.address}</div>
                              </div> */}
                            </div>
                             {/*  <a className='font-medium border-b border-dark pb-[5px]' href="#">{item.link}</a> */}
                          </div>
                      ))}
                    </div>
                  </motion.div>
                  {/* form */}
                  <motion.div 
                  variants={fadeIn('left')}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once:false, amount:0.4}}
                  className='flex-1 xl:pl-[40px] flex justify-center items-center'>
                    <div>
                      <img src={contactImg}></img>
                    </div>
                 {/*    <form className='flex flex-col gap-y-10 w-full'>
                      <input className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' placeholder={contactData.form.name} type="text" />
                      <input className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' placeholder={contactData.form.email} type="text" />
                      <input className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4' placeholder={contactData.form.message} type="text" />
                        <button className='btn btn-sm btn-dark'>{contactData.form.btnText}</button>
                    </form> */}
                  </motion.div>
                </div>
              </div>
        </section>;
};

export default Contact;
