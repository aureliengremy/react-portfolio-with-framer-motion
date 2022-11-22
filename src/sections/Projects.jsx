import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const motionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      // delayChildren: 0.5
    },
  },
};
const projectVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full opacity-0 hover:opacity-90 transition 
    duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("_").toLowerCase();

  return (
    <motion.div className="relative h-auto" variants={projectVariant}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit
          velit non excepturi temporibus. Expedita inventore excepturi quae
          facilis ipsam nam aliquam molestiae eius aperiam exercitationem
          provident numquam, tenetur quos.
        </p>
      </div>
      <img
        className="object-cover"
        src={`../assets/${projectTitle}.png`}
        alt={`${title} screenshot`}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            PRO<span className="text-orange-500">JECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          illo iusto eum sed quas magnam recusandae quia ea quasi explicabo.
          Quod nemo at rerum temporibus molestias ducimus hic sapiente
          laudantium.
        </p>
      </motion.div>
      {/* PROJECTS */}
        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={motionContainer}
          >
            <div
              className="flex justify-center text-center items-center p-10 
          bg-orange-400 max-w-[800px] max-h-[600px] text-2xl font-semibold"
            >
              SM360
            </div>
            <Project title="Grenier Chevrolet Buick GMC" />
            {/* ROW 2 */}
            <Project title="Lallier SteFoy Honda" />
            <Project title="Toyota Lachute" />

            <div
              className="flex justify-center text-center items-center p-10 
          bg-orange-700 max-w-[800px] max-h-[600px] text-2xl font-semibold"
            >
              LE WAGON
            </div>
            <Project title="NightSkyper" />
            <Project title="RentALife" />
            {/* <div
              className="flex justify-center text-center items-center p-10 
           max-w-[800px] max-h-[600px] text-2xl font-semibold"
            ></div> */}

            <div
              className="flex justify-center text-center items-center p-10 
          bg-orange-500 max-w-[800px] max-h-[600px] text-2xl font-semibold"
            >
              For Myself
            </div>
            <Project title="Marvel Quiz App" />
            <div
              className="flex justify-center text-center items-center p-10 
          bg-orange-900 max-w-[800px] max-h-[600px] text-2xl font-semibold"
            >
              CMS
            </div>
            <Project title="Project 7" />
          </motion.div>
        </div>
    </section>
  );
};

export default Projects;
