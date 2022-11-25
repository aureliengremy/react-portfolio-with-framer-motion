import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="py-16 md:py-32 lg:py-48 xl:py-52">
      <div className="md:flex md:justify-between md:gap-16">
        {/* HEADER AND IMAGE SECTION */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-orange-500">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Mes compétences acquisent en Back-end associer à mon appétence en
            Front-end me permettent de me présenter comme un Developpeur
            Full-stack.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 
                        before:-left-10 before:w-full before:h-full before:border-2
                      before:border-orange-400 before:z-[-1]"
            >
              <img
                src="../assets/Lewagon-39-c-r.png"
                alt="skills"
                className="z-10"
              />
            </div>
          ) : (
            <img
              src="../assets/Lewagon-39-c-r.png"
              alt="skills"
              className="z-10"
            />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-16">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-2xl mt-3 min-h-[64px]">
                Expériences Professionnelles
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-500 absolute right-0 top-0 z-[-1]" />
            <div className="mt-5 md:mt-10">
              <p className="mt-1 md:mt-3 text-left">2020 / 2022</p>
              <p className="mt-1 md:mt-3 text-center">
                INTÉGRATEUR / DEV FRONT-END<br/>
                 Solution Medias 360<br/>
                 Montréal, CA
              </p>
              <p className="mt-1 md:mt-3 text-left">2017 / 2020</p>
              <p className="mt-1 md:mt-3 text-center">
              DEV FRONT-END<br/>
              ALIZNET<br/>
              Paris, FR puis Montréal, CA
              </p>
              <p className="mt-1 md:mt-3 text-left">2014 / 2017</p>
              <p className="mt-1 md:mt-3 text-center">
              CHEF DE PROJET WEB<br/>
              DEFI-PERFORMANCE<br/>
              Champagne sur Seine, FR
              </p>
            
            </div>
          </div>
        </motion.div>
        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-2xl mt-3 min-h-[64px]">
                Formation
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-300 absolute right-0 top-0 z-[-1]" />
            <p className="mt-5 md:mt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tenetur sed rem libero deserunt id tempora consectetur vero
              laboriosam.
            </p>
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-2xl mt-3 min-h-[64px]">
                Passion
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-700 absolute right-0 top-0 z-[-1]" />
            <p className="mt-5 md:mt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tenetur sed rem libero deserunt id tempora consectetur vero
              laboriosam. Nesciunt tenetur sed rem libero deserunt id tempora
              consectetur vero laboriosam.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-10">LANGUAGE & TOOLS</div>
    </section>
  );
};

export default MySkills;
