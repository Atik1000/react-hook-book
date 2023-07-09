# React Hooks 


## UseState

### Here's an example of how you can use useState in a TypeScript component:



import React, { useState } from 'react';

const MyComponent: React.FC = () => {

  const [count, setCount] = useState<number>(0);


  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;


#### In this example, we're using useState to define a state variable called count and its initial value is 0. The useState hook returns an array with two elements: the current value of the state variable (count) and a function to update the state variable (setCount).

To update the state variable, we define an increment function that calls setCount with the new value (count + 1).

In the JSX part of the component, we display the value of count and render a button that triggers the increment function when clicked.

Note that we explicitly provide the type of the state variable (number in this case) as a generic parameter to useState. This helps TypeScript infer the type correctly and provides type safety during development.

Remember to import React and useState from the react package in order to use the useState hook.