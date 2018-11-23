import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

class App extends Component {
  startCongest = () => {
    Meteor.call("congest", (err, result) =>
      console.log("I will never be called :(")
    );
  };

  render() {
    return <button onClick={this.startCongest}>Start congestion</button>;
  }
}

export default App;
