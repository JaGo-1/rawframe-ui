/**
 * Footer component containing navigation, legal links, social media handles,
 * contact information, a large branding element, and copyright.
 */
const Footer = () => {
  // Define navigation links
  const navigation = [
    { href: "#shop", label: "Shop" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  // Define legal/policy links
  const legal = [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
    { href: "#cookies", label: "Cookie Settings" },
  ];

  // Define external social media links
  const social = [
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://behance.net", label: "Behance" },
    { href: "https://dribbble.com", label: "Dribbble" },
  ];

  /**
   * Reusable component for rendering a single column of links in the footer.
   *
   * @param {object} props
   * @param {string} props.title - The heading for the column (e.g., "Navigation").
   * @param {Array<{href: string, label: string}>} props.items - Array of link objects.
   */
  const FooterColumn = ({ title, items }) => (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">{title}</h3>
      <ul className="space-y-1 text-sm">
        {items.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              className="hover:underline"
              // Open external links in a new tab
              target={href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-screen bg-white-medium py-10 lg:pt-20 text-black px-5 lg:px-10">
      {/* Top section: Grid layout for link columns and contact info */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <FooterColumn title="Navigation" items={navigation} />
        <FooterColumn title="Legal" items={legal} />
        <FooterColumn title="Social" items={social} />

        {/* Dedicated Contact Information Column */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="text-sm">Let’s make something loud.</p>
          <p className="text-sm font-mono">hello@rawframe.agency</p>
          <p className="text-sm">Based everywhere. Creating always.</p>
        </div>
      </div>

      {/* Large Brand Callout Section */}
      <div className="relative pt-24">
        <div className="flex flex-col">
          <p className="font-general text-[1rem] md:text-xl uppercase">
            Let’s Make Something Loud
          </p>

          {/* Large, scalable brand name text */}
          <p
            className="
            w-full uppercase font-RobotechGP 
            text-7xl 3xs:text-8xl 2xs:text-[8rem] xs:text-9xl 
            sm:text-[9rem] md:text-[11rem] lg:text-[15rem] 
            xl:text-[19rem] 2xl:text-[25rem]
            leading-[0.85] lg:leading-none
            -mt-2 lg:-mt-12 xl:-mt-20
          "
          >
            Rawframe
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-5 border-t border-black pt-6 text-xs text-center">
        © {new Date().getFullYear()} RAWFRAME Agency — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
