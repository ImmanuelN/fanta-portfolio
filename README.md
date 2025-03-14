# Fanta Portfolio

[Live Demo](https://fanta-portfolio.netlify.app)

## Description
Fanta Portfolio is a colorful and engaging web application designed to showcase Fanta’s iconic flavors through an interactive carousel. Featuring a dynamic `FlavoursSection` with a sliding carousel and playful bouncing emojis, this project highlights modern React development with Framer Motion animations, offering a fun and visually appealing user experience.

## Features
- **Flavor Carousel**: A sliding carousel displaying Fanta flavors (Orange, Grape, Pineapple) with smooth transitions and auto-advance every 6 seconds.
- **Bouncing Emojis**: Randomly moving emojis that bounce off the section’s borders, adding a lively background effect.
- **Dynamic Styling**: Gradient text headers and color-changing navigation buttons synced with the current flavor.
- **Interactive Elements**: Hover effects on buttons and clickable navigation for the carousel.
- **Responsive Design**: Optimized layout for various screen sizes.

## Technologies Used
- **React**: Component-based UI framework
- **TypeScript**: Type safety and improved code quality
- **Framer Motion**: Animation library for smooth transitions and emoji movement
- **Lucide React**: Icon library for navigation arrows
- **CSS**: Inline styles for custom layouts and effects
- **Vite**: Build tool for fast development and production (assumed, adjust if different)

## Installation
To set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/fanta-portfolio.git
Navigate to the project directory:

2. **Dependencies**
    ```bash
    cd fanta-portfolio
Install dependencies:

3. **Node and Npm**
    ```bash
    npm install
Ensure you have Node.js and npm installed.
Start the development server:

    npm run dev

Open http://localhost:5173 (or your configured port) in your browser.

4. **Project Structure**

fanta-portfolio/

├── src/

│   ├── components/

│   │   ├── FlavoursSection.tsx   # Main section with carousel and emojis

│   │   └── FlavourSlider.tsx     # Carousel component

│   ├── images/                   # PNG assets for cans and fruits

│   ├── styles/
│   │   └── themes.ts             # Theme configuration (colors, fonts)

│   └── App.tsx                   # Main app entry point

├── public/                       # Static assets

├── package.json                  # Dependencies and scripts

└── README.md                     # This file
Usage

Navigate the Carousel: Use the left and right arrow buttons to cycle through flavors manually, or let it auto-advance every 6 seconds.
Enjoy the Emojis: Watch the background emojis bounce around the FlavoursSection in random directions.
Interact with Buttons: Hover over the "View Our Products" button to see its animation.

Dependencies
framer-motion: npm install framer-motion
lucide-react: npm install lucide-react
Known Issues
Emojis may occasionally overlap with content on very small screens; consider adjusting numberOfEmojis or fontSize for responsiveness.
Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

License
This project is licensed under the MIT License.

Contact
For questions or feedback, reach out at [nakaleimmanuel6@gmail.com] or visit github.com/ImmanuelN.
