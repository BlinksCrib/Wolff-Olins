import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
// import menuOpen from "../../assets/menuOpen.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [bodyStyle, setBodyStyle] = useState(false);

  const dynamicNav = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const openNav = () => {
    setBodyStyle(!bodyStyle);
    const navbar = document.querySelector(".olins-nav");
    if (navbar) {
      navbar.classList.toggle("opened");
    }
  };

  window.addEventListener("scroll", dynamicNav);

  useEffect(() => {
    const navbar = document.querySelector(".olins-nav");
    const navUnderlay = document.getElementById("nav-underlay");
    if (navbar && navUnderlay) {
      if (navbar.classList.contains("opened")) {
        document.body.style.overflow = "hidden";
        navUnderlay.style.display = "block";
      } else {
        document.body.style.overflow = "auto";
        navUnderlay.style.display = "none";
      }
    }
  }, [bodyStyle]);

  const navClass = (navbar: any) => {
    if (navbar) {
      return ` olins-nav w-[90%] inset-x-0 overflow-hidden rounded-[25px] fixed z-[999] top-[15px] bg-[rgb(255,255,255,0.9)] px-3 py-[12px] max-w-[860px] mx-auto flex justify-between transition-all duration-[300ms]`;
    } else {
      return ` my-[35px] w-full overflow-hidden relative h-[40px] z-[999] mx-auto olins-nav flex justify-between rounded-[25px] px-[16px] items-start transition-all duration-[300ms]`;
    }
  };

  return (
    <>
      <nav className="h-[90px] relative flex bg-white w-[92%] mx-auto">
        <div className={navClass(navbar)}>
          <div>
            <img
              src={logo}
              alt="wolffolins-logo"
              className="h-[18px] w-[100px] md:h-auto md:w-auto"
            />
          </div>
          <div className="right-side flex items-center gap-3 md:gap-8">
            <div onClick={openNav} className="md:hidden cursor-pointer">
              {/* <img src={menuOpen} alt="menu-open" /> */}
            </div>
            <ul className="nav-list flex gap-6 items-center font-medium text-[18px] text-textColor opacity-[0.8]">
              <li className="cursor-pointer w-full">Work</li>
              <li className="cursor-pointer w-full">About</li>
              <li className="cursor-pointer w-full">News</li>
              <li className="cursor-pointer w-full">Contact</li>
            </ul>
            <div className="cursor-pointer">
              <img src={search} alt="search-icon" />
            </div>
          </div>
        </div>
      </nav>
      <div id="nav-underlay"></div>
    </>
  );
};

export default Navbar;
