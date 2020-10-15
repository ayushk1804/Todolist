import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map((todo)=>(
        // <h3>{ todo.title }</h3>
        <TodoItem key={todo.id} todo={ todo } markCompleted={this.props.markCompleted} delTodo={this.props.delTodo}/>
        ))
        // return (
        //     <div>
        //         <h1>Todos</h1>
        //     </div>
        // )
    }
}

Todos.protoTypes = {
    todos: PropTypes.array.isRequired
}



export default Todos