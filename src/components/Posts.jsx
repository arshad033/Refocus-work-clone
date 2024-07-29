import React from "react";
import Post from "./Post";

function Posts() {
  const post = [
    {
      title: "Up Next: News",
      headind: "Insights and behind the scences",
      mainHeading: "",
      button: "",
      footHeading: "Explore what drives our team",
      width: "30%",
      hover:"bg-zinc-200"
    },
    {
      title: "Get In Touch",
      headind: "Let's get to it together.",
      mainHeading: "Start a Project",
      button: "Contact Us",
      footHeading: "",
      width: "70%",
      hover:"bg-voilet-500"
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto flex gap-1 mt-12">
      {post.map((item, index) => (
        <Post key={index} item={item} />
      ))}
    </div>
  );
}

export default Posts;
