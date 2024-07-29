import React from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Projects from "./components/Projects";
import Logos from "./components/Logos";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="bg-black w-full min-h-[100vh] p-1 overflow-x-hidden">
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
