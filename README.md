I'm building Puzzles and Games as a way to hone my skills in React. So far (as of 3/19/22), I have Master Mind up and working, though I think some refactoring is in order. This is definitely a first draft! But, this is also my very first go at a React project, so of course, there is much room for improvement. Specifically, I intend to become proficient in using Hooks and better at organizing my components. My organization of components in Master Mind is not optimal, though it did provide me with great challenges is passing state between components.

How to view this project:  https://nikkigraybeal.github.io/puzzles_and_games/
link to Figma wireframes: https://www.figma.com/file/4xU7izFWLblrvyyzwYzuVv/Untitled?node-id=0%3A1

How it works: The user chooses a game by clicking on a title in the sidebar menu. Each game has a basic template to allow for easy navigation. Instructions for game play can be accessed by clicking on the "instructions" link below the game title. 

Master Mind: This is based on the classic board game of the same name. Drag and drop functionality allows the user to place colored "pegs" from the "color bank" into the game play area below to guess the "secret code" (generated upon page load or "new game" button being clicked). The user can click the "check" button at anytime to receive feedback about their guess. The feedback area consists of a small 4-quadrant grid with small circles in each quadrant. The color of the circles is updated when the "check" button is clicked to give the user feedback about their guess. If a circle is black, it means a peg is both the correct color and in the correct place, if a circle is white, it means a peg is the correct color but not in the correct place. When all feedback circles are black, the user has broken the secret code and won the game.


What I've learned: 
  - use state to conditionally render components
  - hover won't work if invisible divs are covering them up! use z-index to lift them to the top of the UI
  - overflow: auto; can fix a div that is not filling the entire height. There are potential probs with this that I don't know about yet though. Somehow, using this property on my game container made it fill the space AND caused the sidebar to do the same. I don't understand why yet!
  -how to deploy a React app to Github Pages

Next Steps: 
3/19/22
-I need to consider functionality more thoroughly before I jump in and start creating components. Master Mind helped me to understand the relationships between components and state a bit better, so I will definitely spend more time planning to accomodate those relationships on my next game. 
-Hooks! I want to understand when and how to use useEffect, useRef, useReducer and useContext and hope to work them all into Slide Puzzle, if it makes sense. 
-improve UI. My UI design is AWFUL! I have zero design talent. I will look for inspiration and try to copy what I find to make it look better.
  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
