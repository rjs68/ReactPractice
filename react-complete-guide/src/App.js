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

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 23},
      { name: 'Dave', age: 27},
      { name: 'Julia', age: 21}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Rhys', age: 23},
      { name: event.target.value, age: 27},
      { name: 'Julia', age: 21}
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Rizzle')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Raz Daz')}
          changed={this.nameChangedHandler}>My Hobbies: Football</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
