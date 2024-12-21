import React from 'react'

function Footer() {
  return (
    
    <div className='flex justify-between max-w-screen-xl h-20 mx-auto text-white items-center '>
        <div className='flex gap-4'>
            {['Privacy Policy', 'Cookie Policy','impreessum','Term', 'Webdev Agency'].map((item, index)=><a key={index} href='#'>{item}</a>)}
        </div>
        <div>
            <h1 text>Arshad khan</h1>
        </div>
    </div>
  )
}

export default Footer