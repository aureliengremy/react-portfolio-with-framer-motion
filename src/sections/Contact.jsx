import React from "react";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
        console.log('SEND!');

    }
  };

  return (
    <section id="contact" className="py-48">
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
             <span className="text-orange-500 pr-2">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
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
          <img className="object-cover" src="../assets/contact-image.jpeg" alt="contact image" />
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
            <form action="https://formsubmit.co/el/zodexa" onSubmit={onSubmit} method="POST">
              <input
                type="text"
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
                className="w-full bg-orange-200 text-gray-900 font-semibold placeholder-opaque-black p-3 mt-5"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                maxlength="2000"
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
    </section>
  );
};

export default Contact;
