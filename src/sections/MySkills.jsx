import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                src="../assets/skills-image.png"
                alt="skills"
                className="z-10"
              />
            </div>
          ) : (
            <img
              src="../assets/skills-image.png"
              alt="skills"
              className="z-10"
            />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-28 bg-orange-500 absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tenetur sed rem libero deserunt id tempora consectetur vero
              laboriosam, quaerat ullam facere porro fugiat at dolore minus,
              amet earum beatae.
            </p>
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovation
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-28 bg-orange-300 absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-28 bg-orange-700 absolute right-0 top-0 z-[-1]" />
            <p className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tenetur sed rem libero deserunt id tempora consectetur vero
              laboriosam. Nesciunt tenetur sed rem libero deserunt id tempora
              consectetur vero laboriosam.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
