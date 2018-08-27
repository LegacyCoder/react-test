import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('Persons.js', props);
    }

    componentWillMount() {
        console.log('Persons js componentWillMount');
    }

    componentDidMount() {
        console.log('Persons js componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Update Persons.js componentWillRecieveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Update Persons.js inside shouldComponentUpdate');
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.persons !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('Update Persons.js inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Update Persons.js inside componentDidUpdate');
    }

    render() {
        console.log('Persons.js render')
        return this.props.persons.map((person, index) => {
            return (<Person
                name={person.name}
                age={person.age}
                click={this.props.clicked.bind(this, index)}
                change={(event) => this.props.changed(event, person.id)}
                key={person.id}
            />
            );
        });
    }
}

export default Persons;