import React, { Component } from 'react';
import '../assets/css/App.css';
// import { test } from './api/index' // mockjs

// type Props = {
//   name: string,
// }

class  HelloMessage extends Component{
  render() {
    return <ul>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
    </ul>
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloMessage>
        <span>hello</span>
        <span>world</span>
        </HelloMessage>

      </header>
    </div>
  );
}

export default App;
