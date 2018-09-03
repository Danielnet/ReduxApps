import React from 'react';
import { connect } from 'react-redux'
import { completeTask, deleteTask, editTask } from '../actions'
import EditTask from '../components/EditTask'

class Todo extends React.Component {

    render() {
        const dateStyle= {marginLeft:'10px',display:'flex',alignItems:'center',padding:'5px',fontSize:'15px',color:'grey'}
        const taskStyle = this.props.completed ? { color: 'green', textDecoration: 'line-through' } : { color: 'black' }

        const viewAllButtons =
            <div className="todoContainer">
                <li className="todo" onClick={() => this.props.completeTask(this.props.index)}
                    style={taskStyle}>
                    {this.props.text}
                </li>
                <button className="todoButtons" onClick={() => this.props.deleteTask(this.props.index)}>Delete</button>
                <button className="todoButtons" onClick={() => this.props.editTask({ index: this.props.index })}>Edit</button>
            </div>

        const viewEditMode =
            <div className="todoContainer">
                <EditTask index={this.props.index} placeholder={this.props.todoList[this.props.index].text} />
            </div>
        const viewNoButtons =
       
            <div className="todoContainer">
            <span style={dateStyle}>{this.props.todoList[this.props.index].date}</span>
                <li className="todo" onClick={() => this.props.completeTask(this.props.index)}
                    style={taskStyle}>
                    {this.props.text}
                </li>
                
            </div>


        let innerEditmode = this.props.todoList[this.props.index].inEditMode
        if (this.props.globalEditMode && innerEditmode)
            return (viewEditMode)
        if (this.props.globalEditMode && !innerEditmode)
            return (viewAllButtons)
        if (!this.props.globalEditMode)
            return (viewNoButtons)
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (number) => {
            dispatch(deleteTask(number))
        },
        completeTask: (number) => {
            dispatch(completeTask(number))
        },
        editTask: (obj) => {
            dispatch(editTask(obj))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo);