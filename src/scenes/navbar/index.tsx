import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

// ** Framer Motion Variants START **
const navContainer = {
  visible: {
    //x: 0,
    opacity: 1,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
  hidden: {
    //x: -250,
    opacity: 0,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
};

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};
// ** Framer Motion Variants END **

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  // styles
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  // State for toggling the mobile menu
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              // Desktop
              <div id="links" className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              // Mobile Hamburger Button
              <button
                className="rounded-full bg-secondary-500 p-2 transition duration-500 hover:bg-secondary-400"
                onClick={() => setMenuToggled(!menuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {!isAboveMediumScreens && menuToggled && (
          <motion.div
            className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
            initial="hidden"
            animate={menuToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div className="flex justify-end p-12">
              <button onClick={() => setMenuToggled(!menuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <motion.div
              className="ml-[33%] flex flex-col gap-10 text-2xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navList}
            >
              <motion.div variants={navItem}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              <motion.div variants={navItem}>
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              <motion.div variants={navItem}>
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              <motion.div variants={navItem}>
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
