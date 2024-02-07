
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const [menuToggled, setMenuToggled] = useState<boolean>(false)
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            { isAboveMediumScreens ?
            // Desktop
              (<div id="links" className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>

              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>)
            : 
            (
              // Mobile
              <button
                className="rounded-full bg-secondary-500 p-2 hover:bg-secondary-400 transition duration-500"
                onClick={() => console.log("Open")}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )
      

          
          }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
