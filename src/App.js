import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css'

export class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: "Take the trash out.",
      completed: false
    },
    {
      id: 2,
      title: "Water the plants.",
      completed: true
    },{
      id: 1,
      title: "Wash the car.",
      completed: false
    },
  ]
  }
  render() {
    return (
      <div classname="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
