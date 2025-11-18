import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

/**
 * Main Hero section component for the landing page.
 * Displays the primary brand message, a background image, and a call-to-action (CTA).
 */
const Hero = () => {
  return (
    // Main container set to full viewport height/width and hides horizontal overflow.
    <div id="#" className="relative h-dvh w-screen overflow-x-hidden">
      {/* Background container: Sets the image, cover properties, and stack order. */}
      <div className="relative z-10 h-dvh w-screen overflow-hidden bg-[url(/img/hero.webp)] bg-cover bg-center bg-no-repeat">
        {/* Content Wrapper */}
        <div className="z-40 size-full">
          {/* Top-aligned brand motto/keywords */}
          <div className="text-white-regular text-[0.8rem] lg:text-sm absolute top-30 flex justify-between w-screen px-10 gap-5 flex-wrap">
            <p>UNFILTERED</p>
            <p>UNPOLISHED</p>
            <p>UNFORGIVING</p>
          </div>

          {/* Central content: Main Brand Title */}
          <div className="h-full flex items-center justify-center">
            <h1 className="hero-heading text-white-regular">Rawframe</h1>
          </div>

          {/* Bottom content: Description and Call-to-Action (CTA) button */}
          <div className="flex flex-wrap justify-center lg:justify-items-start items-start gap-10 absolute bottom-10 px-10">
            <p className="mb-5 max-w-lg uppercase text-white-regular text-center md:text-start">
              We craft bold fashion identities for brands that refuse to blend
              in.
            </p>
            {/* Reusable Button component acting as the primary CTA */}
            <Button
              id="watch-trailer"
              title="Shop"
              leftIcon={<TiLocationArrow />}
              containerClass="text-white-regular  flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
