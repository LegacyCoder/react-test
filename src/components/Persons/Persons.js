import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log('Props', props);
    return props.persons.map((person, index) => {
        return (<Person
            name={person.name}
            age={person.age}
            click={props.clicked.bind(this, index)}
            change={(event) => props.changed(event, person.id)}
        />
        );
    });
}

export default persons;