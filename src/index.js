import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ReduxDemo from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todos } from './reducers/reducers'
import { dateObj } from './components/date'


const defaultState = {
    todoList: [
        { date: dateObj(), text: 'Add redux state dev tool', completed: true },
        { date: dateObj(), text: 'Redux Thunk middleware', completed: false },
        { date: dateObj(), text: 'Store data to local', completed: false },
        { date: dateObj(), text: 'Upload to heroku', completed: false },
        { date: dateObj(), text: 'Proptypes', completed: false },
        { date: dateObj(), text: 'Dev-Dependencies', completed: false },
    ],
    globalEditMode: false,
    newValue: ''
}


const store = createStore(todos, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//setInterval(function(){ console.log(store.getState()); }, 10000);
ReactDOM.render(
    <Provider store={store}>
        <ReduxDemo />
    </Provider>,
    document.getElementById('root'));

