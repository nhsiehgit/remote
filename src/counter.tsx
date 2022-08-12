import React from "react";
import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>iterate</button>
        </div>
    )

}

export default Counter;

