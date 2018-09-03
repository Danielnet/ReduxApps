import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = ({ todos }) => {
    console.log(typeof todos[0])
    const view = todos.map((todo, index) =>
        <Todo key={index} text={todo.text} completed={todo.completed} index={index} />)

    return (
        <ul>
            {view}
        </ul>
    )
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }.isRequired
        ).isRequired
    )
}

export default TodoList