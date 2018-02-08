import React, { PropTypes } from 'react';
import { colors } from '../constants';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { ButtonLink } from '../components/Buttons';
import { Link } from 'react-router';

// const style = {
//   button: {
//     font-size: 13,
//     margin: 4,
//     padding: 0.25 1,
//     color: white,
//     background-color: #4CAF50,
//     font-family: sans-serif,
//     border-radius: 3,
//     cursor: pointer,
//     transition: 0.3,
//     outline: none,
//     text-decoration: none,
//     &:hover {
//       transform: scale(1.02),
//     },
//   }
// };

const styles = {
  button: {
    margin: 6,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          hintText="Enter Name"
          value={this.state.value} 
          onChange={this.handleChange}
        />
        <Link to={this.state.value && "/board/"}>
          <RaisedButton 
            disabled={!this.state.value} 
            label="Start Game" 
            primary={true}
            style={styles.button}
          />
        </Link>
      </form>
    );
  }
}

export default NameForm;
