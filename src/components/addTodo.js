import React, { Component } from 'react'

export class addTodo extends Component {
    render() {
        return (
            <form>
                <input
                type="text"
                name="title"
                placeholder="Add an item todo..."
                ></input>
                <input
                type="submit"
                >
                </input>
            </form>
        )
    }
}

export default addTodo
