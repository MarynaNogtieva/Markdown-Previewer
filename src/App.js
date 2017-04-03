import React, { Component } from 'react';
import MarkUp from './MarkUp.js';
import MarkDown from './MarkDown.js';

import logo from './logo.svg';
import './App.css';

import marked from 'marked';
console.log(marked('I am using __markdown__.'));

var markedValues = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Maryna Nogtieva](https://www.freecodecamp.com/freecodecampermaryna)*'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: markedValues 
    }
  }

  storeMarkdown(newMarkdown){
    this.setState({
      data: newMarkdown
    })
  }
  render() {
    return (
      <div className="App">
          <div className="ElementHolder">
              <h1>Markdown Previewer</h1>
             <MarkDown storeMarkdown={this.storeMarkdown.bind(this)} title="MarkDown Component"  val={this.state.data}/>
               <MarkUp data={this.state.data}  title="MarkUp Component" />
          </div>
       </div>
    );
  }
}






export default App;
