import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons"

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-6/12 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 
                before:-left-20 before:rounded-t-[400px] before:rounded-b-[400px] before:w-full before:max-w-[500px]
                before:h-full before:border-2 before:border-orange-400 before:z-[-1]"
          >
            <img
              src="../assets/profile-heigh-full.jpg"
              alt="profil"
              className="hover:filter rounded-t-[400px] rounded-b-[400px] hover:hue-rotate-30 hover:contrast-125 transition duration-500 z-10
                    w-full max-w-[300px] md:max-w-[550px]"
            />
          </div>
        ) : (
          <img
            src="../assets/profile-sit.jpeg"
            alt="profil"
            className="hover:filter rounded-t-[400px] rounded-b-[400px] hover:hue-rotate-30 hover:contrast-125 transition duration-500 z-10
                    w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            voluptas rem at aliquam est impedit consequuntur vitae adipisci
            veniam doloremque sunt debitis libero tempora ipsam, tenetur illo,
            possimus necessitatibus sed.
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
            className="bg-gradient-rainorange text-deep-blue rounded-sm py-3 px-7 font-semibold 
            hover:bg-gradient-rainorange-reverse hover:text-grey"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainorange py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
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
