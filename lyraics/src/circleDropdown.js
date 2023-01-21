import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



function CircleDropdown() {
    const options = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Dutch", "Russian", "Chinese", "Japanese", "Korean", "Arabic", "Hindi", "Bengali", "Punjabi", "Urdu", "Indonesian", "Malay", "Tagalog", "Thai", "Vietnamese"];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="circle">
            <select value={selectedOption} onChange={handleChange} onClick={handleClick}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isVisible && <FontAwesomeIcon icon={faChevronDown} className="caret-icon" />}
        </div>
    );
}

export default CircleDropdown;
