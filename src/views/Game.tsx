import React, { Component } from 'react';


// import { test } from './api/index' // mockjs

type Props = {
  name: string,
}

class  HelloMessage extends Component<Props>{
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HelloMessage name='111' />
      </header>
    </div>
  );
}

export default App;
