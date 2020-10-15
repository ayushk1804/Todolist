import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header.js';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import {v4} from 'uuid';
import About from './components/pages/About.js';

import './App.css';

export class App extends Component {
  state = {
    todos: [
      {
      id: v4(),
      title: "Take the trash out.",
      completed: false
    },{
      id: v4(),
      title: "Water the plants.",
      completed: true
    },{
      id: v4(),
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

  // Add TODO Tasks
  addTodo = (title) => {
    const newTodo = {
      id: v4(),
      title: title,
      completed:false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
    // const prevState = this.state;
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.completed === false)]})
    // this.setState({ todos: [...this.state.todos, [...prevState.filter(todo => todo.completed === false)]]})
  }

  // Delete TODO
  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]} );
  } 

  render() {
    return (
      <Router>
        <div className="App">
            <div className="container">
            <Header />
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markCompleted={ this.markCompleted } delTodo={ this.delTodo } />
                </React.Fragment>
            )} />
            <Route path="/about" component={ About }/>

            </div>
        </div>
      </Router>
    )
  }
}

export default App