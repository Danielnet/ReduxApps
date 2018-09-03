import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { editTask } from '../actions'



const style = {
  outerContainer: {
    display:'flex',
    width:'100%',
    alignContent:'stretch'
  },
   container: {
     display:'flex',
     width:'100%',
     alignContent:'stretch'
   },
   input: {
     padding:"5px",
     width:'100%',
     fontWeight: '400'
   },
   button: {
     padding:"5px"
   },
}

const EditTask = ({ dispatch,index,placeholder}) => {
  let input
  return (
    <div style={style.outerContainer}>
      <form style={style.container}
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            alert("Please insert a value")
            return
          }
          dispatch(editTask({index:index,value:input.value}))
          input.value = ''
        }}
      >
        <input placeholder={placeholder} style={style.input} ref={node => input = node} />
        <button style={style.button} type="submit">Submit</button>
      </form>
    </div>
  )
}
EditTask.propTypes = {
  index: PropTypes.number,
  placeholder: PropTypes.string
}

export default connect()(EditTask)