import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register the ScrollTrigger plugin with GSAP for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * About section component. Features a large heading followed by a scroll-triggered
 * image animation that pins the section while expanding an image clip-path effect.
 */
const About = () => {
  useGSAP(() => {
    // 1. Define the GSAP timeline specifically for the clipping effect
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // 2. Define the animation step: Expand the clipping mask
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      // Note: The actual clipping effect (e.g., using clip-path or scale) is determined
      // by the CSS rules defined for the class `mask-clip-path`.
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* Introduction Text Block */}
      <div className="relative mb-8 mt-36 flex flex-col gap-5 px-5 md:px-10">
        <p className="mt-5 text-3xl md:text-4xl xl:text-6xl max-w-7xl font-circular-web uppercase">
          Powered by modern aesthetics and precise direction, we create visual
          systems for fashion brands leading the future of style.
        </p>
      </div>

      {/* Scroll-Triggered Animation Section (The Trigger Element) */}
      <div className="min-h-screen" id="clip">
        {/* Element that is being animated (expanding clip-path) */}
        <div className="mask-clip-path about-image relative">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
          {/* Photo Credit Overlay */}
          <div className="absolute bottom-0 left-0 text-xs opacity-60 font-light bg-black p-2 text-white-regular">
            <span>Foto de </span>
            <a
              href="https://unsplash.com/es/@alichoubin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition-colors"
            >
              Ali Choubin
            </a>
            <span> en </span>
            <a
              href="https://unsplash.com/es/fotos/un-hombre-parado-en-un-estacionamiento-sosteniendo-una-patineta-AiB3Ov4RxyY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition-colors"
            >
              Unsplash
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
