import { useEffect, useState } from "react";
import CardWork from "../../utils/CardWork";
import { motion } from "framer-motion";

import museum from "../../assets/museum.jpg";
import Nybg from "../../assets/NYBG.jpg";
import decathlon from "../../assets/decathlon.jpg";
import lgElectronics from "../../assets/lg-electronics.jpg";
import Met from "../../assets/Met.jpg";

const Work = () => {
  const [cursorPresence, setCursorPresence] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  console.log(cursorVariant);
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 120,
      transition: { duration: 0 },
    },
    none: {},
  };

  const mouseEnter = () => {
    setCursorVariant("mainArea");
    setCursorPresence(true);
  };
  const mouseLeave = () => {
    setCursorVariant("none");
    setCursorPresence(false);
  };
  return (
    <>
      <div className="px-8 sm:px-0 w-full mb-36 max-w-[1140px] llg:w-[90%] mx-auto flex flex-col gap-14">
        <span className="text-[32.81px] text-black border-t-[1px] border-[#000] flex">
          Selected Work
        </span>
        <div className="flex flex-col gap-20">
          <CardWork
            image1={museum}
            image2={Nybg}
            text1={"Leeum Museum of Art"}
            subText1={"Putting the art museum in motion"}
            text2={"NYBG"}
            subText2={"Renewing a New York Institution"}
            cardtext1={"Culture and education"}
            cardtext2={"Brand Strategy"}
            cardtext3={"Visual Identity"}
            cardtext4={""}
            cardtext5={"Culture and education"}
            cardtext6={"Brand Strategy"}
            cardtext7={"Visual Identity"}
            cardtext8={"Verbal Identity"}
          />

          <div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="flex flex-col cursor-none workcard3 gap-3"
          >
            <div className="group  relative">
              <img src={decathlon} className="decathlon" alt="image" />
              <div className="absolute inset-0 bg-black opacity-[0.115] hover:opacity-50 transition duration-300 ease-in-out"></div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18.59px] text-black">Decathlon</p>
              <p className="text-[18.59px] text-[#959595] font-medium">
                Rewriting sport&apos;s playbook for billions of athletes
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="py-1 px-2 border border-[#959595] text-[13.02px] text-[#959595]">
                  Sports
                </span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                  Brand Strategy
                </span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                  Brand Architecture
                </span>
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                  Visual Identity
                </span>
              </div>
            </div>
          </div>

          <CardWork
            order={true}
            image1={Met}
            image2={lgElectronics}
            text1={"The Met"}
            subText1={"Bringing art to everyone"}
            text2={"LG Electronics"}
            subText2={"Bringing a smile back to tech"}
            cardtext1={"Culture and education"}
            cardtext2={"Brand Strategy"}
            cardtext3={"Brand Architecture"}
            cardtext4={"Visual Identity"}
            cardtext5={"Tech"}
            cardtext6={"Brand Strategy"}
            cardtext7={"Visual Identity"}
            cardtext8={"Verbal Identity"}
          />
        </div>
      </div>
      {cursorPresence && (
        <motion.div
          className=" fixed top-0 left-0 h-32 w-32 pointer-events-none z-50"
          variants={variants}
          animate="default"
        >
          <svg
            className="custom-arrow"
            width="30"
            height="50"
            viewBox="0 0 29 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8057 38.6348H12.2343V8.92212L0.805725 20.3501V13.4933L12.2343 2.06535L13.3772 0.922558H15.6629L16.8057 2.06535L28.2343 13.4933V20.3501L16.8057 8.92212V38.6348Z"
              fill="#FFF84B"
            />
          </svg>
        </motion.div>
      )}
    </>
  );
};

export default Work;
