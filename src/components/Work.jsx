import { React, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Work() {
  const [img, setImg] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: 27,
      left: 44,
      isActive: false,
      zIndex: 1,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: 31,
      left: 40,
      isActive: false,
      zIndex: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: 20,
      left: 47,
      isActive: false,
      zIndex: 3,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: 34,
      left: 44,
      isActive: false,
      zIndex: 4,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: 26,
      left: 49,
      isActive: false,
      zIndex: 5,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: 23,
      left: 42,
      isActive: false,
      zIndex: 6,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (latest) => {
    // console.log("Page scroll: ", Math.floor(latest*100))
    showNHideImges(Math.floor(latest * 100));
  });
  const updateImage = (arr) => {
    setImg((prev) => {
      return prev.map((item, index) =>
        arr.includes(index)
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
    });
    // console.log(img);
  };
  const showNHideImges = (scrollVal) => {
    // console.log(scrollVal);
    switch (scrollVal) {
      case 0:
        updateImage([]);
        break;
      case 1:
        updateImage([0]);
        break;
      case 3:
        updateImage([0, 1]);
        break;
      case 5:
        updateImage([0, 1, 2]);
        break;
      case 7:
        updateImage([0, 1, 2, 3]);
        break;
      case 9:
        updateImage([0, 1, 2, 3, 4]);
        break;
      case 12:
        updateImage([0, 1, 2, 3, 4, 5]);
        break;
      case 15:
        updateImage([0, 1, 2, 3, 4, 5, 6]);
        break;
    }
  };

  return (
    <div className="h-fit flex flex-col text-white relative mt-24 mb-10">
      {img.map((item, index) => (
        <img
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            zIndex: item.zIndex,
          }}
          src={item.url}
          key={index}
          className={`absolute h-80 rounded-2xl ${
            item.isActive ? "visible" : "invisible"
          }`}
        />
      ))}
      <div className="flex h-[100vw] md:h-fit flex-col items-center rotate-90 md:rotate-0 justify-center">
        <h1 className="text-[30vw] md:text-[25vw] font-semibold">
          Work
        </h1>
        <h1 className="text-gray-400 mb-10 md:mb-0 text-[2.5vw] md:text-[1.8vw] absolute bottom-[22%] md:bottom-10">
          Web Design, Webflow Development, Creative Development
        </h1>
      </div>
    </div>
  );
}

export default Work;
