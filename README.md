# Tic Tac Toe Game

This is a Tic Tac Toe game built with Next.js, React, and TypeScript. The application supports a player versus AI mode.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/joshopro/tic-tac-toe
   cd tic-tac-toe
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

To run the application locally, use the following command:
```sh
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application.


## Running Tests
To run the unit tests, use the following command:
```sh
npm test
```

## Features
- 3x3 Tic Tac Toe grid.
- Players can click on a cell to mark it with "X" or "O".
- The game detects a win or a draw and displays an appropriate message.
- A "Reset" button to start a new game.
- Includes animations for better user experience.

## Technologies Used
- Next.js
- React
- TypeScript
- CSS Modules
- Jest
- React Testing Library

## Approach and Design Decisions
- **State Management:** Used React's `useState` hook for managing the game state.
- **Styling:** Used CSS Modules for styling the components to ensure scoped and maintainable CSS.
- **Testing:** Implemented unit tests using Jest and React Testing Library to cover rendering, game logic, and interaction scenarios.
- **Animations:** Added basic animations for cell clicks to enhance user experience.
