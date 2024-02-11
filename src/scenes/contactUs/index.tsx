import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import React from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  // style for inputs
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  // react-hook-form
  const {
    register, // used to register input
    trigger, // used to trigger validation for a specific field
    formState: { errors },
  } = useForm();

  // handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* -- HEADER -- */}
        <motion.div
          className="md:w-3/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hiddedn: { opacity: 0, x: -50 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            doloribus quibusdam est odio nostrum voluptate asperiores quod quos
            reprehenderit, aperiam iusto totam veniam dolorem repudiandae dicta
            alias excepturi repellendus non. Mollitia, id minus. Quia, earum?
          </p>
        </motion.div>

        {/* --FORM & IMAGE -- */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hiddedn: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              // onSubmit={(e) => handleSubmit(e)}
              onSubmit={handleSubmit}
              action="https://formsubmit.co/f981467510bad69152c5050030d9623a"
              method="POST"
            >
              <input
                type="text"
                className={`${inputStyles}`}
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 80,
                })}
              />
              {/* -ERROR VALIDATION-- */}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" && "Max length exceeded"}
                </p>
              )}
              <input
                type="email"
                className={`${inputStyles}`}
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {/* -ERROR VALIDATION-- */}
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "Name is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                className={`${inputStyles}`}
                placeholder="message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {/* -ERROR VALIDATION-- */}
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "Name is required"}
                  {errors.message.type === "maxLength" && "Max length exceeded"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hiddedn: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                src={ContactUsPageGraphic}
                alt="Contact Us"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
