import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Sample name", age:23},
      {name: "Another name", age:29},
      {name: "Different name", age:33},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <p>This is a paragraph</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Rowing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
