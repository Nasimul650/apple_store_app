# Macbook - Apple Store

![License](https://img.shields.io/badge/license-MIT-green) ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![Language](https://img.shields.io/badge/language-JavaScript-yellow) ![Framework](https://img.shields.io/badge/framework-React-orange)

## ℹ️ Project Information

- **👤 Author:** Nasimul650
- **📦 Version:** 1.0.0
- **📄 License:** MIT
- **🌐 Website:** [https://apple-store-app.vercel.app/](https://apple-store-app.vercel.app/)
- **📂 Repository:** [https://github.com/Nasimul650/apple_store_app](https://github.com/Nasimul650/apple_store_app)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Installation](#installation)(#running-locally)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

---

## About

Apple Store App is a modern 3D product showcase inspired by Apple's official product pages.
It demonstrates interactive product storytelling using ThreeJS and GSAP, wrapped inside a clean and responsive ReactJS layout.
The UI focuses on premium visuals, scroll-based animations, and smooth transitions.

---

## Features

- 🌀 3D Product Model (ThreeJS) — Interactive model rotation & product sections.

- 🎞️ Scroll Animation (GSAP) — Smooth scroll-driven timeline animations.

- 📱 Fully Responsive — Optimized for mobile, tablet, and desktop.

- 🖼️ Apple-Style Layout — Minimal, premium, product-focused UI.

- ⚙️ Reusable Components — Clean architecture and well-structured code.

---

## Technologies/Tech Stack

- **Frontend:** React, React Hooks (useContext, custom hooks), ThreeJS 
- **Build tool:** Vite
- **Styling:** Tailwind CSS and GSAP
- **State / Storage:** Context API for state management

---

## Getting Started

### Installation

1. Clone the repo:

   1. git clone https://github.com/Nasimul650/apple_store_app.git

   2. cd apple_store_app
   3. npm install
   4. npm run dev
   5. Go to "http://localhost:5173" in your browser
   6. npm run dev

---

## Usage

1. Scroll through the page to view dynamic product animations.

2. Interact with the 3D model in supported sections.

3. Explore smooth transitions inspired by Apple-style design.

4. Observe scroll-triggered storytelling powered by GSAP.

---

## Project Structure

├── src
│   ├── components
│   ├── models
│   ├── sections
│   ├── utils
│   ├── App.jsx
│   └── main.jsx
├── public
├── package.json
└── README.md

- components/ → Reusable UI components

- models/ → ThreeJS models and loaders

- sections/ → Each scroll section of the page

- utils/ → Helper animation & scroll utilities

---

## Future Improvements

1. Add multiple product models

2. Add color customizer (like Apple’s product selector)

3. Add interactive product comparison section

4. Improve animation complexity with GSAP timelines

5. Add performance analytics and lazy-loading for models

---

## Contact

1. GitHub: Nasimul650

2. Repository: https://github.com/Nasimul650/apple_store_app

3. Live Demo: https://apple-store-app.vercel.app/
