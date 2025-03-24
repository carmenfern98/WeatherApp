import React, { useState } from "react";

const ToggleButton = () => {
    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggled);
    };
    return (
        <button onClick={handleToggle}>
            {isToggled ? '°C' : '°F'}
        </button>
    )
};

export default ToggleButton;