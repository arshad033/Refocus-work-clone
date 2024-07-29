import React from 'react'

function Work() {
  const img = [
    {url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: 27, left:44, isActive: true, zIndex:1},
    {url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: 31, left: 40, isActive: true, zIndex:2},
    {url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: 20, left: 47, isActive: true, zIndex:3},
    {url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: 34, left: 44, isActive: true, zIndex:4},
    {url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: 26, left: 49, isActive: true, zIndex:5},
    {url:'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: 23, left: 42, isActive: true, zIndex:6},
  ]
  return (
    <div className='flex flex-col items-center text-white relative'>
      {img.map((item, index)=><img style={{top: `${item.top}%`, left: `${item.left}%`, zIndex:item.zIndex}} src={item.url} key={index} className={`absolute h-80 rounded-2xl ${item.isActive ? 'visible': 'invisible'}`}/>)}
        <h1 className='text-[30rem] font-semibold pt-0 relative bottom-10 select-none'>Work</h1>
        <h1 className='absolute bottom-28 text-gray-400 text-xl'>Web Design, Webflow Development, Creative Development</h1>
        </div>
  )
}

export default Work