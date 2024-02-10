import benfitsData from "@/data/benefitsData";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import Benefit from "@/scenes/benefits/Benefit";
import { motion } from "framer-motion";
// import BenefitHero from "./BenefitHero";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  initial: { opacity: 0 },
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const index = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* -- SECTION HEADER -- */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hiddedn: { opacity: 0, x: -50 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers,a nd classesto
            help get you to your ultimate fitness goals with ease. All while
            proving we truly caer about each and every member.
          </p>
        </motion.div>

        {/* -- BENEFITS -- */}
        <motion.div
          className="items-center justify-between gap-8 md:mt-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {benfitsData.map((benefit) => (
            <Benefit
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              descirption={benefit.descirption}
              setSelectedPage={setSelectedPage}
            ></Benefit>
          ))}
        </motion.div>
      </motion.div>

      {/* <BenefitHero setSelectedPage={setSelectedPage} /> */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img
          src={BenefitsPageGraphic}
          alt="benefits-hero"
          className="mx-auto"
        />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hiddedn: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            // transition={{ duration: 2 }}
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hiddedn: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              vitae rerum repudiandae corporis itaque molestias dolore quas, vel
              perspiciatis hic id cupiditate minima, possimus omnis atque eaque
              porro ut minus. Possimus culpa ratione illo esse!
            </p>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illum
              libero harum. Eaque hic ratione sed amet vel illum. Quidem magni
              et in expedita distinctio excepturi ipsa vero molestias nesciunt,
              delectus quae inventore cumque, impedit eum dolore totam sapiente
              repellendus deserunt dolorem, facere maxime odit?
            </p>
          </motion.div>
          {/* BUTTON */}
          <div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
