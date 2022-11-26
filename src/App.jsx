import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";
import DotGroup from "./sections/DotGroup";
import MySkills from "./sections/MySkills";
import Contact from "./sections/Contact";
import LineGradient from "./components/LineGradient";
import { useEffect } from "react";
import Projects from "./sections/Projects";
import ContextProvider from "./context/langContext";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ContextProvider>
      <div className="app bg-deep-blue">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-max">
          <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-max">
          <Projects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Contact />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
