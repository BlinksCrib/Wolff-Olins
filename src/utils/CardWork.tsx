import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CardWork: React.FC<any> = ({
  order,
  image1,
  image2,
  text1,
  subText1,
  text2,
  subText2,
  cardtext1,
  cardtext2,
  cardtext3,
  cardtext4,
  cardtext5,
  cardtext6,
  cardtext7,
  cardtext8,
}) => {
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

  const dynamicClass = (order: any) => {
    if (order) {
      return ` flex cursor-none self-start flex-col gap-3 workcard2 -order-1`;
    } else {
      return ` flex cursor-none self-start flex-col gap-3 workcard2`;
    }
  };
  return (
    <>
      <div className="flex flex-col gap-8 md:flex-row work-card-wrapper justify-between">
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="flex cursor-none self-start flex-col gap-3  workcard1"
        >
          <div className="group  relative">
            <img src={image1} className="long-image" alt="image" />
            <div className="absolute inset-0 bg-black opacity-[0.115] hover:opacity-50 transition duration-300 ease-in-out"></div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[18.59px] text-black">{text1}</p>
            <p className="text-[18.59px] text-[#959595] font-medium">
              {subText1}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="py-1 px-2 border border-[#959595] text-[13.02px] text-[#959595]">
                {cardtext1}
              </span>
              <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                {cardtext2}
              </span>
              <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                {cardtext3}
              </span>
              {cardtext4 !== "" && (
                <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                  {cardtext4}
                </span>
              )}
            </div>
          </div>
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={dynamicClass(order)}
        >
          <div className="group  relative">
            <img src={image2} className="short-image" alt="image" />
            <div className="absolute inset-0 bg-black opacity-[0.115] hover:opacity-50 transition duration-300 ease-in-out"></div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[18.59px] text-black">{text2}</p>
            <p className="text-[18.59px] text-[#959595] font-medium">
              {subText2}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="py-1 px-2 border border-[#959595] text-[13.02px] text-[#959595]">
                {cardtext5}
              </span>
              <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                {cardtext6}
              </span>
              <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                {cardtext7}
              </span>
              <span className="py-1 px-2 border border-[#959595] rounded-full text-[13.02px] text-[#959595]">
                {cardtext8}
              </span>
            </div>
          </div>
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

export default CardWork;
