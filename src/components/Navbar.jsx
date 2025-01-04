import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];
const navItems1 = ["Follow us on", "d", "y", "i"];
const navItems2 = ["Home", "Tournaments", "Players", "Contact"];

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center p-6 justify-evenly gap-10">
          <div className="flex justify-center items-center gap-4">
            <Button
              id=""
              title="Follow us"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300/75 flex-center gap-1"
            />
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" nav-hover-btn text-white transition-colors duration-500 ease-in-out hover:text-white scale-125">
                {link.icon}
              </a>
            ))}
          </div>
          <div className="flex-1 justify-items-center">
            <img
              src="/img/logo.png"
              alt="logo"
              className="absolute-center text-center scale-100"
            />
          </div>
          <div className="hidden md:block justify-end p-4">
            {navItems2.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-hover-btn after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:font-zentry">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
