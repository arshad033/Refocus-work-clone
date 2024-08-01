import React from "react";
import Project from "./Project";
import { useState } from "react";
import { motion } from "framer-motion";
import video1 from "../video/video1.mp4";
import video2 from "../video/video2.webm";
import video3 from "../video/video3.webm";
import video4 from "../video/video4.webm";
import video5 from "../video/video5.mp4";

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
    <div className="text-white w-full relative h-[76rem] mt-40">
      {project.map((item, index) => (
        <Project
          key={index}
          item={item}
          index={index}
          showVideo={showVideo}
          hideVideo={hideVideo}
        />
      ))}
      <div className="w-full h-full absolute -top-20 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-40%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className={`relative h-[23rem] w-[27rem] left-[40%] overflow-hidden ${
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
              src={video1}
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
              src={video2}
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
              src={video3}
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
              src={video4}
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
              src={video5}
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
