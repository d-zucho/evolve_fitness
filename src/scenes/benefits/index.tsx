// import beenfitsData from "@/data/benefitsData";
import benfitsData from "@/data/benefitsData";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import Benefit from "@/scenes/benefits/Benefit";
import { motion } from "framer-motion";

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
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers,a nd classesto
            help get you to your ultimate fitness goals with ease. All while
            proving we truly caer about each and every member.
          </p>
        </div>

        {/* -- BENEFITS -- */}
        <motion.div
          className="items-center justify-between gap-8 md:mt-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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
    </section>
  );
};

export default index;
