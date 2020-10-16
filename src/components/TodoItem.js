import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration : this.props.todo.completed ? 'line-through' : 'none',
            background:'#f3f3f3'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind( this, id )}/>
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}


const btnStyle ={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '4px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    
}

export default TodoItem