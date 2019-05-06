import React from 'react';

class WordBox extends React.Component {
  // create a text area and a button in a form
  // create onChange handler for text area
    // record state
  // when the input is submitted, 
    //text should be sent to App, then to MyCloud.
    //text area should be emptied. 

  state = { text: '' };
  
  handleText = e => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };

  
  handleSubmit = e => {
    e.preventDefault();

    this.props.recordOccurance(this.state.text);
    
    this.setState({ text: '' }); 
    
  };

  render() {
     return (
      <form onSubmit={this.handleSubmit}>
        <h4>Enter some text!</h4>
    
        <textarea onChange={ this.handleText } value={ this.state.text } cols="80" rows="5"/>
        <div>
          <button>Submit Text</button>
        </div>
      </form>
    )
  }
}

export default WordBox;