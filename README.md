# MUI Color Augmentation Calculator

A simple web app to visualize and copy augmented color palettes from primary and secondary hex color inputs, powered by React and Material UI (MUI).

## Why is this tool useful?

This application provides a quick and visual way to understand how Material UI's color theming works. It's particularly helpful for:

* **Developers using MUI:** Easily see the `light` and `dark` variations that MUI generates from a base color, aiding in theme customization and ensuring consistent color palettes across your application.
* **Designers collaborating with developers:** Quickly test different primary and secondary color combinations and see the resulting augmented shades, facilitating better communication and design decisions.
* **Learning MUI theming:** A hands-on tool to experiment with color inputs and observe the output of MUI's color augmentation logic without needing to write extensive code.
* **Quick color code retrieval:** Easily copy the exact hex codes of the generated color swatches for direct use in your CSS or application code.

## Features

* Enter primary and secondary hex colors.
* See the generated main, light, and dark color variations.
* Displays the hex code for each color swatch.
* Click a swatch to copy its hex code to your clipboard.
* Responsive design for different screen sizes.

## Prerequisites

* [Node.js](https://nodejs.org/) (v16+)
* npm or yarn

## Installation

1.  **Clone (if applicable):**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the App

```bash
npm start
# or
yarn start
 ```
Open your browser to http://localhost:3000.
How to Use

1. Type hex color codes (e.g., #FF0000) into the "Primary Color" and "Secondary Color" fields.
2. View the "Main", "Light", and "Dark" color boxes with their hex codes.
3. Hover over a color box to see "Click to copy".
4. Click a color box to copy its hex code.

Dependencies

* react
* typescript
* @mui/material
* @emotion/react
* @emotion/styled

Contributing

Feel free to contribute by forking and submitting pull requests.
License

MIT License (if applicable)