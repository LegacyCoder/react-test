import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "123fdf", name: "Sample name", age: 23 },
      { id: "1325fdf", name: "Another name", age: 29 },
      { id: "123f53t53tdf", name: "Different name", age: 33 },
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //Dont do this as a reference to the original state is being kept in persons
    // const persons = this.state.persons;

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = {
      ...this.state.person[personIndex]
    }

    //Alternative approach
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: person });

  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)}
            />)
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <p className={classes.join(' ')}>This is a paragraph</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
          </button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
