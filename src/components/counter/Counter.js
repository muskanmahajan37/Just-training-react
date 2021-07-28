import React, { useState, useEffect } from "react";

const Counter = function () {
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = counter;

        return () => {
            document.title = " react app";
        };
    }, [counter]);

    return (
        <React.Fragment>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increse</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        </React.Fragment>
    );
};

export default Counter;
