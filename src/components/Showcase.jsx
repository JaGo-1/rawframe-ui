import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Credit } from "../utils/credits";

/**
 * Wrapper component that applies a 3D mouse-tracking tilt effect to its children.
 * It manipulates the CSS `transform` property based on the cursor's relative position.
 */
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    // Calculate cursor position relative to the element (0 to 1)
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    // Calculate tilt degrees.
    // Subtracting 0.5 centers the pivot point.
    // Multiplying by 5 determines the maximum rotation intensity.
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    // Apply 3D transform. 'scale3d' (.95) adds depth by slightly shrinking the element.
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    if (!itemRef.current) return;

    // Add a smooth transition when resetting the position
    itemRef.current.style.transition = "transform 0.3s ease-in-out";
    setTransformStyle(
      "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );

    // Clean up the transition property after the animation finishes
    // so it doesn't interfere with subsequent mouse movements.
    setTimeout(() => {
      if (itemRef.current) itemRef.current.style.transition = "";
    }, 500);
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

/**
 * Reusable card component for the grid.
 * Handles background imagery, text overlay, and optional photo credits.
 *
 * @param {object} props
 * @param {boolean} props.lightBg - If true, switches text color to dark for contrast.
 */
const BentoCard = ({ src, title, description, lightBg, credit }) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover"
        alt={title}
      />
      <div
        className={`relative z-10 flex size-full flex-col justify-between p-5 ${
          lightBg ? "text-black" : "text-white-medium"
        }`}
      >
        <div>
          <h1 className="bento-title">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
          {/* Conditional rendering for photo attribution */}
          {credit && (
            <div className="absolute bottom-0 left-0 text-xs opacity-60 font-light bg-black p-2 text-white-regular">
              <span>Foto de </span>
              <a
                href={credit.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition-colors"
              >
                {credit.author}
              </a>
              <span> en </span>
              <a
                href={credit.platformUrl || "https://unsplash.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition-colors"
              >
                {credit.platform || "Unsplash"}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Main section component displaying the "Bento" style grid layout.
 */
const Showcase = () => {
  return (
    <section className="bg-black pb-52">
      <div className="mx-auto px-3 md:px-10">
        {/* Header Text Section */}
        <div className="py-32">
          <p className="text-lg text-white-soft uppercase">
            Built for the Streets
          </p>

          <p className="max-w-lg font-circular-web uppercase text-lg text-white-soft opacity-30">
            We design gear inspired by concrete, noise, and night energy.
            Crafted for movement. Engineered for expression. Streetwear that
            lives outside the lines.
          </p>
        </div>

        {/* Primary Feature Block (Full Width) */}
        <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="img/grid-3.webp"
            title={<>RADX</>}
            description="A raw expression of our agency’s identity — bold strokes, sharp rhythm, and visual noise crafted to disrupt the ordinary."
            credit={Credit("Jason Dent", "jdent")}
          />
        </BentoTilt>

        {/* Grid Layout: 2 Columns, 3 Rows height equivalent */}
        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          {/* Tall Item (Spans 2 rows on desktop) */}
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="img/grid-2.webp"
              title={<>SYNCRO</>}
              description="Oversized essentials built for flow and movement. A clean, relaxed fit that keeps the attitude sharp without trying too hard."
              credit={Credit("Ali Ghafouri", "ghafouripic")}
            />
          </BentoTilt>

          {/* Offset Item (Right Column) */}
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="img/grid-4.webp"
              title={<>VANTIC</>}
              description="A statement hoodie designed for everyday wear, blending comfort with a street-bred edge that stands out in any setting."
              credit={Credit("Josh Kahen", "joshkahen")}
            />
          </BentoTilt>

          {/* Offset Item (Left Column) */}
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="img/grid-1.webp"
              title={<>AZRIN</>}
              description="Rooted in contemporary street culture, AZRIN represents a stripped-back aesthetic focused on quality, intention, and attitude."
              credit={Credit("Dawid Zawiła", "davealmine")}
            />
          </BentoTilt>

          {/* "Coming Soon" Placeholder (Non-image card) */}
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-yellow-regular p-5">
              <h1 className="bento-title max-w-64 text-black">
                New drops loading…
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          {/* Final Grid Item */}
          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="img/grid-5.webp"
              title={<>RAWLIN</>}
              description="A refined take on casual urban style — balanced, effortless, and built for those who move between spaces with confidence."
              lightBg
              credit={Credit("Jezael Melgoza", "jezar")}
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
