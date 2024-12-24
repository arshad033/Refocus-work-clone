import React from "react";
import Post from "./Post";
import { useState } from 'react'

function Posts() {
  const [post, setPost] = useState ([
    {
      title: "Up Next: News",
      headind: "Insights and behind the scences",
      mainHeading: "",
      button: "",
      footHeading: "Explore what drives our team",
      width: "30%",
      hover:false,
      hoverVal: 'bg-zinc-200',
      textColor: 'text-black'
    },
    {
      title: "Get In Touch",
      headind: "Let's get to it together.",
      mainHeading: "Start a Project",
      button: "Contact Us",
      footHeading: "",
      width: "70%",
      hover:false,
      hoverVal: 'bg-violet-500',
      textColor:'text-white'
    },
  ])
  const handleHover = (index)=>{
      setPost((prev)=>prev.map((item, ind)=>index == ind ? {...item, hover: true }: {...item}))
      console.log(post);
  }
  const handleLeave = (index)=>{
    setPost((prev)=>prev.map((item, ind)=>index == ind ? {...item, hover: false }: {...item}))
    console.log(post);
}
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between p-4 gap-4 md:gap-0 md:p-0 md:px-[4.8rem] md:mt-36">
      {post.map((item, index) => (
        <Post key={index} item={item} index={index} handleHover={handleHover} handleLeave={handleLeave}/>
      ))}
    </div>
  );
}

export default Posts;
