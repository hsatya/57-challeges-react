import React from "react";

const greetings = [
  "nice to meet you",
  "how are you?",
  "it's a pleasure to meet you!",
  "What's Up?",
];

class HelloC extends React.Component {
  state = { firstName: "", greet: "", display: false };

  render() {
    return (
      <div>
        <h1>Saying Hello</h1>
        <label>What is your name? </label>
        <input
          type="text"
          value={this.state.firstName}
          onChange={(e) =>
            this.setState({
              firstName: e.target.value,
              greet: greetings[Math.floor(Math.random() * greetings.length)],
            })
          }
        />
        <button type="submit" onClick={() => this.setState({ display: true })}>
          Submit
        </button>
        {this.state.display ? (
          <p>
            Hello, {this.state.firstName}, {this.state.greet}
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default HelloC;
