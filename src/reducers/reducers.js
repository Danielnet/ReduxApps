import {dateObj} from '../components/date'

export function todos(state = [], action) {
    let clonedState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case 'ADD_TODO':
            clonedState.todoList.push({date:dateObj(), text: action.payload, completed: false })
            return clonedState

        case 'DELETE_TASK':
            clonedState.todoList.splice(action.payload, 1)
            return clonedState

        case 'COMPLETE_TASK':
            clonedState.todoList[action.payload].completed = !clonedState.todoList[action.payload].completed
            return clonedState

        case 'EDIT_TASK':
            if (clonedState.todoList[action.payload.index].inEditMode) {
                clonedState.todoList[action.payload.index].inEditMode = !clonedState.todoList[action.payload.index].inEditMode
                clonedState.todoList[action.payload.index].text = action.payload.value
            }
            else {
                clonedState.todoList[action.payload.index].inEditMode = !clonedState.todoList[action.payload.index].inEditMode
            }
            return clonedState

        case 'GLOBAL_EDIT_MODE':
            clonedState.globalEditMode = !clonedState.globalEditMode
            return clonedState

        default:
            return state
    }
}