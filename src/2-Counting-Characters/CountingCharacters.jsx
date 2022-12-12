import React, { useState } from "react";

const CountingCharacters = () => {
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);
  const handleChange = (e) => {
    setResult(e.target.value);
    setCount(e.target.value.length);
    setDisplay(false);
  };
  return (
    <div>
      <h1>Counting Number of Characters</h1>
      <label htmlFor="in1">What is the input string? </label>
      <input type="text" id="in1" onChange={handleChange} />
      <br />
      <button type="submit" onClick={() => setDisplay(true)}>
        Submit
      </button>
      <br />
      {count === 0 ? (
        <p>You must enter a word</p>
      ) : display ? (
        <p>
          {result} has {count} chracters.
        </p>
      ) : null}
    </div>
  );
};

export default CountingCharacters;
