let id = 0;
export const addToDo = text => ({
    type: 'ADD_TODO',
    id: id++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const visibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const FIlTER = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
