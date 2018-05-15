import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sample name", age: 23 },
      { name: "Another name", age: 29 },
      { name: "Different name", age: 33 },
    ]
  };

  //Denotes the event handler
  switchNameHandler = (newName) => {
    console.log("Clicked!!!");
    //State should not be changed directly(mutate)
    //as shown below
    // this.state.persons[0].name = "Changed Name";
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Another name", age: 29 },
        { name: "Different name", age: 42 },
      ]
    });

  };

  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <p>This is a paragraph</p>
        <input type="text"/>
        <button
          onClick={() => this.switchNameHandler('Name changed(anon fn)')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Name changed(p)')}>
          My Hobbies: Rowing
        </Person>
        <Person
          name={this.state.persons[1].name} age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name} age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
