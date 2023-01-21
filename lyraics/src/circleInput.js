import React, { useState } from "react";

function CircleInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    let value = event.target.value;
    // Regex for special characters
    const pattern = /[^a-zA-Z0-9 ]/g;
    if (pattern.test(value)) {
      // input contains special characters
      value = value.replace(pattern, "");
    }
    setInputValue(value);
  };

  return (
    <div className="circle">
      <input
        autoFocus={true}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default CircleInput;
