import React, { useState } from "react";

const CountingCharacters2 = () => {
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setOutput(e.target.value);
    setCount(e.target.value.length);
  };
  return (
    <div>
      <label htmlFor="">Enter chracters: </label>
      <input type="text" onChange={handleChange} />
      <p>
        {output} : {count}
      </p>
    </div>
  );
};

export default CountingCharacters2;
