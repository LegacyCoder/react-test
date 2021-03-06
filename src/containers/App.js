import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('App.js', props);
  }

  componentWillMount() {
    console.log('App js componentWillMount');
  }

  componentDidMount() {
    console.log('App js componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Update App js inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('Update App js inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Update App js inside componentDidUpdate');
  }

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

    console.log('Person index', personIndex);
    const person = {
      ...this.state.persons[personIndex]
    }

    //Alternative approach
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });

  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('App.js render');
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
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
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
