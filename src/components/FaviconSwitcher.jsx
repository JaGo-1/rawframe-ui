import { useEffect } from "react";

/**
 * Utility component that dynamically changes the favicon based on the user's
 * system-wide color scheme preference (light or dark mode).
 * This component renders nothing but executes logic on mount.
 */
const FaviconSwitcher = () => {
  useEffect(() => {
    // 1. Check for the user's preferred color scheme using the standard Media Query API.
    const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const icon = document.getElementById("icon");

    /**
     * Updates the favicon's href attribute based on the provided media query event.
     * @param {MediaQueryListEvent | MediaQueryList} e - The media query state object.
     */
    const updateFavicon = (e) => {
      if (!icon) return;

      // 'e.matches' is true if the system is currently set to dark mode.
      icon.href = e.matches ? "/logo-light.svg" : "/logo-dark.svg";
    };

    updateFavicon(darkScheme);

    // Add an event listener to update the favicon if the user changes their
    // system theme preference while the application is running.
    darkScheme.addEventListener("change", updateFavicon);

    // Cleanup function: Removes the event listener when the component unmounts
    // to prevent memory leaks and unnecessary execution.
    return () => {
      darkScheme.removeEventListener("change", updateFavicon);
    };
  }, []);

  return null;
};

export default FaviconSwitcher;
