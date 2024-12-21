import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import {motion} from 'framer-motion'

function Project({ item, index, showVideo, hideVideo }) {
  return (
    <motion.div initial={{ py: "0%" }} animate={{ py: `${23}rem` }} onMouseEnter={()=>showVideo(index)} onMouseLeave={hideVideo} className={`flex justify-between items-center px-24 h-[23rem] duration-500 ${item.hover && `${item.hoverVal}`} `}>
        <div>
            <h1 className='text-4xl font-bold'>{item.projectName}</h1>
        </div>
        <div className='w-96 text-lg mr-20'>
            <p>{item.description}</p>
            <div className='flex mt-4 gap-4'>
              {item.buttons.map((item, index)=><button key={index} className='rounded-3xl h-9 text-black bg-white capitalize min-w-40 font-semibold flex items-center px-4 justify-between text-sm'>{item} <FaArrowTrendUp /></button>)}
            </div>
        </div>
    </motion.div>
  )
}

export default Project;