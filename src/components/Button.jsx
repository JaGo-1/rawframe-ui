/**
 * Styled button component.
 *
 * The roll animation is achieved by duplicating the title text and using CSS transforms (translate/skew)
 * to swap the two elements on hover.
 *
 * @param {object} props
 * @param {string} props.id - HTML id attribute for the button.
 * @param {string} props.title - The text displayed on the button.
 * @param {React.ReactNode} [props.rightIcon] - Optional icon to display next to the title.
 * @param {string} [props.containerClass] - Additional Tailwind classes for button styling (e.g., color, padding).
 */
const Button = ({ id, title, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-5 py-2 border-2  border-white-regular ${containerClass}`}
    >
      {/* Wrapper to control text overflow and isolation */}
      <span className="relative inline-flex overflow-hidden text-xs tracking-widest uppercase">
        {/* Visible Text (Slides Out on hover) */}
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>

        {/* Hidden Text (Slides In on hover) */}
        {/* Initial position is far below and skewed. On hover, it snaps to visible (translate-y-0, skew-y-0). */}
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
