import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.png";
import work6 from "../../assets/work6.png";
import work7 from "../../assets/work7.jpg";
import work8 from "../../assets/work8.jpg";
import work9 from "../../assets/work9.jpg";
import work10 from "../../assets/work10.png";
import work11 from "../../assets/work11.jpg";
import work12 from "../../assets/work12.png";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Card from "../../utils/Card";

const News = () => {
  const newt = [
    {
      image: work1,
      type: "Inside",
      title:
        "Wolff Olins listed number 15 on Ad Age's Best Places to Work 2024",
      description:
        "Wolff Olins has been listed at number 15 on Ad Age's Best Places to Work 2024 in the US",
    },
    {
      image: work2,
      type: "Thinking",
      title: "The power of weird",
      description:
        "Global CEO Sairah Ashman explores how deviating from the norm and standing out from the pack throufgh weirdness can",
    },
    {
      image: work3,
      type: "Thinking",
      title: "Generation AI: a muse to amplify creativity",
      description:
        "Global CEO Sairah Ashman explores the positive impact of AI on creative industries.",
    },
    {
      image: work4,
      type: "Thinking",
      title: "2024 predictions and how to navigate change",
      description:
        "Senior leaders from Wolff Olins share some advice on how to prepare for the expected - and the unexpected - in 2024.",
    },
    {
      image: work5,
      type: "Thinking",
      title:
        "How to make Unilever great again: a memo to incoming CEO Hein Schumacher",
      description:
        "As new Unilever CEO Hein Schumacher takes up the reins, our Global CEO Sairah Ashman sets outthe areas that he should focus on.",
    },
    {
      image: work6,
      type: "Clients",
      title:
        "Wolff Olins designs new global brand identity for Johnson & Johnson consumer health division",
      description:
        "Wolff Olins, the global branding consultancy, has designed the new brand identity for Kenvue, the planned new consumer health company, anticipated to launch in 2023.",
    },
    {
      image: work7,
      type: "Clients",
      title: 'LG\'s rebrand looks to "bring a smile" to the world of tech',
      description:
        "Life’s Good. We are proud to have partnered with LG Electronics on the global activation of its refreshed brand identity!",
    },
    {
      image: work8,
      type: "Clients",
      title:
        "New York Botanical Garden hires Wolff Olins for major brand refresh",
      description:
        "We’re thrilled to announce that we are partnering with New York Botanical Garden to overhaul their brand identity ahead of a new era for the institution.",
    },
    {
      image: work9,
      type: "Thinking",
      title:
        "Utopia or dystopia ? It's up to us to teach AI to reflect the best of humanity",
      description:
        "In Global CEO Sairah Ashman’s latest Forbes article, she explores how brands can have a positive impact through tech in what we teach AI, the choices we make and the things we create.",
    },
    {
      image: work10,
      type: "Inside",
      title: "Dyslexia, creativity and me",
      description:
        "Our Global Executive Creative Director, Emma Barratt, unpicks her experience of working with dyslexia, shares her tips for how workplaces can better support staff with neurodiversity and explains how dyslexia has become her unique superpower.",
    },
    {
      image: work11,
      type: "Inside",
      title:
        "We've hired transformation specialist Julia Race to strengthen global culture off",
      description:
        "We’re thrilled to be welcoming Julia Race, (CPC) to our New York team for the newly created position of Senior Director of Culture.",
    },
    {
      image: work12,
      type: "Inside",
      title: "Inside Wolff Olins new branding",
      description:
        "Here, Wayne Deakin, global creative principal at Wolff Olins, explains how they addressed the challenge",
    },
  ];

  const targetRef = useRef(null);

  useEffect(() => {
    // Ensure the element exists before observing
    if (targetRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.body.style.backgroundColor = "rgb(191,191,191,0.5)";
            } else {
              document.body.style.backgroundColor = "";
            }
          });
        },
        { rootMargin: "-50% 0%" }
      );
      observer.observe(targetRef.current);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      ref={targetRef}
      className="px-8 sm:px-0 w-full max-w-[1140px] llg:w-[90%] mx-auto flex flex-col gap-8 pb-32 "
    >
      <span className="text-[32.81px] text-black border-t-[1px] border-[#000] flex">
        Featured News
      </span>
      <div className="featured-card">
        {newt?.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            type={item.type}
            text={item.title}
            subText={item.description}
          />
        ))}

        {/* <FeaturedCard
          image={weird}
          type={"Thinking"}
          text={"The power of weird"}
          subText={
            "Global CEO Sairah Ashman explores how deviating from the norm and standing out from the pack throufgh weirdness can"
          }
        />

        <FeaturedCard
          image={generationAi}
          type={"Thinking"}
          text={"Generation AI: a muse to amplify creativity"}
          subText={
            "Global CEO Sairah Ashman explores the positive impact of AI on creative industries."
          }
        />

        <FeaturedCard
          image={thisDate}
          type={"Thinking"}
          text={"2024 predictions and how to navigate change"}
          subText={
            "Senior leaders from Wolff Olins share some advice on how to prepare for the expected - and the unexpected - in 2024."
          }
        />

        <FeaturedCard
          image={unilever}
          type={"Thinking"}
          text={
            "How to make Unilever great again: a memo to incoming CEO Hein Schumacher"
          }
          subText={
            "As new Unilever CEO Hein Schumacher takes up the reins, our Global CEO Sairah Ashman sets outthe areas that he should focus on."
          }
        />

        <FeaturedCard
          image={consumerHealth}
          type={"Clients"}
          text={
            "Wolff Olins designs new global brand identity for Johnson & Johnson consumer health division"
          }
          subText={
            "Wolff Olins, the global branding consultancy, has designed the new brand identity for Kenvue, the planned new consumer health company, anticipated to launch in 2023. "
          }
        />

        <FeaturedCard
          image={lgRebrand}
          type={"Clients"}
          text={'LG\'s rebrand looks to "bring a smile" to the world of tech'}
          subText={
            "Life’s Good. We are proud to have partnered with LG Electronics on the global activation of its refreshed brand identity!"
          }
        />

        <FeaturedCard
          image={botanicalGarden}
          type={"Clients"}
          text={
            "New York Botanical Garden hires Wolff Olins for major brand refresh"
          }
          subText={
            "We’re thrilled to announce that we are partnering with New York Botanical Garden to overhaul their brand identity ahead of a new era for the institution."
          }
        />

        <FeaturedCard
          image={utopia}
          type={"Thinking"}
          text={
            "Utopia or dystopia ? It's up to us to teach AI to reflect the best of humanity"
          }
          subText={
            "In Global CEO Sairah Ashman’s latest Forbes article, she explores how brands can have a positive impact through tech in what we teach AI, the choices we make and the things we create."
          }
        />

        <FeaturedCard
          image={dyslexia}
          type={"Inside"}
          text={"Dyslexia, creativity and me"}
          subText={
            "Our Global Executive Creative Director, Emma Barratt, unpicks her experience of working with dyslexia, shares her tips for how workplaces can better support staff with neurodiversity and explains how dyslexia has become her unique superpower."
          }
        />

        <FeaturedCard
          image={juliaRace}
          type={"Inside"}
          text={
            "We've hired transformation specialist Julia Race to strengthen global culture off"
          }
          subText={
            "We’re thrilled to be welcoming Julia Race, (CPC) to our New York team for the newly created position of Senior Director of Culture."
          }
        />

        <FeaturedCard
          image={wolffOlins}
          type={"Inside"}
          text={"Inside Wolff Olins new branding"}
          subText={
            "Here, Wayne Deakin, global creative principal at Wolff Olins, explains how they addressed the challenge"
          }
        /> */}
      </div>
      <motion.button className=" h-[116.5px] sm:h-[194.5px] see-more-button border-[2px] border-black rounded-full text-[35px] md:text-[52.21px] flex items-center justify-center transition-all ">
        See More
      </motion.button>
    </div>
  );
};

export default News;
