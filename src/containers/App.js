import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );

    }



    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
