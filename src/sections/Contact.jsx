import React from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Contact = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (e) => {
  //   const isValid = await trigger();
  //   if (!isValid) {
  //     e.preventDefault();
  //   } else {
  //       console.log('SEND!');

  //   }
  // };
  // const onSubmit = () => {
  //   fetch("https://formsubmit.co/ajax/zodexa", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "FormSubmit",
  //       message: "I'm from Devro LABS",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <section id="contact" className="py-16 md:py-48 lg:py-52 xl:py-64 h-full flex flex-col justify-center">
      <div>
        {/* HEADING */}
        <motion.div
          className="flex justify-end w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="flex justify-end font-playfair font-semibold text-4xl">
              <span className="text-orange-500 pr-2">CONTACT ME</span> TO GET
              STARTED
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="w-1/2" />
            </div>
          </div>
        </motion.div>
        {/* FORM & IMAGE */}
        <div className="md:flex md:justify-between gap-32 mt-5">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {isAboveMediumScreens ? (
         <div
         className="relative z-0 ml-20 before:absolute before:-top-10 
                   before:-right-10 before:w-full before:h-full before:border-2
                 before:border-orange-400 before:z-[-1]"
       >
         <img
           className="object-cover"
           src="../assets/Lewagon-4-W-Blur-r.png"
           alt="contact image"
         />
       </div>
        ) : (
          <img
           className="object-cover"
           src="../assets/Lewagon-4-W-Blur-r.png"
           alt="contact image"
         />
        )}
          </motion.div>
          <div className="basis-1/2 md:flex md:justify-between gap-16 mt-5">
            <motion.div
              className="mt-10 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* <form target="_blank" action="https://formsubmit.co/el/zodexa" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form> */}
              <form
                action="https://formsubmit.co/gremy.aurelien@gmail.com"
                // onSubmit={onSubmit}
                method="POST"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="gh29HGwAUw3W25ewpNGObPgu2xoNsmcxt2NZaDkx"
                />
                <input
                  type="text"
                  name="name"
                  className="w-full bg-orange-200 text-gray-900 font-semibold placeholder-opaque-black p-3"
                  placeholder="NAME"
                  required
                  // {...register("name", {
                  //   required: true,
                  //   maxLength: 100,
                  // })}
                  // {...(errors.name && (
                  //   <p className="text-red mt-1">
                  //     {errors.name.type === "required" &&
                  //       "This field is required."}
                  //     {errors.name.type === "maxLength" &&
                  //       "This length is 100 char max."}
                  //   </p>
                  // ))}
                />
                <input
                  type="email"
                  name="email"
                  className="w-full bg-orange-200 text-gray-900 font-semibold placeholder-opaque-black p-3 mt-5"
                  placeholder="EMAIL"
                  required
                  // {...register("email", {
                  //   required: true,
                  // })}
                  // {...(errors.email && (
                  //   <p className="text-red mt-1">
                  //     {errors.email.type === "required" &&
                  //       "This field is required."}
                  //   </p>
                  // ))}
                />
                <textarea
                  type="text"
                  name="message"
                  className="w-full bg-orange-200 text-gray-900 font-semibold placeholder-opaque-black p-3 mt-5"
                  placeholder="MESSAGE"
                  rows="4"
                  cols="50"
                  maxLength="2000"
                  required
                  // {...register("message", {
                  //   required: true,
                  //   maxLength: 2000,
                  // })}
                  // {...(errors.message && (
                  //   <p className="text-red mt-1">
                  //     {errors.message.type === "required" &&
                  //       "This field is required."}
                  //     {errors.message.type === "MaxLength" &&
                  //       "max length is 2000 char."}
                  //   </p>
                  // ))}
                />
                <button
                  type="submit"
                  className="p-5 bg-gradient-rainorange font-semibold text-deep-blue mt-5
                hover:bg-gradient-rainorange-reverse hover:text-white transition duration-500"
                >
                  SEND ME A MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
