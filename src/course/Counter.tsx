import { useState } from 'react';

// define TypeScript interfaces for the ButtonProps and ResultProps to specify the expected prop types for the Button and Result components
interface ButtonProps {
  onClickFunction: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClickFunction }) => {
  return <button onClick={onClickFunction}>+1</button>;
};

interface ResultProps {
  value: number;
}

const Result: React.FC<ResultProps> = ({ value }) => {
  return <div>Result: {value}</div>;
};

// add type annotations for the counter state variable and the incrementCounter function
const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  // previousCounter is just a variable name used within the scope of this callback function to refer to the previous value of the counter state variable before it gets incremented. it's not a predefined variable; rather, it's a parameter name chosen by the developer writing the code to make the code more readable and self-explanatory. You could name it something else if you prefer, like prevValue, and the code would still work the same way
  const incrementCounter = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  return (
    <div>
      <Button onClickFunction={incrementCounter} />
      <Result value={counter} />
    </div>
  );
};

export default Counter;

// Container (Smart) Components
// Are concerned with how things work
// Provide the data and behavior to presentational or other container components
// Loads and modifies data via calls to an API
// May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles
// Also know as container components or controller components
// Presentation Components
// Are concerned with how things look
// Receive data and callbacks exclusively via props
// Don’t specify how the data is loaded or changed
// Also know as pure components or dumb components

// Thinking in React
// Here are some steps you might find useful as you learn to Think in React

// Break the UI Into a Component Hierarchy

// Build a Static Version in React

// No State or Props
// Identify The Minimal (but complete) Representation Of UI State

// Identify Where Your State Should Live

// For each piece of state in your application:

// Identify every component that renders something based on that state.
// Find a common owner component (a single component above all the components that need the state in the hierarchy).
// Either the common owner or another component higher up in the hierarchy should own the state.
// If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
// Add Inverse Data Flow

// Rendering the screen initially involves props and state flowing down the hierarchy
// Inverse data flow refers to components deep in the hierarchy responding to user actions (clicking a button, hovering, typing) and then updating the state in the higher container component(s)
