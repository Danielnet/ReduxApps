import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addTodo, globalEditMode } from '../actions'


const style = {
  container: {
    width: "100%",
    marginBottom: "50px",
    textAlign: 'center'
  },
  input: {
    padding: "5px",
    fontWeight: '400'
  },
  button: {
    padding: "5px"
  },
}

const InputSection = ({ dispatch, viewInfo }) => {
  let input
  return (
    <div style={style.container}>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input style={style.input} ref={node => input = node} />
        <button style={style.button} type="submit">
          Add Todo
        </button>
        {viewInfo ? <button className="headerButton" onClick={() => dispatch(globalEditMode())}>Edit</button> : ''}
      </form>
    </div>
  )
}

//viewInfo = todoList.length
InputSection.propTypes = {
  viewInfo: PropTypes.number
}

export default connect()(InputSection)