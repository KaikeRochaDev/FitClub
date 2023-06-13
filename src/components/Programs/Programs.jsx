import React from 'react'

import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

import './Programs.css'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore nossos</span>
            <span>Métodos</span>
            <span className='stroke-text'>para moldar você</span>
        </div>

        <div className="programs-categories">
            {programsData.map((program) =>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Inscreva-se</span>
                        <img src={RightArrow} alt="Arrow for right" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs