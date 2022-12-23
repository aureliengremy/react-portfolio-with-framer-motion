import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import illustrator from "../assets/comp-icones/adobe-illustrator.png";
import photoshop from "../assets/comp-icones/adobe-photoshop.png";
import xd from "../assets/comp-icones/adobe-xd.png";
import figma from "../assets/comp-icones/figma.png";
import html from "../assets/comp-icones/html-5.png";
import javascript from "../assets/comp-icones/javascript.png";
import linux from "../assets/comp-icones/linux.png";
import notion from "../assets/comp-icones/notion.png";
import raspberry from "../assets/comp-icones/raspberry.png";
import react from "../assets/comp-icones/react.png";
import ruby from "../assets/comp-icones/ruby.png";
import sass from "../assets/comp-icones/sass.png";
import git from "../assets/comp-icones/git.png";
import github from "../assets/comp-icones/github.png";
import gitlab from "../assets/comp-icones/gitlab.png";
import heroku from "../assets/comp-icones/heroku.png";
import intellij from "../assets/comp-icones/intellij.png";
import java from "../assets/comp-icones/java.png";
import sql from "../assets/comp-icones/sql.png";
import tailwind from "../assets/comp-icones/tailwind-css.png";
import vscode from "../assets/comp-icones/vscode.png";
import Skill from "../components/Skill";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const langages = [
    { icone: html, name: "html" },
    { icone: sass, name: "sass" },
    { icone: ruby, name: "ruby" },
    { icone: javascript, name: "javascript" },
    { icone: react, name: "react" },
    { icone: git, name: "git" },
    { icone: java, name: "java" },
    { icone: sql, name: "sql" },
    { icone: tailwind, name: "tailwind" },
  ];
  const tools = [
    { icone: linux, name: "linux" },
    { icone: notion, name: "notion" },
    { icone: raspberry, name: "raspberry" },
    { icone: github, name: "github" },
    { icone: gitlab, name: "gitlab" },
    { icone: heroku, name: "heroku" },
    { icone: intellij, name: "intellij" },
    { icone: vscode, name: "vscode" },
  ];
  const designs = [
    { icone: illustrator, name: "illustrator" },
    { icone: photoshop, name: "photoshop" },
    { icone: xd, name: "xd" },
    { icone: figma, name: "figma" },
  ];

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
              <div className="mb-2 md:mb-5 border-2 p-5">
                <p className="text-left">2020 / 2022</p>
                <p className="mt-1 md:mt-3 text-center">
                  INTÉGRATEUR / DEV FRONT-END
                  <br />
                  Solution Medias 360
                  <br />
                  Montréal, CA
                </p>
              </div>
              <div className="mt-2 md:mt-5 border-2 p-5">
                <p className="text-left">2017 / 2020</p>
                <p className="mt-1 md:mt-3 text-center">
                  DEV FRONT-END
                  <br />
                  ALIZNET
                  <br />
                  Paris, FR puis Montréal, CA
                </p>
              </div>
              <div className="mt-2 md:mt-5 border-2 p-5">
                <p className="text-left">2014 / 2017</p>
                <p className="mt-1 md:mt-3 text-center">
                  CHEF DE PROJET WEB
                  <br />
                  DEFI-PERFORMANCE
                  <br />
                  Champagne sur Seine, FR
                </p>
              </div>
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
            <div className="mt-5 md:mt-10">
              <div className="mb-2 md:mb-5 border-2 p-5">
                <p className="text-left">2022</p>
                <p className="mt-1 md:mt-3 text-center">
                  Coding Bootcamp - Web Dev
                  <br />
                  LEWAGON
                  <br />
                  Montréal, CA
                </p>
              </div>
              <div className="mt-2 md:mt-5 border-2 p-5">
                <p className="text-left">2013 / 2016</p>
                <p className="mt-1 md:mt-3 text-center">
                  Master 2 (M2)
                  <br />
                  ISC Paris
                  <br />
                  Paris, FR
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
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
            <div className="mt-5 md:mt-10">
              <div className="mb-2 md:mb-5 border-2 p-4">
                <p className="text-left">2022</p>
                <p className="mt-1 md:mt-3 text-center">
                  La musique
                  <br />
                  LA VIE
                  <br />
                  Le monde entier, Co
                </p>
              </div>
              <div className="mt-2 md:mt-5 border-2 p-4">
                <p className="text-left">2013 / 2016</p>
                <p className="mt-1 md:mt-3 text-center">
                  Master 2 (M2)
                  <br />
                  ISC Paris
                  <br />
                  Paris, FR
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-2xl mt-3 min-h-[64px]">
                Language & Tools
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-700 absolute right-0 top-0 z-[-1]" />
            <div className="mt-5 md:mt-10">
              <div className="mb-2 md:mb-5 border-2 p-4">
                <p className="text-left">Language</p>
                <div className="grid grid-cols-5 gap-1 mt-1 md:mt-3">
                  {langages.map((item, index) => (
                    <Skill key={index} iconeSrc={item.icone} id={item.name} icoName={item.name} />
                  ))}
                </div>
              </div>
              <div className="mt-2 md:mt-5 border-2 p-4">
                <p className="text-left">Software</p>
                <div className="grid grid-cols-5 gap-1 mt-1 md:mt-3">
                  {tools.map((item, index) => (
                    <Skill key={index} iconeSrc={item.icone} id={item.name} icoName={item.name} />
                  ))}
                </div>
              </div>
              <div className="mt-2 md:mt-5 border-2 p-4">
                <p className="text-left">Design</p>
                <div className="grid grid-cols-5 gap-1 mt-1 md:mt-3">
                  {designs.map((item, index) => (
                    <Skill key={index} iconeSrc={item.icone} id={item.name} icoName={item.name}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <div className="">
        <p className="font-playfair font-semibold text-2xl mt-3 min-h-[64px]">
          LANGUAGE & TOOLS
        </p>
      </div>
      <div className="flex gap-3 mb-4 justify-between">
        {langages.map((item, index) => (
          <Skill key={index} iconeSrc={item.icone} id={item.name} />
        ))}
      </div>
      <div className="flex gap-3 mb-4 justify-between">
        {tools.map((item, index) => (
          <Skill key={index} iconeSrc={item.icone} id={item.name} />
        ))}
      </div>
      <div className="flex gap-3 mb-4 justify-between">
        {designs.map((item, index) => (
          <Skill key={index} iconeSrc={item.icone} id={item.name} />
        ))}
      </div> */}
    </section>
  );
};

export default MySkills;
