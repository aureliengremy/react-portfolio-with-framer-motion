import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useRef, useState, useEffect, useContext } from "react";
import { Context } from '../context/langContext';
import data from '../assets/contentData';

const Landing = ({ setSelectedPage }) => {
  const { lang } = useContext(Context);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const imgElement = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);
  const [cliRect, setCliRect] = useState(0);

  let X = (imgX - cliRect.left) / imgWidth;
  let Y = (imgY - cliRect.top) / imgHeight;

  let rX = -(X - 0.5) * 26;
  let rY = (Y - 0.5) * 26;

  if (window.innerWidth !== windowWidth) {
    setWindowWidth(window.innerWidth);
    setImgWidth(imgElement.current ? imgElement.current.clientWidth : 0);
    setImgHeight(imgElement.current ? imgElement.current.clientHeight : 0);
    setCliRect(
      imgElement.current ? imgElement.current.getBoundingClientRect() : 0
    );
  }
  useEffect(() => {
    setImgWidth(imgElement.current ? imgElement.current.clientWidth : 0);
    setImgHeight(imgElement.current ? imgElement.current.clientHeight : 0);
    setCliRect(
      imgElement.current ? imgElement.current.getBoundingClientRect() : 0
    );
  }, [imgElement.current]);

  const handleMouseMove = (event) => {
    setImgX(event.clientX);
    setImgY(event.clientY);
    document.documentElement.style.setProperty("--r-x", rX + "deg");
    document.documentElement.style.setProperty("--r-y", rY + "deg");
  };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-12 md:py-24"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-6/12 z-10 mt-16 md:mt-32 xs:my-36">
        {/* {isAboveMediumScreens ? ( */}
          <div
            className="relative z-0 ml-6 before:-top-5
            before:-left-5 md:ml-20 before:absolute md:before:-top-10
            md:before:-left-10 before:w-full before:max-w-[450px]
            before:h-full before:border-2 before:border-orange-400 before:z-[-1]"
          >
            <div
              className="profile-card w-[320px] h-[460px] lg:w-[400px] lg:h-[600px] xl:w-[500px] xl:h-[750px]"
              ref={imgElement}
              onMouseMove={(ev) => handleMouseMove(ev)}
            >
              <div className="profile-card__wrapper">
                <div className="profile-card__3d">
                  <img src="../assets/profile-heigh-full.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        {/*) : ( 
          <div
            className="relative z-0 m-10 ml-10 before:absolute before:-top-1
            before:-left-5 before:w-[110%] before:max-w-[450px]
            before:h-full before:border-2 before:border-orange-400 before:z-[-1]"
          >
            <img
              src="../assets/profile-sit.jpeg"
              alt="profil"
              className="hover:filter hover:hue-rotate-30 hover:contrast-125 transition duration-500 z-10
                      w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        )} */}
      </div>
      <div className="z-30 basis-6/12 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-20 text-center md:text-start">
            Aurelien{" "}
            <span
              className="xs:relative text-deep-blue xs:font-semibold z-20  
                    xs:before:content-brush before:absolute before:-left-[45px] 
                    before:-top-[40px] before:z-[-10] text-border-white"
            >
              Gremy
            </span>
          </p>
          <p className="mt-14 mb-7 text-sm text-center mb:text-start">
          {data[lang].landing.description}
          </p>
        </motion.div>
        {/* CALL TO ACTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-orange-500 text-deep-blue rounded-l-sm py-3 px-7 font-semibold transition duration-400
            hover:bg-amber-400"
            href="#contact"
            onClick={() => setSelectedPage(setSelectedPage)}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainorange py-0.5 pr-0.5"
            href="#contact"
            onClick={() => setSelectedPage(setSelectedPage)}
          >
            <div
              className="bg-deep-blue hover:text-orange-400 transition duration-500 w-full h-full
             flex items-center justify-center font-playfair px-10"
            >
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
