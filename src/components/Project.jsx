import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import {motion} from 'framer-motion'

// motion div and initial={{ py: "0%" }} animate={{ py: `${23}rem` }} 
function Project({ item, index, showVideo, hideVideo }) {
  return (
    <div onMouseEnter={()=>showVideo(index)} onMouseLeave={hideVideo} className={`flex flex-col md:flex-row justify-between items-center py-8 md:py-0 px-24 h-[30rem] hover:h-[38rem] md:hover:h-[23rem] md:h-[23rem] duration-500 ${item.hover && `${item.hoverVal}`} `}>
        <div>
            <h1 className='text-4xl font-bold'>{item.projectName}</h1>
        </div>
        <div className='w-80 md:w-96 text-lg md:mr-20'>
            <p>{item.description}</p>
            <div className='flex mt-4 gap-4'>
              {item.buttons.map((item, index)=><button key={index} className='rounded-3xl h-9 text-black bg-white capitalize min-w-40 font-semibold flex items-center px-4 justify-between text-sm'>{item} <FaArrowTrendUp /></button>)}
            </div>
        </div>
    </div>
  )
}

export default Project;