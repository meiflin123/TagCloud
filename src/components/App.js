import React from 'react';
import WordBox from './WordBox';
import MyCloud from './MyCloud';

class App extends React.Component {

  // option 1
  // create hash table to save occurance of each word. e.g. {'aaa': 2, 'bb': 1, 'ccc': 2}
  // record the word with highest occurance
    // edge case: words with same Max number of occurance
    // e.g. input'aaa aaa bb d ccc ccc' should generate state = { mostFreqW:["aaa", "ccc"], otherWords:["bb", "d"] }
    // note: store only unqiue words to state (in order to display each word only one time in the tag cloud).
  // set state for mostFrequentWord and the other words

  // option 2 (better)
  // create an array of objects, save occurance as value for each word [{word: 'aaa', value: 2}, {word: 'bb', value: 1}, ...]
  // pass the array to MyCloud, size of each text will be set according to its value. 

  state = { mostFreqW: [], otherWords: [] };

  findMostFreqW = text => {
    let words = text.split(' ')
    let onlyUnique = [];
    let table = {};
    let currentCount = 1;
    let mostFreqW = [];

    for (let i in words) {
      let word = words[i]

      if (!table[word]) {
        table[word] = 1
        onlyUnique.push(word);
      } 

      else { 
        table[word]+= 1;
        if (table[word] > currentCount) {
          currentCount = table[word];
          mostFreqW = [word];
        }
        if (table[word] === currentCount && !mostFreqW.includes(word) ) {
          mostFreqW.push(word);
        }  

      }
    }
    const remainingText = onlyUnique.filter(w => !mostFreqW.includes(w));
    this.setState({ mostFreqW: mostFreqW, otherWords: remainingText})
  }

  render() {
    return (
      <div>
        <MyCloud mostFreqW={ this.state.mostFreqW } otherWords={this.state.otherWords}>
          <WordBox findMostFreqW={ this.findMostFreqW }/>
        </MyCloud>
      </div>

    )
  }
}

export default App;