import React from 'react'

function Footer() {
  return (
    
    <div className='flex flex-col md:flex-row justify-evenly md:justify-between max-w-screen-xl h-24 md:h-20 mx-auto text-white items-center '>
        <div className='flex justify-center pl-4 md:pl-0 gap-4'>
            {['Privacy Policy', 'Cookie Policy','impreessum','Term', 'Webdev Agency'].map((item, index)=><a key={index} href='#'>{item}</a>)}
        </div>
        <div>
            <h1 text>Arshad khan</h1>
        </div>
    </div>
  )
}

export default Footer