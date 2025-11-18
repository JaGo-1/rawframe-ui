/**
 * Utility function to generate a standardized credit/attribution object
 * for images sourced from Unsplash or similar platforms.
 *
 * This structure is used by UI components (BentoCard) to properly
 * display links back to the author and the source platform.
 *
 * @param {string} author - The name of the original photo author (e.g., "Jason Dent").
 * @param {string} handle - The author's unique username or handle (e.g., "jdent").
 * @returns {{
 * author: string,
 * authorUrl: string,
 * platform: string,
 * platformUrl: string
 * }} The structured credit object.
 */
const Credit = (author, handle) => ({
  author: author,
  // Generates the required referral link to the author's profile
  authorUrl: `https://unsplash.com/@${handle}?utm_source=mi_app&utm_medium=referral`,
  platform: "Unsplash",
  // Generates the required referral link to the platform
  platformUrl: "https://unsplash.com/?utm_source=mi_app&utm_medium=referral",
});

export { Credit };
