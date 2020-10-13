import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through',
                backgroundColor:'223f44'
            }
        }else{
            return {
                textDecoration: 'none',
                backgroundColor:'f4f4f4'
            }
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

// proptypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}


export default TodoItem
