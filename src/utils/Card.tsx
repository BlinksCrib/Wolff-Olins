import React from "react";
import insideBg from "../assets/fea-svg-2.svg";
import thinkingBg from "../assets/fea-svg-1.svg";
import clientBg from "../assets/fea-svg-3.svg";

// Declare the marquee element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLMarqueeElement> & { direction?: string },
        HTMLMarqueeElement
      >;
    }
  }
}

const Card: React.FC<any> = ({ image, type, text, subText }) => {
  const getImage = (type: String) => {
    switch (type) {
      case "Inside":
        return insideBg;
      case "Thinking":
        return thinkingBg;
      case "Clients":
        return clientBg;
      default:
        return null;
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${getImage(type)})`,
    backgroundCover: "cover",
    backgroundRepeat: "no-repeat",
  };

  const dynamicClass = (type: String) => {
    if (type === "Inside") {
      return ` w-[128px] flex items-center justify-center text-center py-1 px-2`;
    } else {
      return ` w-[128px] h-[40px]  flex items-center justify-center  text-center py-1 px-2`;
    }
  };
  return (
    <div className="myWrapper w-full">
      <div className="image-container relative overflow-hidden">
        <div className="marquee-text w-full h-full opacity-0 bg-[#FFF84B] flex items-center justify-center transition-opacity duration-300 absolute inset-0">
          <marquee direction="left">
            <p className="text-[40px] text-black">READ MORE</p>
          </marquee>
        </div>
        <img src={image} className="w-full" alt="featured-images" />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <span style={backgroundStyle} className={dynamicClass(type)}>
          {type}
        </span>
        <p className="text-[17px] lg:max-w-[25ch] font-regular text-black">
          {text}
        </p>
        <span className="truncated-text text-[17px] text-[#616161]">
          {subText}
        </span>
      </div>
    </div>
  );
};

export default Card;
