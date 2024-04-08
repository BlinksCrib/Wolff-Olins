import footerlink from "../../assets/link-arrow.svg";
import backToTop from "../../assets/backToTop.svg";
import footerLogo from "../../assets/logo.svg";
// import { useEffect, useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling behavior
    });
  };

  return (
    <footer className="h-[610px] bg-[#FFF84B] flex flex-col justify-between">
      <div className="px-8 sm:px-0 pt-8 w-full max-w-[1140px] llg:w-[90%] mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-auto flex justify-between">
          <div className="font-inter text-[14.38px]"> {year} Wolff Olins</div>
          <div
            className="flex md:hidden flex-col gap-1  items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src={backToTop}
              className="p-2 back-to-top"
              alt="back-to-top"
            />
            <p className="text-[14.5px] text-black">Back to top</p>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <p className="font-medium text-[14.5px]">
            Talk to us or ask us anything.
          </p>
          <p className="flex text-[14.88px] items-center gap-2">
            <img src={footerlink} alt="footer-arrow" /> <span>Contact Us</span>
          </p>
          <p className="flex text-[14.88px] items-center gap-2">
            <img src={footerlink} alt="footer-arrow" />{" "}
            <span>Cookie Policy</span>
          </p>
          <p className="flex text-[14.88px] items-center gap-2">
            <img src={footerlink} alt="footer-arrow" />{" "}
            <span>Private Notice</span>
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex gap-8">
          <div>
            <p className="flex text-[14.88px] items-center gap-2">
              <img src={footerlink} alt="footer-arrow" /> <span>LinkedIn</span>
            </p>
            <p className="flex text-[14.88px] items-center gap-2">
              <img src={footerlink} alt="footer-arrow" /> <span>Twitter</span>
            </p>
            <p className="flex text-[14.88px] items-center gap-2">
              <img src={footerlink} alt="footer-arrow" /> <span>Instagram</span>
            </p>
            <p className="flex text-[14.88px] items-center gap-2">
              <img src={footerlink} alt="footer-arrow" /> <span>Youtube</span>
            </p>
            <p className="flex text-[14.88px] items-center gap-2">
              <img src={footerlink} alt="footer-arrow" /> <span>Archive</span>
            </p>
          </div>
          <div
            className="hidden md:flex flex-col gap-1  items-center  cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src={backToTop}
              className=" p-2 back-to-top"
              alt="back-to-top"
            />
            <p className="text-[14.5px] text-black">Back to top</p>
          </div>
        </div>
      </div>
      <div className="px-8 sm:px-0 pb-[3rem] flex  w-full max-w-[1140px] llg:w-[90%] mx-auto ">
        <img src={footerLogo} className="w-full" alt="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
