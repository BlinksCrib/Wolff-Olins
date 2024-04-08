import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import playText from "../assets/play.svg";

import Player from "@vimeo/player";

const Video = () => {
  //   const [isPlaying, setIsPlaying] = useState(false);
  const vimeoPlayerContainer = useRef<HTMLIFrameElement>(null);
  const toggleButton = useRef<HTMLImageElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
    
  //   const handleClick = async () => {
  //     if (!vimeoPlayerContainer.current) return;
  //     const vimeoPlayer = new Player(vimeoPlayerContainer.current!);

  //     // const paused = await vimeoPlayer.getPaused();
  //     if (isPlaying) {
  //       vimeoPlayer.play();
  //       const videoTriangle = toggleButton.current!.querySelector(
  //         ".video-triangle"
  //       ) as HTMLElement;
  //       if (videoTriangle) {
  //         videoTriangle.style.display = "none";
  //       } // toggleButton.current?.querySelector('.video-triangle')?.style.display = 'none';
  //       toggleButton.current!.classList.add("videoPauseCursor");
  //       toggleButton.current!.classList.remove("videoPlayCursor");
  //     } else {
  //       vimeoPlayer.pause();
  //       toggleButton.current!.classList.remove("videoPauseCursor");
  //       toggleButton.current!.classList.add("videoPlayCursor");
  //     }
  //   };

  //   toggleButton.current?.addEventListener("click", handleClick);

  //   return () => {
  //     toggleButton.current?.removeEventListener("click", handleClick);
  //   };
  //   initializePlayer();
  // }, []);


  const handleClick = async () => {
    if (!vimeoPlayerContainer.current) return;

    const vimeoPlayer = new Player(vimeoPlayerContainer.current);

    if (isPlaying) {
      await vimeoPlayer.pause();
      toggleButton.current?.classList.remove("videoPauseCursor");
      toggleButton.current?.classList.add("videoPlayCursor");
    } else {
      await vimeoPlayer.play();
      toggleButton.current?.classList.remove("videoPlayCursor");
      toggleButton.current?.classList.add("videoPauseCursor");
    }
    setIsPlaying(!isPlaying); // Update state after player interaction
  };

  // Initialize Vimeo player on component mount and clean up on unmount
  useEffect(() => {
    const initializePlayer = async () => {
      if (!vimeoPlayerContainer.current) return;

      const vimeoPlayer = new Player(vimeoPlayerContainer.current);

      // Optional chaining for event listener
      toggleButton.current?.addEventListener("click", handleClick);

      // Cleanup function with optional chaining
      return () => {
        vimeoPlayer.destroy(); // Destroy player instance
        toggleButton.current?.removeEventListener("click", handleClick);
      };
    };

    initializePlayer();
  }, []);

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
      x: mousePosition.x - 60,
      y: mousePosition.y - 30,
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
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="cursor-none player relative aspect-video w-full overflow-hidden"
      >
        <div className="absolute z-20 w-full h-full flex items-center justify-center">
          <svg
            width="170"
            height="197"
            viewBox="0 0 170 197"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 md:w-16 xl:w-24"
          >
            <path
              d="M0.57475 196.018L0.574752 0.718084L169.709 98.368L0.57475 196.018Z"
              fill="#FFF84B"
            />
          </svg>
        </div>

        {/* <div className="">
        <div className=" absolute text-3xl text-white" style={{ transform: 'translate(532px, 263px)' }}>
          <svg width="120" height="65" viewBox="0 0 142 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 md:opacity-100 hidden">
          </svg>
        </div>
      </div> */}

        {/* <div aria-describedby="Press spacebar to show controls. Press enter to start playing" className="h-full w-full absolute z-10 min-w-full transition-all">
        <div className="controls not-sr-only absolute z-30">
          <button className="group text-4xl text-brand-color" aria-label="play pause" aria-description="Play or pause the video" aria-pressed="false">
            <span className="hidden group-focus:flex">Play/Pause</span>
          </button>
        </div>
      </div> */}

        {/* <div
          id="WO Showreel"
          className="video-player video-placeholder aspect-video"
          data-vimeo-initialized="true"
        >
          <div className="absolute -z-10 w-full h-full bg-cover blur-xl scale-105" />
          <iframe
            src="https://player.vimeo.com/video/871777116?h=1a630323f2&title=0&byline=0&portrait=0&controls=0&quality=auto&app_id=122963"
            width="1650"
            height="928"
            // frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            data-ready="true"
          ></iframe>
        </div> */}

        <section className="home-video">
          {/* <div className="video-controls videoPlayCursor">
            <img
              ref={toggleButton}
              className="video-triangle"
              src={playText}
              alt=""
            />
          </div> */}
          <div className="video-container">
            <iframe
              ref={vimeoPlayerContainer}
              src="https://player.vimeo.com/video/871777116?h=1a630323f2&title=0&byline=0&portrait=0&controls=0&quality=auto&app_id=122963"
              width="1650"
              height="928"
              //   frameborder="0"
              // allow="autoplay; fullscreen; picture-in-picture"
              data-ready="true"
            ></iframe>
          </div>
        </section>
      </div>
      {cursorPresence && (
        <motion.div
          className=" fixed top-0 left-0 h-32 w-32 pointer-events-none z-50"
          variants={variants}
          animate="default"
        >
          <div className="video-controls videoPlayCursor">
            <img
              ref={toggleButton}
              src={playText}
              alt="play-text-cusor"
              className="video-triangle"
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Video;
