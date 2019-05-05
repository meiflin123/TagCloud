import React from 'react';

class WordBox extends React.Component {
  state = { text: '' };
  // create a text area and a button in a form
  // create onChange handler for text area
    // record state
  // when the input is submitted, 
    //text should be sorted and sent to TagCloud.
    //text area should be emptied. 

  handleText = e => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState( {text: ''});
  };

  render() {
     return (
      <form onSubmit={this.handleSubmit}>
        <h4>Enter some text!</h4>
        <textarea onChange={this.handleText} value={this.state.text} />
        <div>
          <button>Submit Text</button>
        </div>
      </form>
    )
  }
}

export default WordBox;