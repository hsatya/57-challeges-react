import React, { useState } from "react";

const Hello = () => {
  const greetings = [
    "nice to meet you",
    "how are you?",
    "it's a pleasure to meet you!",
    "What's Up?",
  ];
  const [result, setResult] = useState(null);
  const [display, setDisplay] = useState(false);
  const [index, setIndex] = useState(0);

  // const handleChange = (e) => {
  //   // console.log(e.nativeEvent.data);
  //   setResult(
  //     (prevResult) =>
  //       (prevResult += e.nativeEvent.data != null ? e.nativeEvent.data : "")
  //   );
  // };

  const handleChange = (e) => {
    setIndex(Math.floor(Math.random() * greetings.length));
    setResult(e.target.value);
    setDisplay(false);
  };

  return (
    <div>
      <h1>Saying Hello</h1>
      <label htmlFor="">What is your name? </label>
      <input type="text" onChange={handleChange} />
      <br />
      <button type="submit" onClick={() => setDisplay(true)}>
        Submit
      </button>
      {display ? (
        <p>
          Hello {result}, {greetings[index]}
        </p>
      ) : null}
    </div>
  );
};

export default Hello;
