import React from 'react';

class OurName extends React.Component {

  constructor(props){
    super(props);
    this.alternate_text = "Our team";
    this.initial_text = "Smiles AI";
    this.state = {
      initial : true,
      text: this.initial_text
    }
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(){
    var new_text = !this.state.initial ? this.initial_text : this.alternate_text;
    this.setState({
      text: new_text, 
      initial: !this.state.initial
    });
  };

  render(){
    return (
      <p className="OurName">
        <h1 class ="text-warning">
            <span onClick={this.changeTitle}>{this.state.text}</span>
        </h1>
      </p>
    );
  }
}

export default OurName;