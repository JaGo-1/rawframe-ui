import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { GrClose, GrMenu } from "react-icons/gr";

const navItems = ["Shop", "About", "Contact"];

/**
 * Responsive Navbar component featuring scroll-based visibility (hides on scroll down, shows on scroll up)
 * and animated mobile menu opening/closing using GSAP.
 */
const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Refs for direct DOM manipulation required by GSAP and class toggling
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  // Retrieves the current Y scroll position using the 'react-use' hook
  const { y: currentScrollY } = useWindowScroll();

  /**
   * Effect to manage the navigation bar's visibility based on scroll direction.
   * Runs whenever the scroll position (currentScrollY) changes.
   */
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

    // Update the last recorded scroll position for the next comparison
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  /**
   * Effect to animate the main navigation bar's slide-in/slide-out transition.
   * Uses GSAP for smooth vertical (Y) movement and opacity changes.
   */
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100, // Move to 0 (visible) or -100px (hidden above viewport)
      opacity: isNavVisible ? 1 : 0,
      duration: 0.05, // Quick transition for responsive feel
    });
  }, [isNavVisible]);

  /**
   * Effect to animate the mobile menu's open and close state.
   * Uses GSAP to slide the menu into and out of the viewport.
   */
  useEffect(() => {
    if (mobileOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [mobileOpen]);

  return (
    <>
      {/* Fixed Navbar Container: Handles the scroll-based visibility 
        and accepts the GSAP transform style via ref.
      */}
      <div
        ref={navContainerRef}
        className="fixed top-0 left-0 right-0 z-50 h-16 border-none transition-all duration-700 text-white-regular"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="mx-auto w-full  flex items-center justify-between px-5 lg:px-10">
            <div className="flex items-center gap-7">
              <p className="font-RobotechGP text-3xl">Rawframe</p>
            </div>

            <div className="flex h-full items-center">
              {/* Mobile Menu Button (visible on small screens) */}
              <div className="md:hidden">
                <button onClick={() => setMobileOpen(true)}>
                  <GrMenu size={30} />
                </button>
              </div>

              {/* Desktop Navigation Links (hidden on small screens) */}
              <div className="hidden md:block">
                {navItems.map((item) => (
                  <a
                    key={item}
                    className="nav-hover-btn"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Container: Full-screen menu that slides in from the right.
        The 'translate-x-full' class sets the initial hidden position, overridden by GSAP. 
      */}
      <div
        ref={mobileMenuRef}
        className="fixed right-0 top-0 z-60 h-full w-full flex flex-col justify-between bg-black p-10 text-white translate-x-full"
      >
        <button
          className="text-left uppercase"
          onClick={() => setMobileOpen(false)}
        >
          <GrClose size={30} />
        </button>
        <div className="flex flex-col gap-5 text-4xl uppercase">
          {navItems.map((item) => (
            // Close the menu when a link is clicked
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="hover:opacity-60 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="mt-5 border-t border-white-regular pt-5">
          <p className="font-RobotechGP text-4xl">rawframe</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
