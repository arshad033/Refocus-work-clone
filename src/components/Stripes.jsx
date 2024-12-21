import React from 'react'
import Stripe from './Stripe'
import {motion} from 'framer-motion'

function Stripes() {
    const stripeImg = [{img:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg', number:52},{img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg', number:2},{img:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg', number:15}, {img:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg', number:52},{img: 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg', number:2},{img:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg', number:15}]
  return (
    <div className='flex gap-0'>
    <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:15, repeat: Infinity, type:"loop", ease: "linear"}} className='h-20 mb-4 min-w-max flex items-center scroll-smooth'>
        {stripeImg.map((item, i)=><Stripe key={i} item={item}/>)}
    </motion.div>
    <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:15, repeat: Infinity, type:"loop", ease: "linear"}} className='h-20 mb-4 min-w-max flex items-center scroll-smooth'>
        {stripeImg.map((item, i)=><Stripe key={i} item={item}/>)}
    </motion.div>
    </div>
  )
}

export default Stripes