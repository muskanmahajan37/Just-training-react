import React, { useState, useEffect } from "react";
import Counter from "./components/counter/Counter";

const App = () => {
    const [isValid, setIsValid] = useState(true);

    setTimeout(() => {
        setIsValid(false)
    }, 5000)

    return (
        <React.Fragment>
            {isValid && <Counter />}
        </React.Fragment>
    );
};

export default App;
