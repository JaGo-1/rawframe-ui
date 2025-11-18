# Rawframe | Modern Digital Agency Landing Page
A highly interactive and responsive landing page template designed for a modern creative agency or high-end apparel brand. This project showcases advanced UI/UX techniques, focusing on immersive scroll-based and mouse-tracking animations.

## Live Demo
https://rawframe-ui.vercel.app/

## Tech Stack

This project leverages a modern front-end stack to deliver high performance and complex visual effects.

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React** (Hooks/Functional Components) | Core application structure. |
| **Styling** | **Tailwind CSS** (Custom Utilities & Theme) | Utility-first CSS framework for rapid, responsive styling. |
| **Animation** | **GSAP** (GreenSock) | High-performance animation library. |
| **Scroll Logic** | **ScrollTrigger** (GSAP Plugin) | Enables pinning and scroll-synced animations. |
| **Hooks** | **`react-use`** | Utility hooks (e.g., `useWindowScroll` for Navbar logic). |

---

## Key Features

The following features demonstrate the project's technical complexity and interactive design:

* ### Scroll-Aware Navigation (`Navbar`)
    The main navigation bar dynamically **hides when scrolling down** and **reappears when scrolling up** using the `useWindowScroll` hook and GSAP animations, enhancing screen real estate.
* ### Bento Grid with 3D Tilt Effect (`BentoTilt`)
    Grid items respond to the user's cursor position by applying a subtle **3D perspective tilt and scale** using CSS transforms, adding depth and interactivity to the showcase section.
* ### Advanced Text Animation (`Button`)
    Custom button component featuring a **text roll/slide transition** on hover, achieved by overlaying two text elements and manipulating their `translateY` and `skewY` CSS properties.
* ### Pinned Scroll Animation (`About`)
    Uses **GSAP's ScrollTrigger** to **pin** the section and drive a timeline that expands a masked or clipped element (e.g., an image) across the viewport.
* ### Dynamic Favicon (`FaviconSwitcher`)
    A utility component that detects the user's system preference using the `(prefers-color-scheme: dark)` media query and automatically switches the favicon icon for better visibility in light/dark browser tabs.

---

## Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JaGo-1/rawframe-ui.git rawframe
    cd rawframe
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173`.

---

## Inspiration and Credit

This project, **Rawframe**, is a personal adaptation and implementation of the award-winning website structure developed by **Adrian Hajdin (JavaScript Mastery)**. I used the original code as a foundation and learning resource to implement custom components and animations.

I acknowledge and thank the original author for the foundational project:

* **Original Project:** [Award-Winning Website](https://github.com/adrianhajdin/award-winning-website.git)
* **Original Author:** Adrian Hajdin / JavaScript Mastery
