import React, { useState, useEffect, useRef } from "react";

const App = () => {
    const [name, setName] = useState("");
    const prevName = useRef("");

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <React.Fragment>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
            />
            <div>
                My name is {name + "1"} it used to be {prevName.current + "1"}
            </div>
        </React.Fragment>
    );
};

export default App;
