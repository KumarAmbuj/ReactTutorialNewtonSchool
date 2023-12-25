import React from "react";
import "./App.css";
import Content from "./component/content";

class App extends React.Component {
  constructor(props) {
    console.log("hey i am constructor");
    super(props);
    this.state = {
      isVisible: false,
      enableText: "Feature are now enable",
      disableText: "Feature are now disable",
    };
  }

  static getDerivedStateFromProps() {
    console.log("hey i am getDerivedStateFromProps");
    //return null;
  }

  handleEnable = () => {
    // if you want to update state react have a function called setState
    const updatedState = { ...this.state };
    updatedState.isVisible = true;
    this.setState(updatedState);
  };

  handleDisable = () => {
    // if you want to update state react have a function called setState
    const updatedState = { ...this.state };
    updatedState.isVisible = false;
    this.setState(updatedState);
  };

  componentDidMount() {
    console.log("hey i am componentDidMount");
  }

  render() {
    console.log("inside renbder");
    return (
      <div>
        {this.state.isVisible ? this.state.enableText : this.state.disableText}
        <button onClick={this.handleEnable}>Click me to enable </button>
        <button onClick={this.handleDisable}>Click me to disable </button>
        <Content article={"lorem iposume"} />
      </div>
    );
  }
}

export default App;

// whenever you create the class you have one keyword inside it which is this

` 1                                                   `