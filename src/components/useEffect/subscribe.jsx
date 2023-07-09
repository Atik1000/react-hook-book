import React, { useEffect, useState } from 'react';

const TimerComponent: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
};

export default TimerComponent;
