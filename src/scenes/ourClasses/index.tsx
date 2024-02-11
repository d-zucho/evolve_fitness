import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import classes from "@/data/classData";
import SingleClass from "./SingleClass";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      {/* First motion is to set the page in navbar when in view */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        {/* SMotion div to set text aninmation */}
        <motion.div
          className="mx-auto w-5/6"
          initial={{ opacity: 0, x: -50 }}
          // transition={{ duration: 2 }}
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hiddedn: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              blanditiis hic illum quibusdam, expedita, distinctio quas id
              atque, possimus voluptates officiis vitae. Corporis, eius nostrum
              vitae hic eum magni eligendi omnis temporibus, ea suscipit
              laborum! Ipsum aperiam quo ad obcaecati!
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] gap-8 whitespace-nowrap">
            {classes.map((item: ClassType, index: number) => (
              // <div key={`${item.name}-${index}`}
              //   name={item.name}
              //   description={item.description}
              //   image={item.image}
              // ></div>
              <SingleClass
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
