import React from "react";
import Project from "./Project";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Arqitel from "../video/Arqitel.mp4";
import EcoHomes from "../video/EcoHomes.webm";
import HealthSync from "../video/HealthSync.webm";
import TravelMate from "../video/TravelMate.webm";
import EduLearn from "../video/EduLearn.mp4";
import brightwave from "../video/brightwave.webm";
import yahoo from "../video/yahoo.webm";
import intenseye from "../video/intenseye.webm";
import keystone from "../video/keystone.webm";
import remind from "../video/remind.webm";
import rocketchat from "../video/rocketchat.webm";
import sevdesk from "../video/sevdesk.webm";
import starred from "../video/starred.webm";


function Projects() {
  const [project, setProject] = useState([
    {
      projectName: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      buttons: ["Live Website"],
      hoverVal: "bg-[#F5004F]",
      hover: false,
    },
    {
      projectName: "EcoHomes",
      description:
        "An interactive platform that promotes sustainable living by connecting users with eco-friendly housing options and resources.",
      buttons: ["Live Website", "GitHub Repo"],
      hoverVal: "bg-[#36C2CE]",
      hover: false,
    },
    {
      projectName: "HealthSync",
      description:
        "A comprehensive health management app that integrates with wearable devices to track fitness, nutrition, and overall wellness.",
      buttons: ["Live Website", "App Store"],
      hoverVal: "bg-[#00215E]",
      hover: false,
    },
    {
      projectName: "TravelMate",
      description:
        "A travel planning tool that uses AI to suggest personalized itineraries, accommodations, and activities based on user preferences.",
      buttons: ["Live Website", "Google Play"],
      hoverVal: "bg-[#793FDF]",
      hover: false,
    },
    {
      projectName: "EduLearn",
      description:
        "An online learning platform offering interactive courses, quizzes, and certifications across various subjects and skill levels.",
      buttons: ["Live Website", "Course Catalog"],
      hoverVal: "bg-[#06D001]",
      hover: false,
    },
    {
      projectName: "Brightwave",
      description:
        "Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",
      buttons: ["Live Website", "Course Catalog"],
      hoverVal: "bg-[#FF5733]",
      hover: false,
    },
    {
      projectName: "Yahoo",
      description:
        "We elevated New York Fashion Week with a digital AR experience featuring 3D holographic models and an integrated web shop.",
      buttons: ["Live Website", "Yahoo!"],
      hoverVal: "bg-[#FF9F00]",
      hover: false,
    },
    {
      projectName: "Sevdesk",
      description:
        "We partnered with sevdesk, Germany and Austria's top accounting software, to design a 2,000-page Webflow website.",
      buttons: ["Live Website"],
      hoverVal: "bg-[#00A9B4]",
      hover: false,
    },
    {
      projectName: "Keystone",
      description:
        "A website that’s bold, modern, and built to reflect Keystone vision.",
      buttons: ["Live Website", "Course Catalog"],
      hoverVal: "bg-[#7D5B5B]",
      hover: false,
    },
    {
      projectName: "Intenseye",
      description:
        "We focused on creating something beautiful while still ensuring the brand felt mature and contextual within their industry.",
      buttons: ["Live Website"],
      hoverVal: "bg-[#1E1E1E]",
      hover: false,
    },
    {
      projectName: "Starred",
      description:
        "Starred's B2B product features a human-first brand, combining approachability with an informative, user-friendly website.",
      buttons: ["Live Website", "Case Study"],
      hoverVal: "bg-[#FF6347]",
      hover: false,
    },
    {
      projectName: "Remind",
      description:
        "Remind's website was redesigned for easy maintenance, supporting their mission to connect students and families.",
      buttons: ["Live Website", "Case study"],
      hoverVal: "bg-[#8B8B8B]",
      hover: false,
    },
    {
      projectName: "RocketChat",
      description:
        "We created a clean, scalable, and modular Webflow website for RocketChat, ensuring easy maintenance.",
      buttons: ["Live Website"],
      hoverVal: "bg-[#33A1D9]",
      hover: false,
    },
  ]);
  const video = [
    Arqitel,
    EcoHomes,
    HealthSync,
    TravelMate,
    EduLearn,
    brightwave,
    yahoo,
    sevdesk,
    keystone,
    intenseye,
    starred,
    remind,
    rocketchat,
  ];
  const [pos, setPos] = useState(0);
  const [videodiv, setVideodiv] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    console.log(isSmallScreen);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }})

  const showVideo = (index) => {
    if(isSmallScreen){
      setPos(index * 30);
    }
    else{
      setPos(index * 23);
    }
    setVideodiv(1);
    setProject((prev) =>
      prev.map((item, ind) => (index === ind ? { ...item, hover: true } : item))
    );
  };
  const hideVideo = () => {
    // setPos(index*23);
    setVideodiv(0);
    setProject((prev) => prev.map((item) => ({ ...item, hover: false })));
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  return (
    <div className="text-white w-full relative mt-40">
      {project.map((item, index) => (
        <Project
          key={index}
          item={item}
          index={index}
          showVideo={showVideo}
          hideVideo={hideVideo}
        />
      ))}
      {/* it means we can not select this and the div behind this is selectable */}
      <div className="w-full h-full absolute top-[6rem] md:-top-10 pointer-events-none">
        <motion.div
          initial={{ y: pos}}
          animate={{ y: pos + `rem`}}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className={`relative rounded-md w-[22rem] h-[18rem] md:h-[23rem] md:w-[27rem] left-[5%] overflow-hidden md:left-[30%] ${
            videodiv == false && "hidden"
          }`}
        >
          {video.map((item) => {
            return (
              <motion.div
                animate={{ y: -pos + `rem`}}
                className="h-full w-full mb-48 md:mb-0 rounded-md z-100"
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              >
                <video
                  className="w-full h-full object-cover rounded-md"
                  src={item}
                  autoPlay
                  loop
                  muted
                ></video>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
