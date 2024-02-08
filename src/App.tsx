import { useEffect, useState } from "react";
import "./App.css";
import { SelectedPage } from "./shared/types";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY > 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      // this runs when the component is unmounted (clean up)
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
