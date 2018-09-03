export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload
  }
}

export function completeTask(payload) {
  return {
    type: 'COMPLETE_TASK',
    payload
  }
}

export function deleteTask(payload) {
  return {
    type: 'DELETE_TASK',
    payload
  }
}

export function editTask(payload) {
  return {
    type: 'EDIT_TASK',
    payload
  }
}

export function globalEditMode(payload) {
  return {
    type: 'GLOBAL_EDIT_MODE',
    payload
  }
}