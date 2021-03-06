import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constroctor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <>
        {this.props.authenticated ? <p>I'm athenticated!</p> : null}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
  }
}

// Person.prototype = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func
// };

export default withClass(Person, classes.Person);
