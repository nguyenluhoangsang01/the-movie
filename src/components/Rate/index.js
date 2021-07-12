import React, { useState } from "react";

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <p>Rate Movie</p>
      <input
        type="range"
        name="rate"
        id="rate"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}
      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
    </div>
  );
};

export default Rate;
