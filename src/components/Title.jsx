import React from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.alternate_text = "Smiles AI";
    this.initial_text = "Our Team";
    this.state = {
      initial: true,
      text: this.initial_text
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle() {
    var new_text = !this.state.initial
      ? this.initial_text
      : this.alternate_text;
    this.setState({
      text: new_text,
      initial: !this.state.initial
    });
  }

  render() {
    return (
      <h1 class="display-4 font-weight-bold text-center text-warning">
        <span onClick={this.changeTitle}>{this.state.text}</span>
      </h1>
    );
  }
}

export default Title;
