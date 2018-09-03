import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import InputSection from './components/InputSection'
import Header from './components/Header'
import { connect } from 'react-redux'


//rcc
class ReduxDemo extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InputSection viewInfo={this.props.todoList.length}/>
        <hr></hr>
        <TodoList todos={this.props.todoList} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ReduxDemo);


