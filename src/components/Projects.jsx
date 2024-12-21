import React from "react";
import Project from "./Project";
import { useState } from "react";
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
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      buttons: ["Live Website", "Yahoo!"],
      hoverVal: "bg-[#FF9F00]",
      hover: false,
    },
    {
      projectName: "Sevdesk",
      description:
        "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
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
        "Starred's B2B product is presented with a human touch with a brand direction that reflects their human-first mindset and a site that is as informative as it is approachable.",
      buttons: ["Live Website", "Case Study"],
      hoverVal: "bg-[#FF6347]",
      hover: false,
    },
    {
      projectName: "Remind",
      description:
        "Remind's new website was designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      buttons: ["Live Website", "Case study"],
      hoverVal: "bg-[#8B8B8B]",
      hover: false,
    },
    {
      projectName: "RocketChat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      buttons: ["Live Website"],
      hoverVal: "bg-[#33A1D9]",
      hover: false,
    },
  ]);
  

  const [pos, setPos] = useState(0);
  const [videodiv, setVideodiv] = useState(0);
  const showVideo = (index) => {
    setPos(index * 23);
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
      {/* it means we can not select this and the the div behind this is selectable */}
      <div className="w-full h-full absolute -top-10 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-40%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className={`relative h-[18rem] w-[22rem] md:h-[23rem] md:w-[27rem] left-[40%] overflow-hidden ${
            videodiv == false && "hidden"
          }`}
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={Arqitel}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={EcoHomes}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={HealthSync}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={TravelMate}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={EduLearn}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          {/* /// */}
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={brightwave}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={yahoo}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={sevdesk}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={keystone}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={intenseye}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={starred}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={remind}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="h-full w-full rounded-md"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video
              className="w-full h-full object-cover rounded-md"
              src={rocketchat}
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
