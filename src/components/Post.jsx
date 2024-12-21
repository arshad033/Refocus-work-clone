import React from "react";
import { FaArrowRight } from "react-icons/fa";
function Post({ item, index, handleHover, handleLeave }) {
  return (
    <div onMouseOver={()=>handleHover(index)} onMouseLeave={()=>handleLeave(index)}
      className={`h-[60vh] ${item.hover ? `${item.textColor}` : 'text-white'} rounded-xl w-[100%] p-4 flex flex-col gap-8  justify-between ${item.hover == true ? `${item.hoverVal}`: 'bg-zinc-800'}`}
      style={{ width: `${item.width}`}}
    > 
      <div>
        <div className="flex justify-between">
          <h1>{item.title}</h1>
          <FaArrowRight />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl w-66">{item.headind}</h1>
        </div>
      </div>

      <div>
        {item.mainHeading !== "" ? (
          <h1 className="text-8xl font-semibold">{item.mainHeading}</h1>
        ) : (
          ""
        )}
        {item.button !== "" ? (
          <button className="border-2 px-4 py-2 text-black bg-white rounded-3xl font-bold mt-6">
            {item.button}
          </button>
        ) : (
          <h1 className="">{item.footHeading}</h1>
        )}
      </div>
    </div>
  );
}

export default Post;
