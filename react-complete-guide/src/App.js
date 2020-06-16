import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Rhys', age: 23},
      { name: 'Dave', age: 27},
      { name: 'Julia', age: 30}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      { name: 'Rizzle', age: 23},
      { name: 'Dave', age: 27},
      { name: 'Julia', age: 21}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
