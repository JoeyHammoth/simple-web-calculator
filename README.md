# Simple Web Calculator

A simple, elegant, and beautiful web calculator built with HTML, CSS, and JavaScript. This project demonstrates basic arithmetic operations and interactive UI design using modern web technologies. The final product can be found [here](https://joeyhammoth.github.io/simple-web-calculator/).

---

## Overview

The Simple Web Calculator is a lightweight application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. Designed with a clean and minimalistic interface, the calculator is perfect for learning and demonstrating the fundamentals of DOM manipulation, event handling, and responsive design using a CSS Grid layout.

---

## Features

- **Basic Operations:**  
  Perform addition, subtraction, multiplication, and division with ease.

- **Interactive UI:**  
  User-friendly design with clickable buttons and a dynamic display.

- **Debug Mode:**  
  Toggle debug mode to view internal calculation states (current number, accumulated result, and operation code).

- **Grid Layout:**  
  Utilizes CSS Grid to neatly arrange buttons and display elements.

- **Pure Web Technologies:**  
  Built entirely with vanilla HTML, CSS, and JavaScript without any external dependencies.

---

## Installation

To get started with the Simple Web Calculator locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/JoeyHammoth/simple-web-calculator.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd simple-web-calculator
   ```

3. **Open in Browser:**

   Simply open the `index.html` file in your web browser (e.g., by double-clicking the file or using "Open with" in your browser).

---

## Usage

Once the project is open in your browser, you can immediately start using the calculator:

- **Entering Numbers:**  
  Click the numeric buttons (0-9) to input numbers.

- **Performing Operations:**  
  Use the operator buttons (+, -, ×, ÷) to perform calculations. Press the equals (=) button to compute the result.

- **Clearing and Editing:**  
  - **Clear (C):** Resets the calculator.
  - **Backspace (←):** Removes the last digit entered.

- **Debug Mode:**  
  Toggle the debug mode checkbox to display internal values such as the current number, result, and operation code.

---

## Code Structure

The project consists of three main files:

- **index.html:**  
  Provides the HTML structure of the calculator, including the display, buttons, and debug panel.  
  

- **style.css:**  
  Contains the CSS styles that create a visually appealing layout using CSS Grid, along with hover and active effects for the buttons.  
  

- **function.js:**  
  Implements the core calculator logic. This includes handling button events, executing arithmetic operations, and updating the display and debug information.  
  

---

## Debug Mode

A unique feature of this calculator is its **Debug Mode**. When enabled, it displays:

- **num:** The current number being entered.
- **result:** The cumulative result of previous operations.
- **operation:** The code corresponding to the last operation performed (0: none, 1: add, 2: subtract, 3: multiply, 4: divide, 5: equal).

This feature is especially useful for developers who wish to understand or troubleshoot the internal workings of the calculator.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full license details.

---

## Credits

- **Developer:** JoeyHammoth
- Special thanks to the open-source community for their inspiration and support.

---

Feel free to fork, contribute, or provide feedback. Enjoy calculating!
