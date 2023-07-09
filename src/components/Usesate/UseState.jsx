import React, { useState } from 'react';

const MyComponent: React.FC = () => {

    // Define a state variable and its initial value
    const [count, setCount] = useState(0);

    // Update the state variable
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
