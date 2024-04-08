import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import jersey from "../../assets/jersey.jpg";
import WO_LG_CaseStudy_Hero from "../../assets/WO_LG_CaseStudy_Hero.jpg";
import NYBG_CaseStudy_11 from "../../assets/NYBG_CaseStudy_11.jpg";
import fineboy from "../../assets/fineboy.jpg";
import Uber_thumbnail from "../../assets/Uber-thumbnail.png";
import WolffOlins_TheMet_CaseStudy_06__1_ from "../../assets/WolffOlins_TheMet_CaseStudy_06__1_.jpg";
import GSK_Carousel_01 from "../../assets/GSK-Carousel-01.mp4";
import { motion } from "framer-motion";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setActiveIndex(selectedIndex);
  };

  const [cursorPresence, setCursorPresence] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
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
      y: mousePosition.y - 70,
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

  const prevMouseEnter = () => {
    setCursorVariant("Prev");
    console.log(cursorVariant);
  };
  const prevMouseLeave = () => {
    setCursorVariant("mainArea");
  };

  const nextMouseEnter = () => {
    setCursorVariant("Next");
  };
  const nextMouseLeave = () => {
    setCursorVariant("mainArea");
  };

  const carouselLength = 8;

  const handlePrevIndex = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + carouselLength) % carouselLength
    );
  };

  const handleNextIndex = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselLength);
  };
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="carousel-container relative"
    >
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        className="my-carousel cursor-none"
      >
        <Carousel.Item className="carousel-item ">
          <img src={jersey} height={"220px"} alt="" />
          <Carousel.Caption className=" carousel-caption text-start">
            <h3 className="text-[20px]">Decathlon</h3>
            <p className="text-[28px] font-medium  max-w-[32ch]">
              Rewriting sport's playbook for billions of athletes
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img src={carouselImage2} height={"220px"} alt="" /> */}
          <div className="carousel-video">
            <video muted autoPlay loop playsInline src="https://videos.ctfassets.net/4rnblstkg79m/A6syUitFelNsns3SI22eh/5cc1aca41b3dc47a02d6212e7550d042/Patreon_WolffOlins_Thumbnail.mp4"></video>
          </div>
          <Carousel.Caption className="carousel-caption text-start ">
            <h3 className="text-[20px]">Patreon</h3>
            <p className="text-[28px] font-medium  max-w-[28ch]">
            From membership model to creator company
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={WO_LG_CaseStudy_Hero} height={"720px"} alt="" />
          <Carousel.Caption className="carousel-caption text-start">
            <h3 className="text-[20px]">LG Electronics</h3>
            <p className="text-[28px] font-medium  max-w-[28ch]">
              Bringing a smile back to tech
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={NYBG_CaseStudy_11} height={"720px"} alt="" />
          <Carousel.Caption className="carousel-caption text-start">
            <h3 className="text-[20px]">NYBG</h3>
            <p className="text-[28px] font-medium  max-w-[28ch]">
              Renewing a New York institution
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={fineboy} height={"720px"} alt="" />
          <Carousel.Caption className="carousel-caption text-start">
            <h3 className="text-[20px]">Instacart</h3>
            <p className="text-[28px] font-medium  max-w-[28ch]">
              From grocery app to deliver leader
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Uber_thumbnail} alt="" />
          <Carousel.Caption className="carousel-caption text-start">
            <h3 className="text-[20px]">Uber</h3>
            <p className="text-[28px] font-medium  max-w-[28ch]">
              Changing how the world moves
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={WolffOlins_TheMet_CaseStudy_06__1_} height={"720px"} alt="" />
          <Carousel.Caption className="carousel-caption text-start">
            <h3 className="text-[20px]">The Met</h3>
            <p className="text-[28px] font-medium  max-w-[28ch]">
              Bringing art to everyone
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-video">
            <video muted autoPlay loop playsInline src={GSK_Carousel_01}></video>
          </div>
          <Carousel.Caption className="carousel-caption text-start">
            <h3 className="text-[20px]">GSK</h3>
            <p className="text-[28px] font-medium  max-w-[28ch]">
              Redefining an ambitious health brand
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">
              0{activeIndex + 1}/0{8}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        onClick={handlePrevIndex}
        onMouseEnter={prevMouseEnter}
        onMouseLeave={prevMouseLeave}
        className="carousel-prev cursor-none w-[300px] h-full hidden md:block absolute top-0 "
      ></div>
      <div
        onClick={handleNextIndex}
        onMouseEnter={nextMouseEnter}
        onMouseLeave={nextMouseLeave}
        className="carousel-next cursor-none w-[300px] top-0 h-full hidden md:block absolute right-0 "
      ></div>
      {cursorPresence && (
        <motion.div
          className=" fixed top-0 left-0 h-32 w-32 pointer-events-none z-50"
          variants={variants}
          animate="default"
        >
          {cursorVariant === "mainArea" && (
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUwLjk3MSA1N0w4LjAzNDc5IDE0LjA2MzdMOC41NjIwMyA0NC4xOTcxTDAgMzUuNjM1VjBIMzUuNjM1TDQ0LjE5NzEgOC41NjIwM0wxMy45NjA2IDguMDM0NzlMNTcgNTAuOTcxTDUwLjk3MSA1N1oiIGZpbGw9IiNGRkY4NEIiLz4KPC9zdmc+Cg==" alt="yellow arrow cursor" />
          )}
          {cursorVariant === "Prev" && (
            <span className="text-[#FFF84B] text-[3.4rem] font-regular">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTUzIDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOC4xMjA5NSA1Ny41NTExTDAuOTIxMDc5IDU3LjU5NEwwLjU4NzQ0OSAxLjU5NDk3TDE5LjQ2NzEgMS40ODI0OUMyOS40NjY5IDEuNDIyOTEgNDEuNTU3MiAzLjExMDkyIDQxLjY0NzggMTguMzEwNkM0MS43MzU1IDMzLjAzMDQgMjkuNjY1MiAzNC43MDIzIDE5LjU4NTQgMzQuNzYyNEw3Ljk4NTU5IDM0LjgzMTVMOC4xMjA5NSA1Ny41NTExWk03LjgyNDUgNy43OTE5N0w3Ljk0ODg5IDI4LjY3MTZMMTkuNTQ4NyAyOC42MDI1QzI2LjQyODYgMjguNTYxNSAzNC42NjU2IDI4LjAzMjQgMzQuNjA3OSAxOC4zNTI2QzM0LjU0NSA3Ljc5Mjc4IDI2LjMwNDIgNy42ODE4NyAxOS41MDQzIDcuNzIyMzhMNy44MjQ1IDcuNzkxOTdaTTY4LjYwMzggMTYuMzFDNjkuMjQzMyAxNi4yMjYyIDcwLjc2MzMgMTYuMjE3MSA3MS4zMjMzIDE2LjIxMzhMNzEuMjAzOCAyMy4wMTQ2QzcwLjcyMzMgMjIuOTM3NSA3MC4wODM0IDIyLjk0MTMgNjkuMzYzNCAyMi45NDU2QzYxLjc2MzUgMjIuOTkwOSA1Ni4yNTc5IDI1LjQyMzcgNTYuMzM0NiAzOC4zMDM1TDU2LjQ0NzYgNTcuMjYzMkw0OS4yNDc3IDU3LjMwNjFMNDkuMDA5NCAxNy4zMDY4TDU2LjIwOTMgMTcuMjYzOUw1Ni4yNTEyIDI0LjMwMzdDNTcuMzQ4MyAyMC40NTcxIDYyLjA0NjggMTYuODI5MSA2OC42MDM4IDE2LjMxWk0xMDguMTcgMjMuOTE0NEMxMTAuNTkzIDI3Ljc0MDEgMTExLjkwNyAzMy40MTIzIDExMS42MjEgMzkuMDk0MUw4MS4zMDE1IDM5LjI3NDhDODEuNTEzOSA0OC4wNzM3IDg1LjIxOTEgNTIuMjkxNyA5Mi43MzkgNTIuMjQ2OUM5OS41Mzg5IDUyLjIwNjQgMTAzLjIwMiA0OS4zMDQ1IDEwNC4xMjUgNDMuMjE4OUwxMTEuMDg5IDQzLjczNzRDMTA5LjM4NCA1My4xMDc3IDEwMy4wMTMgNTcuOTQ1OCA5Mi44NTMzIDU4LjAwNjNDODYuNjkzNCA1OC4wNDMgODEuODgyNSA1Ni4yMzE2IDc4LjQxODggNTIuMjUyMkM3NS4wMzY0IDQ4LjUxMjMgNzMuNDg1NSA0My4zMjE0IDczLjQ0ODMgMzcuMDgxNUM3My40MTMgMzEuMTYxNiA3NS4wNjIgMjUuOTUxNyA3OC4zOTk1IDIyLjE3MThDODEuODk1NyAxOC4xNTA5IDg2Ljc2MzYgMTYuMTIxOCA5Mi41MjM1IDE2LjA4NzVDOTguODQzNCAxNi4wNDk5IDEwNC44NiAxOC43MzQxIDEwOC4xNyAyMy45MTQ0Wk05Mi42MzgzIDIxLjkyNjlDODguMTU4NCAyMS45NTM2IDg0LjgwODUgMjMuNjUzNiA4My4yMjQyIDI2LjMwMzFDODEuNzk4NiAyOC43MTE2IDgxLjMzNDggMzEuNDM0NCA4MS4zNDY3IDMzLjQzNDRMMTA0LjIyNiAzMy4yOTgxQzEwNC4xMzMgMzEuMTM4NiAxMDMuMzE1IDI4LjEwMzQgMTAyLjAyNCAyNi4xOTExQzk5LjkyNTggMjMuMTYzNSA5Ni45NTgzIDIxLjkwMTIgOTIuNjM4MyAyMS45MjY5Wk0xMzcuMDg4IDU2Ljc4MjdMMTI5LjQwOCA1Ni44Mjg1TDExNC4yMSAxNi45MTgzTDEyMS44OSAxNi44NzI2TDEyOS4xMzMgMzcuNTQ5OEMxMjkuODY2IDM5LjYyNTUgMTMxLjI1IDQzLjc3NzMgMTMzLjIwOSA1MC4xNjU3QzEzNC41NDIgNDUuNzU3NyAxMzUuOTU1IDQxLjE4OTIgMTM3LjIxMyAzNy41MDE2TDE0NC4yOSAxNi43MzkxTDE1MS44MDkgMTYuNjk0M0wxMzcuMDg4IDU2Ljc4MjdaIiBmaWxsPSIjRkZGODRCIi8+Cjwvc3ZnPgo=" alt="previous"  />

            </span>
          )}
          {cursorVariant === "Next" && (
            <span className="text-[#FFF84B] text-[4rem] font-regular">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTUzIDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOC4xNzA4NCA1Ny4wNzExTDEuMDUwOTYgNTcuMTEzNUwwLjcxNzMzMiAxLjExNDVMOC40NzcxOSAxLjA2ODI3TDI5LjcxODQgMzQuNzgyM0MzMS45Nzk4IDM4LjM2ODkgMzQuNDg3NCA0Mi45OTQxIDM2LjgzMzYgNDcuMzgwMkwzNi45MTM2IDQ3LjM3OTdDMzYuNjQ2IDQyLjc0MTIgMzYuNDQyNiAzNS40NjIzIDM2LjQyODggMzMuMTQyM0wzNi4yMzY3IDAuOTAyODg2TDQzLjM1NjYgMC44NjA0NjhMNDMuNjkwMiA1Ni44NTk1TDM1LjUzMDMgNTYuOTA4MUwxNC41MjkxIDIzLjE5MjZDMTMuMjM2NyAyMS4xMjAzIDkuNzU5MTUgMTQuODIwOSA3LjU3MzkzIDEwLjU5MzhMNy40OTM5MyAxMC41OTQzQzcuNzY1ODYgMTUuOTUyOCA3Ljk2OTcgMjMuMzExNyA3Ljk3ODc2IDI0LjgzMTdMOC4xNzA4NCA1Ny4wNzExWk04Ny4zNjMyIDIzLjU1ODdDODkuNzg2IDI3LjM4NDMgOTEuMDk5OSAzMy4wNTY2IDkwLjgxMzcgMzguNzM4NEw2MC40OTQyIDM4LjkxOUM2MC43MDY3IDQ3LjcxNzkgNjQuNDExOSA1MS45MzU5IDcxLjkzMTcgNTEuODkxMUM3OC43MzE2IDUxLjg1MDYgODIuMzk0NCA0OC45NDg3IDgzLjMxODEgNDIuODYzMUw5MC4yODE0IDQzLjM4MTdDODguNTc3MiA1Mi43NTIgODIuMjA1OSA1Ny41OSA3Mi4wNDYgNTcuNjUwNkM2NS44ODYyIDU3LjY4NzMgNjEuMDc1MyA1NS44NzU5IDU3LjYxMTUgNTEuODk2NEM1NC4yMjkyIDQ4LjE1NjUgNTIuNjc4MiA0Mi45NjU3IDUyLjY0MSAzNi43MjU4QzUyLjYwNTggMzAuODA1OSA1NC4yNTQ4IDI1LjU5NiA1Ny41OTIzIDIxLjgxNkM2MS4wODg0IDE3Ljc5NTEgNjUuOTU2NCAxNS43NjYxIDcxLjcxNjMgMTUuNzMxOEM3OC4wMzYyIDE1LjY5NDEgODQuMDUyMyAxOC4zNzgzIDg3LjM2MzIgMjMuNTU4N1pNNzEuODMxMSAyMS41NzEyQzY3LjM1MTIgMjEuNTk3OSA2NC4wMDEyIDIzLjI5NzkgNjIuNDE3IDI1Ljk0NzRDNjAuOTkxMyAyOC4zNTU5IDYwLjUyNzUgMzEuMDc4NyA2MC41Mzk1IDMzLjA3ODdMODMuNDE5IDMyLjk0MjRDODMuMzI2MiAzMC43ODI5IDgyLjUwODEgMjcuNzQ3NyA4MS4yMTY3IDI1LjgzNTRDNzkuMTE4NiAyMi44MDc4IDc2LjE1MSAyMS41NDU1IDcxLjgzMTEgMjEuNTcxMlpNMTI4LjQ2OSAxNi4zNTM3TDExNC42NjMgMzUuNTU2M0wxMjkuODI3IDU2LjM0NjNMMTIyLjA2NyA1Ni4zOTI1TDExNS4zNzEgNDYuOTkyM0MxMTMuOTE4IDQ0LjkyMDkgMTEyLjA2IDQxLjg5MTkgMTExLjAxIDQwLjIxODFDMTEwLjA1OSA0MS43NDM4IDEwOC4wNzkgNDQuOTU1NyAxMDYuNjUxIDQ3LjA0NDJMMTAwLjA2NyA1Ni41MjM2TDkyLjMwNzUgNTYuNTY5OEwxMDcuMjIzIDM1LjYwMDZMOTMuMjY5MSAxNi41NjM0TDEwMS4wMjkgMTYuNTE3MkwxMDcuNTYzIDI1LjUxODRDMTA4LjkzNCAyNy40MzAzIDExMC4xNDYgMjkuNDIzMSAxMTAuOTU0IDMwLjY5ODNDMTExLjgyNiAyOS4zMzMxIDExMy4wMTQgMjcuNDA1OSAxMTQuMzYzIDI1LjQ3NzlMMTIwLjYyOSAxNi40MDA0TDEyOC40NjkgMTYuMzUzN1pNMTQ4LjM1NCA1Ni42MzU5QzE0MC45MTQgNTYuNjgwMiAxMzcuNjE3IDUzLjgxOTggMTM3LjU3OCA0Ny4zNEwxMzcuNDI5IDIyLjMwMDRMMTMxLjY2OSAyMi4zMzQ3TDEzMS42MzMgMTYuMzM0OEwxMzcuMzkzIDE2LjMwMDVMMTM3LjMyNyA1LjE4MDdMMTQ0LjQ0NyA1LjEzODI4TDE0NC41MTMgMTYuMjU4MUwxNTIuNjczIDE2LjIwOTVMMTUyLjcwOSAyMi4yMDk0TDE0NC41NDkgMjIuMjU4TDE0NC42OTcgNDcuMDU3NUMxNDQuNzEyIDQ5LjY5NzUgMTQ1LjkxNSA1MC4xNzAzIDE0OC44NzUgNTAuMTUyN0MxNDkuNzU1IDUwLjE0NzUgMTUxLjE5NCA0OS45Nzg5IDE1Mi41NTMgNDkuNzMwOEwxNTIuNzUxIDU2LjIwOTdDMTUxLjQ3MyA1Ni40NTczIDE0OS43OTQgNTYuNjI3MyAxNDguMzU0IDU2LjYzNTlaIiBmaWxsPSIjRkZGODRCIi8+Cjwvc3ZnPgo="
                alt="next"
              />
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
