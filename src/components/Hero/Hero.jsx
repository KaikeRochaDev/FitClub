import React from 'react'
import Header from '../Header/Header'

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
import './Hero.css'

const Hero = () => {
    const transition = {type: 'spring', duration:3}

    const mobile = window.innerWidth<= 768 ? true: false
  return (
    <div className="hero" id='hero'>
        <div className="blur hero-blur"></div>

        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
                <motion.div 
                initial={{left: mobile? "145px" : "238px"}} 
                whileInView={{left: '8px'}} 
                transition={{...transition, type: 'tween'}}>

                </motion.div>
                <span>a melhor academia da cidade</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Alcance </span> 
                    <span>a forma</span>
                </div>
                <div>
                    <span>física perfeita</span> 
                </div>

                <div>
                    <span>
                        Aqui, vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo
                    </span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span><NumberCounter end={140} start={100} delay="4" preFix="+" /></span>
                    <span>treinadores especializados</span>

                </div>

                <div>
                    <span><NumberCounter end={978} start={800} delay="4" preFix="+" /></span>
                    <span>Total de membros</span>
                </div>

                <div>
                    <span><NumberCounter end={50} start={20} delay="4" preFix="+" /></span>
                    <span>Aparelhos</span>
                </div>
            </div>

            <div className="hero-buttons">
                <button className='btn'>Iniciar</button>
                <button className='btn'>Saiba mais</button>
            </div>
        </div>

        <div className="right-h">
            <button className='btn'>Inscreva-se</button>

            <motion.div initial={{right: "-1rem"}} whileInView={{right: "4rem"}} transition={transition} className="heart-rate">
                <img src={Heart} alt="Heart" />
                <span>Frequência cardíaca</span>
                <span>116 bpm</span>
            </motion.div>

            <motion.img src={hero_image} alt="" className='hero-image'/>
            <motion.img initial={{ right: "11rem" }}
                whileInView={{ right: "20rem" }}
                transition={transition} src={hero_image_back} alt="" className='hero-image-back'/>

            <motion.div
                className="calories"
                initial={{ right: "37rem" }}
                whileInView={{ right: "28rem" }}
                transition={transition}
            >
            <img src={Calories} alt="Calories" />
                <div>
                    <span>Calorias queimadas</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero