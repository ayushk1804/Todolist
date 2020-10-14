import React, { Component } from 'react';
import Header from './components/layout/header.js'
import Todos from './components/Todos';
import addTodo from './components/addTodo'
import './App.css'

export class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: "Take the trash out.",
      completed: false
    },{
      id: 2,
      title: "Water the plants.",
      completed: true
    },{
      id: 3,
      title: "Wash the car.",
      completed: false
    },
  ]
  }
  // Mark as completed
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete TODO
  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]} );
    // console.log(id)
  } 

  render() {
    return (
      <div classname="App">
        <Header />
        <addTodo />
        <Todos todos={this.state.todos} markCompleted={ this.markCompleted } delTodo={ this.delTodo } />
      </div>
    )
  }
}

export default App
