import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import {motion} from "framer-motion"
import { fadeIn} from "../variants"

const Skills = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });

  /* first circular */
  const [corte, setCorte] = useState(0)
  /* second circular */
  const [corteCrianca, setCorteCrianca] = useState(0)
  /* third circular */
  const [barbaMaquina, setBarbaMaquina] = useState(0)
  /* fourth circular */
  const [barbaNavalha, setBarbaNavalha] = useState(0)
  /* five circular */
  const [lavagem, setLavagem] = useState(0)
  /* six circular */
  const [cabeloEBarba, setCabeloEBarba] = useState(0)
  /* seven circular */
  const [mais, setMais] = useState(0)

  useEffect(()=>{
    if(inView){
      setTimeout(()=>{
        if(corte < 10){
          setCorte(corte + 1)
        }
        if(corteCrianca < 8){
          setCorteCrianca(corteCrianca + 1)
        }
        if(barbaMaquina < 5){
          setBarbaMaquina(barbaMaquina + 1)
        }
        if(barbaNavalha < 7){
          setBarbaNavalha(barbaNavalha + 1)
        }
        if(lavagem < 2){
          setLavagem(lavagem + 1)
        }
        if(cabeloEBarba < 15){
          setCabeloEBarba(cabeloEBarba + 1)
        }
        if(mais < 8){
          setMais(mais + 1)
        }
      }, 100)
    }else{
      setCorte(0)
      setCorteCrianca(0)
      setBarbaMaquina(0)
      setBarbaNavalha(0)
      setLavagem(0)
      setCabeloEBarba(0)
      setMais(0)
    }
  },[inView,corte,corteCrianca, barbaMaquina, barbaNavalha, lavagem, cabeloEBarba,mais ])

  const styles = {
    path:{
      stroke: "#111111"
    },
    trail:{
      stroke: "#eeeeee"
    },
    text:{
      fill:'#111111',
      fontSize:'24px'
    },
  }

  return <motion.section ref={ref} className='section font-primary'
  id='prices'
  variants={fadeIn('up')}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.1}}
  >
            <div className="container mx-auto">
              <div className='flex flex-col lg:flex-row gap-x-2 gap-y-12 justify-between items-center'>

              {/* first circular */}
                <div className='w-[80px] h-[180px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                  <CircularProgressbar strokeWidth={1} value={corte} styles={styles} text={`${corte}€`}/>
                  {/* text */}
                  <div className='uppercase font-light tracking-[1.2px] text-center'>corte Adulto</div>
                </div>
                {/* second circular */}
                <div className='w-[80px] h-[180px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                  <CircularProgressbar strokeWidth={1} value={corteCrianca} styles={styles} text={`${corteCrianca}€`}/>
                  {/* text */}
                  <div className='uppercase font-light tracking-[1.2px] text-center'>corte criança</div>
                </div>
                  {/* third circular */}
                <div className='w-[80px] h-[180px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                  <CircularProgressbar strokeWidth={1} value={barbaMaquina} styles={styles} text={`${barbaMaquina}€`}/>
                  {/* text */}
                  <div className='uppercase font-light tracking-[1.2px] text-center'>Barba c/maquina</div>
                </div>
                {/* fourth circular */}
                <div className='w-[80px] h-[180px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                  <CircularProgressbar strokeWidth={1} value={barbaNavalha} styles={styles} text={`${barbaNavalha}€`}/>
                  {/* text */}
                  <div className='uppercase font-light tracking-[1.2px] text-center'>Barba c/navalha</div>
                </div>
                {/*five circular */}
                <div className='w-[80px] h-[180px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                  <CircularProgressbar strokeWidth={1} value={lavagem} styles={styles} text={`${lavagem}€`}/>
                  {/* text */}
                  <div className='uppercase font-light tracking-[1.2px] text-center'>Lavagem</div>
                </div>
                {/*six circular */}
                <div className='w-[80px] h-[180px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                  <CircularProgressbar strokeWidth={1} value={cabeloEBarba} styles={styles} text={`${cabeloEBarba}€`}/>
                  {/* text */}
                  <div className='uppercase font-light tracking-[1.2px] text-center'>Cabelo & Barba</div>
                </div>
                {/*seven circular */}
                <div className='w-[80px] h-[180px] lg:w-[275px] flex flex-col items-center gap-y-6'>
                  <CircularProgressbar strokeWidth={1} value={mais} styles={styles} text={`${mais}€`}/>
                  {/* text */}
                  <div className='uppercase font-light tracking-[1.2px] text-center'>Corte +60</div>
                </div>



              </div>
            </div>
        </motion.section>;
};
export default Skills;
