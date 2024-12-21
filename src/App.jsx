import React from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Projects from "./components/Projects";
import Logos from "./components/Logos";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
      <div className="bg-black w-full overflow-x-hidden">
        <Nav />
        <Work />
        <Stripes/>
        <Projects/>
        <Logos />
        <Posts />
        <Footer />
      </div>
  );
}

export default App;
