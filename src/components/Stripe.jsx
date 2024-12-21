import React from 'react'
function Stripe({item}) {
  return (
    <div className='flex w-80 h-full border-l-0 justify-between px-10 items-center border-gray-500 flex-shrink-0'>
        <img className='h-6' src={item.img} alt="" />
        <h1 className='text-xl'>{item.number}</h1>
    </div>
  )
}
export default Stripe